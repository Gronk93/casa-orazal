import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, Clock, X, Maximize2 } from 'lucide-react';
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

    // State for drag and modal
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Audio State for Modal Cleanup (Optional native pause when closing modal)
    const audioRef = useRef(null);

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
                                <div key={post.slug} className="snap-center shrink-0 w-[90vw] md:w-[85vw] lg:w-[1100px] h-[75vh] md:h-[70vh] min-h-[550px] relative top-0 hover:-translate-y-2 transition-transform duration-500">
                                    <article
                                        className="h-full w-full flex flex-col md:flex-row card-glow overflow-hidden group rounded-xl bg-[#020202]"
                                        style={{ border: '1px solid #1a1a1a', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}
                                    >
                                        <div className="p-6 md:p-12 flex flex-col justify-center flex-1 order-2 md:order-1 relative z-10 w-full md:max-w-[45%] h-1/2 md:h-full">

                                            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#b8c4d4] opacity-70 mb-4 font-mono">
                                                Cápsula Sonora
                                            </p>

                                            <h2 className="text-3xl md:text-5xl font-light text-[#f0ebe2] mb-6" style={{ fontFamily: 'Rye, cursive' }}>
                                                {post.title[lang]}
                                            </h2>

                                            <p className="text-[1.05rem] md:text-[1.2rem] text-[#c8bfb0] leading-snug md:leading-loose mb-6 overflow-hidden md:overflow-auto hide-scrollbar line-clamp-4 md:line-clamp-none">
                                                {post.excerpt[lang]}
                                            </p>

                                            <div className="rounded-2xl p-3 md:p-5 flex items-center gap-5 mt-auto" style={{ background: 'linear-gradient(145deg, #0c0c0c, #050505)', border: '1px solid #1f1f1f', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)' }}>
                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        setIsModalOpen(true);
                                                    }}
                                                    className="w-full h-12 rounded-lg flex items-center justify-center gap-3 bg-[#b8c4d4] text-black hover:bg-white transition-all cursor-pointer font-bold tracking-widest uppercase text-xs"
                                                >
                                                    <Maximize2 size={16} /> Abrir Infografía Interactiva
                                                </button>
                                            </div>
                                        </div>

                                        <div
                                            className="flex-1 relative overflow-hidden order-1 md:order-2 h-1/2 md:h-full md:min-h-full bg-[#050505] flex items-center justify-center cursor-pointer"
                                            onClick={(e) => {
                                                if (!isDragging) {
                                                    setIsModalOpen(true);
                                                }
                                            }}
                                        >
                                            <img
                                                src="/images/infografia.png"
                                                alt="Infografía Casa Orazal"
                                                className="absolute inset-0 w-full h-full object-cover md:object-contain object-top md:object-center opacity-95 transition-transform duration-1000 group-hover:scale-[1.03]"
                                            />
                                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020202] to-transparent hidden md:block pointer-events-none" />
                                            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020202] to-transparent block md:hidden pointer-events-none" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                <div className="bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-2 text-xs tracking-widest uppercase font-bold border border-white/10 shadow-2xl">
                                                    <Maximize2 size={16} /> Ampliar
                                                </div>
                                            </div>
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

            {/* --- MODAL DE INFOGRAFÍA Y AUDIO --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex flex-col bg-[#050505] text-white">
                    {/* Header del Modal */}
                    <div className="w-full flex justify-between items-center p-4 md:p-6 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10">
                        <span className="font-mono text-xs tracking-widest text-[#b8c4d4] uppercase">Infografía Interactiva</span>
                        <button
                            onClick={() => {
                                setIsModalOpen(false);
                                if (audioRef.current) {
                                    audioRef.current.pause();
                                }
                            }}
                            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Contenido Visual con Reproductor Integrado Arriba (Scrollable en móviles) */}
                    <div className="flex-1 overflow-auto w-full flex flex-col items-center mt-16 mb-6">
                        {/* REPRODUCTOR NATIVO DE HTML5 - Ahora integrado en el flujo, no fijo */}
                        <div className="w-full max-w-3xl px-4 md:px-8 pt-4 pb-6 flex flex-col items-center gap-3">
                            <p className="text-[#f0ebe2] text-xs md:text-sm font-mono tracking-widest uppercase opacity-80 text-center">
                                Cápsula Sonora: Mezcal Casa Orazal
                            </p>
                            <audio
                                ref={audioRef}
                                id="modal-audio"
                                controls
                                preload="none"
                                className="w-full h-12 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                                style={{ borderRadius: '8px' }}
                            >
                                <source src="/audios/mezcal_casa_orazal.m4a" type="audio/mp4" />
                                Tu navegador no soporta el elemento de audio.
                            </audio>
                        </div>

                        {/* Infografía */}
                        <div className="w-full max-w-5xl px-2 md:px-8 pb-10 flex items-center justify-center">
                            <img
                                src="/images/infografia.png"
                                alt="Infografía Detallada"
                                className="w-full h-auto object-contain shadow-2xl rounded-lg"
                            />
                        </div>
                    </div>


                </div>
            )}
        </div>
    );
}
