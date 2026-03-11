import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [v, setV] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.1 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return (
        <div ref={ref} className={className} style={{ opacity: v ? 1 : 0, transform: v ? 'none' : 'translateY(22px)', transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s` }}>
            {children}
        </div>
    );
}

export default function Blog() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.startsWith('en') ? 'en' : 'es';

    // Audio Player State & Setup
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [durationStr, setDurationStr] = useState("0:00");
    const [currentTimeStr, setCurrentTimeStr] = useState("0:00");

    // Drag-to-Scroll State
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const onMouseLeave = () => {
        setIsDragging(false);
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // multiplier
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const formatTime = (time) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlay = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            setCurrentTimeStr(formatTime(current));
            if (duration > 0) {
                setProgress((current / duration) * 100);
            }
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDurationStr(formatTime(audioRef.current.duration));
        }
    };

    return (
        <div className="bg-[#080808] text-[#f0ebe2] min-h-screen relative">
            {/* --- PREMIUM HERO CON SCROLL --- */}
            <div className="absolute top-0 left-0 right-0 h-[80vh] md:h-[100vh] pointer-events-none z-[0] overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/images/botellas 3.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Sutil transición en la base mínima indispensable */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
            </div>

            {/* --- PREMIUM CONTENT --- */}
            <section className="relative z-10 w-full min-h-[50vh] flex flex-col items-center justify-center pt-[30vh] md:pt-[35vh] pb-16">
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                    <Reveal>
                        <div
                            className="text-[0.65rem] md:text-[0.75rem] tracking-[0.4em] uppercase mb-4"
                            style={{ fontFamily: 'var(--font-ui)', color: '#d0d8e8', opacity: 0.8 }}
                        >
                            {t('blog.label')}
                        </div>
                        <h1
                            className="text-6xl md:text-8xl lg:text-9xl mb-6"
                            style={{
                                fontFamily: '"Amatic SC", cursive',
                                fontWeight: 700,
                                color: '#ffffff',
                                textShadow: '0 4px 20px rgba(0,0,0,0.6)',
                                lineHeight: 0.9
                            }}
                        >
                            {t('blog.title')}
                        </h1>
                        <div className="w-16 md:w-24 h-[1px] bg-[#d0d8e8]/40 mx-auto my-6" />
                        <p
                            className="text-[#c8bfb0] text-[1.1rem] md:text-[1.3rem] max-w-lg mx-auto leading-relaxed"
                            style={{
                                fontFamily: '"Caveat Brush", cursive',
                                textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                            }}
                        >
                            {t('blog.subtitle')}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Styles for scrollbar */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />

            {/* Articles Carousel */}
            <section className="section-pad w-full overflow-hidden">
                <div
                    ref={carouselRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}
                    className={`flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 pb-16 pt-4 px-6 md:px-[10vw] hide-scrollbar items-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                    style={{
                        scrollBehavior: isDragging ? 'auto' : 'smooth',
                        userSelect: 'none' // Evita seleccionar texto al arrastrar
                    }}
                >
                    {blogPosts.map((post) => {
                        // 1. Tarjeta Principal (Audio + Infografía)
                        if (post.slug === 'proceso-ancestral-mezcal') {
                            return (
                                <div key={post.slug} className="snap-center shrink-0 w-[90vw] md:w-[85vw] lg:w-[1100px] h-[650px] md:h-[700px] relative top-0 hover:-translate-y-2 transition-transform duration-500">
                                    <article
                                        className="h-full w-full flex flex-col md:flex-row card-glow overflow-hidden group rounded-xl bg-[#020202]"
                                        style={{ border: '1px solid #1a1a1a', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}
                                    >
                                        <div className="p-8 md:p-12 flex flex-col justify-center flex-1 order-2 md:order-1 relative z-10 w-full md:max-w-[45%]">

                                            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#b8c4d4] opacity-70 mb-4 font-mono">
                                                Cápsula Sonora
                                            </p>

                                            <h2 className="text-3xl md:text-5xl font-light text-[#f0ebe2] mb-6" style={{ fontFamily: 'Rye, cursive' }}>
                                                {post.title[lang]}
                                            </h2>

                                            <p className="text-[1.05rem] md:text-[1.2rem] text-[#c8bfb0] leading-loose mb-10 overflow-auto hide-scrollbar">
                                                {post.excerpt[lang]}
                                            </p>

                                            <div className="rounded-2xl p-4 md:p-5 flex items-center gap-5 mt-auto" style={{ background: 'linear-gradient(145deg, #0c0c0c, #050505)', border: '1px solid #1f1f1f', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)' }}>
                                                <button onClick={togglePlay} className="w-14 h-14 rounded-full flex items-center justify-center bg-[#b8c4d4] text-black hover:bg-white hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer shadow-[0_0_20px_rgba(184,196,212,0.2)]">
                                                    {isPlaying ? (
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                            <rect x="6" y="4" width="4" height="16"></rect>
                                                            <rect x="14" y="4" width="4" height="16"></rect>
                                                        </svg>
                                                    ) : (
                                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                        </svg>
                                                    )}
                                                </button>

                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[#e0e0e0] text-sm md:text-base font-medium truncate mb-2 tracking-wide" style={{ fontFamily: 'var(--font-ui)' }}>Mezcal Casa Orazal</p>
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-[0.65rem] text-[#666] tabular-nums font-mono">{currentTimeStr}</div>
                                                        <div className="flex-1 h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden relative cursor-pointer group-hover:bg-[#222]" onClick={(e) => {
                                                            if (audioRef.current && audioRef.current.duration) {
                                                                const rect = e.currentTarget.getBoundingClientRect();
                                                                const percent = (e.clientX - rect.left) / rect.width;
                                                                audioRef.current.currentTime = percent * audioRef.current.duration;
                                                            }
                                                        }}>
                                                            <div className="absolute top-0 left-0 h-full bg-[#b8c4d4] rounded-full shadow-[0_0_10px_#b8c4d4] transition-all duration-100 ease-linear pointer-events-none" style={{ width: `${progress}%` }}></div>
                                                        </div>
                                                        <div className="text-[0.65rem] text-[#666] tabular-nums font-mono">{durationStr}</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <audio
                                                ref={audioRef}
                                                id="blog-audio"
                                                preload="metadata"
                                                src="/audios/Mezcal Casa Orazal.m4a"
                                                onTimeUpdate={handleTimeUpdate}
                                                onLoadedMetadata={handleLoadedMetadata}
                                                onEnded={() => setIsPlaying(false)}
                                            />
                                        </div>

                                        <div className="flex-1 relative overflow-hidden order-1 md:order-2 min-h-[300px] md:min-h-full bg-[#050505] flex items-center justify-center">
                                            <img
                                                src="/images/infografia.png"
                                                alt="Infografía Casa Orazal"
                                                className="absolute inset-0 w-full h-full object-cover md:object-contain object-top md:object-center opacity-95 transition-transform duration-1000 group-hover:scale-[1.03]"
                                            />
                                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent hidden md:block" />
                                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020202] to-transparent block md:hidden" />
                                        </div>
                                    </article>
                                </div>
                            );
                        }

                        // 2. Tarjetas de Posts Normales
                        return (
                            <div key={post.slug} className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[450px] h-[550px] md:h-[600px] relative top-0 hover:-translate-y-2 transition-transform duration-500">
                                <Link to={`/blog/${post.slug}`} className="group block w-full h-full rounded-xl overflow-hidden card-glow shadow-2xl bg-[#020202]" style={{ border: '1px solid #111' }}>
                                    <article className="h-full flex flex-col">
                                        <div className="aspect-[4/3] md:aspect-[16/10] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0c0c0c 0%, #000000 100%)' }}>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="text-[8rem] font-light opacity-[0.04]" style={{ fontFamily: 'Rye, cursive', color: '#b8c4d4' }}>
                                                    {post.category[lang][0]}
                                                </div>
                                            </div>
                                            <div className="absolute top-5 left-5 z-10">
                                                <span className="text-[0.6rem] tracking-[0.25em] uppercase px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full" style={{ border: '1px solid rgba(184,196,212,0.2)', color: '#b8c4d4' }}>
                                                    {post.category[lang]}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-8 md:p-10 flex flex-col flex-1">
                                            <div className="flex items-center gap-5 mb-5 text-[#4a4a4a] text-[0.65rem] tracking-wider uppercase font-mono">
                                                <span className="flex items-center gap-2"><Calendar size={12} strokeWidth={1.5} /> {post.date}</span>
                                                <span className="flex items-center gap-2"><Clock size={12} strokeWidth={1.5} /> {post.readTime}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-light text-[#f0ebe2] mb-4 group-hover:text-[#b8c4d4] transition-colors duration-300" style={{ fontFamily: 'Rye, cursive' }}>{post.title[lang]}</h2>
                                            <p className="text-[1.05rem] text-[#c8bfb0] leading-relaxed flex-1 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                                {post.excerpt[lang]}
                                            </p>
                                            <div className="mt-8">
                                                <span className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.25em] uppercase text-[#b8c4d4] opacity-50 group-hover:opacity-100 transition-opacity">
                                                    {t('blog.read_more')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
