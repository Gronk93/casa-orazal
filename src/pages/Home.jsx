import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronDown, Mail, MessageCircle, Instagram, Linkedin, Facebook } from 'lucide-react';

/* --- Reveal on scroll --- */
function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.12 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'none' : 'translateY(28px)',
                transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

/* --- Section label --- */
function SectionLabel({ children }) {
    return (
        <div className="flex items-center gap-4 mb-3">
            <div className="h-px w-8 bg-[#b8c4d4] opacity-50" />
            <span
                className="text-[0.72rem] tracking-[0.2em] uppercase text-[#b8c4d4]"
                style={{ fontFamily: 'Rye, cursive' }}
            >
                {children}
            </span>
        </div>
    );
}

export default function Home() {
    const { t } = useTranslation();

    const products = [
        {
            key: 'arroqueno',
            color: '#4a8a4a', // Verde original
            colorLight: '#1a4d1a',
            border: '#2a5a2a',
            letter: 'A'
        },
        {
            key: 'papalometl',
            color: '#b8c4d4',
            colorLight: 'rgba(184,196,212,0.10)',
            border: 'rgba(184,196,212,0.30)',
            letter: 'P',
        },
    ];

    const services = [
        { key: 'corporate_tastings', icon: '?' },
        { key: 'private_events', icon: '?' },
        { key: 'distribution', icon: '?' },
    ];

    const originItems = [
        { key: 'agave', num: '01', image: '/images/coccion.png' },
        { key: 'cooking', num: '02', image: '/images/molienda.png' },
        { key: 'fermentation', num: '03', image: '/images/fermentacion.png' },
        { key: 'distillation', num: '04', image: '/images/destilacion.png' },
    ];

    return (
        <div className="bg-[#080808] text-[#f0ebe2]">

            {/* -------------- HERO -------------- */}
            <section
                className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-[12vh] lg:pt-[10vh]"
            >
                {/* -- Fondo limpio -- */}
                <div
                    className="absolute inset-0 pointer-events-none bg-no-repeat bg-[length:140%_auto] bg-[position:45%_35%] sm:bg-cover sm:bg-center"
                    style={{
                        backgroundImage: "url('/images/HERO 1.jpg')",
                    }}
                />

                {/* -- Overlay más tenue solo para legibilidad básica -- */}
                <div className="absolute inset-0 bg-[#000000] opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/40 pointer-events-none" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-2 mt-8 lg:mt-0">

                    {/* Pre-title */}
                    <span
                        className="animate-fade-in"
                        style={{
                            fontFamily: '"Amatic SC", cursive',
                            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                            letterSpacing: '0.2em',
                            color: '#e8eef8',
                            textTransform: 'uppercase',
                        }}
                    >
                        {t('hero.pre_title')}
                    </span>

                    {/* Title - Much Smaller responsive */}
                    <h1
                        className="animate-fade-up"
                        style={{
                            fontFamily: '"Amatic SC", cursive',
                            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                            fontWeight: 700,
                            lineHeight: 1,
                            margin: 0,
                            color: '#ffffff',
                            textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                        }}
                    >
                        {t('hero.title_line1')}<br />{t('hero.title_line2')}
                    </h1>

                    {/* Línea divisoria */}
                    <div className="w-16 h-[1px] bg-[#e8eef8]/50 my-2 lg:my-1 animate-fade-in" />
                </div>

                {/* -- Textos inferiores (Pie de Imagen) -- */}
                <div className="absolute bottom-10 lg:bottom-16 w-full flex flex-col items-center justify-center gap-4 z-20 px-6">
                    {/* Subtitle - Smaller */}
                    <p
                        className="animate-fade-up text-center"
                        style={{
                            fontFamily: '"Caveat Brush", cursive',
                            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                            color: '#d0d8e8',
                            maxWidth: '450px',
                            lineHeight: 1.4,
                            textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                        }}
                    >
                        {t('hero.subtitle')}
                    </p>

                    {/* CTAs - Smaller */}
                    <div className="animate-fade-up flex flex-col sm:flex-row gap-3 scale-90">
                        <Link to="/contacto" className="btn-primary" style={{ fontFamily: '"Caveat Brush", cursive' }}>
                            {t('hero.cta_primary')}
                        </Link>
                        <a href="https://wa.me/529510000000" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ fontFamily: '"Caveat Brush", cursive' }}>
                            {t('hero.cta_secondary')}
                        </a>
                    </div>
                </div>
            </section>



            {/* -------------- QUIÉNES SOMOS -------------- */}
            <section className="section-pad border-t border-[#141414]">
                <div className="container-orazal">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <Reveal>
                                <SectionLabel>{t('about.label')}</SectionLabel>
                            </Reveal>
                            <Reveal delay={0.15}>
                                <h2
                                    className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
                                    style={{ fontFamily: 'Rye, cursive' }}
                                >
                                    {t('about.title')}
                                </h2>
                            </Reveal>
                            <Reveal delay={0.25}>
                                <p className="text-[1.05rem] leading-loose text-[#c8bfb0] mb-6">
                                    {t('about.body')}
                                </p>
                            </Reveal>
                            <Reveal delay={0.35}>
                                <p className="text-[1.05rem] leading-loose text-[#c8bfb0] mb-10">
                                    {t('about.body2')}
                                </p>
                            </Reveal>
                            <Reveal delay={0.45}>
                                <div className="border-l-2 border-[#b8c4d4] pl-6 py-1">
                                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#b8c4d4] mb-2">
                                        {t('about.vision_label')}
                                    </p>
                                    <p className="text-[1.05rem] text-[#c8bfb0] italic leading-loose" style={{ fontFamily: 'Rye, cursive', fontSize: '1.1rem' }}>
                                        "{t('about.vision')}"
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                        {/* Visual side responsive */}
                        <Reveal delay={0.2} className="relative mt-8 lg:mt-0">
                            <div className="relative max-w-sm mx-auto lg:ml-auto flex flex-col items-center justify-center">
                                {/* IMAGEN FILOSOFÍA */}
                                <div className="w-full flex justify-center transition-transform hover:scale-105 duration-1000 mb-6 lg:mb-8 lg:translate-x-4">
                                    <img
                                        src="/images/PAPALOMETL-2.png"
                                        alt="Mezcal Papalometl"
                                        className="w-3/4 sm:w-2/3 lg:w-full max-w-[80%] h-auto drop-shadow-2xl opacity-95"
                                        style={{ filter: 'drop-shadow(-10px 15px 25px rgba(0,0,0,0.8))' }}
                                    />
                                </div>
                                <div className="text-center z-10 lg:translate-x-4">
                                    <p className="text-[0.6rem] tracking-[0.4em] uppercase text-[#C0C0C0]">Fundada con propósito</p>
                                    <p className="text-[0.6rem] tracking-[0.4em] uppercase text-[#C0C0C0] mt-1">Oaxaca · México</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* -------------- PRODUCTOS PREVIEW -------------- */}
            <section className="section-pad bg-[#0a0a0a]">
                <div className="container-orazal">
                    <Reveal className="text-center mb-16">
                        <SectionLabel>{t('products.label')}</SectionLabel>
                        <h2
                            className="text-4xl md:text-5xl font-light mb-4"
                            style={{ fontFamily: 'Rye, cursive' }}
                        >
                            {t('products.title')}
                        </h2>
                        <p className="text-[1.05rem] text-[#c8bfb0] max-w-md mx-auto">
                            {t('products.subtitle')}
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 md:gap-12 mb-16">
                        {products.map((p, i) => (
                            <Reveal key={p.key} delay={i * 0.15}>
                                <div
                                    className="group relative aspect-[3/4] flex flex-col justify-end p-8 overflow-hidden cursor-pointer card-glow transition-all duration-500 rounded-sm"
                                    style={{
                                        background: "linear-gradient(180deg, #0f0f0f 0%, ${p.colorLight} 100%)",
                                        border: "1px solid ${p.border}",
                                    }}
                                >
                                    <div
                                        className="absolute top-0 right-0 text-[10rem] leading-none font-light opacity-[0.04] select-none pointer-events-none text-[#b8c4d4]"
                                        style={{ fontFamily: 'Rye, cursive' }}
                                    >
                                        {p.letter}
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 pointer-events-none mt-4">
                                        <img
                                            src={p.key === 'arroqueno' ? '/images/HORNO.png' : '/images/papalometl maguey.png'}
                                            alt={p.key}
                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                                        />
                                    </div>

                                    <div className="relative z-10 w-full flex justify-center mt-auto">
                                        <Link
                                            to="/productos"
                                            className="inline-flex items-center justify-center w-full gap-2 text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 group-hover:gap-3 text-white border border-transparent group-hover:border-white/20 py-3 rounded-none bg-black/40 backdrop-blur-sm"
                                        >
                                            {t('products.discover')} <ArrowRight size={12} className="opacity-70 group-hover:opacity-100" />
                                        </Link>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="text-center mt-12 mb-6">
                        {/* Botón requerido por el usuario */}
                        <Link
                            to="/productos"
                            className="inline-flex items-center justify-center gap-3 text-[0.8rem] md:text-[0.9rem] tracking-[0.3em] font-light text-[#b8c4d4] hover:text-white transition-all duration-300 relative group uppercase"
                        >
                            DESCUBRE NUESTROS MEZCALES <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                            {/* Línea difuminada inferior como en la imagen */}
                            <span className="absolute -bottom-3 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#b8c4d4]/80 to-transparent scale-x-75 group-hover:scale-x-100 transition-transform duration-500"></span>
                        </Link>
                    </Reveal>
                </div>
            </section >

            {/* -------------- ORIGEN -------------- */}
            < section className="section-pad bg-[#080808]" >
                <div className="container-orazal">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <Reveal>
                            <SectionLabel>{t('origin.label')}</SectionLabel>
                            <h2
                                className="text-4xl md:text-5xl font-light mb-6"
                                style={{ fontFamily: 'Rye, cursive' }}
                            >
                                {t('origin.title')}
                            </h2>
                            <p className="text-[0.65rem] tracking-[0.2em] uppercase text-[#c8bfb0] mb-6">
                                {t('origin.subtitle')}
                            </p>
                            <p className="text-[1.05rem] text-[#c8bfb0] leading-loose">
                                {t('origin.body')}
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {originItems.map((item, i) => (
                            <Reveal key={item.key} delay={i * 0.12}>
                                <div
                                    className="relative p-8 group hover:border-[rgba(184,196,212,0.25)] transition-all duration-400 card-glow overflow-hidden h-full flex flex-col justify-end min-h-[320px]"
                                    style={{ border: '1px solid #1a1a1a', background: '#000' }}
                                >
                                    {/* Capa de imagen de fondo */}
                                    <div
                                        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${item.image}')`, opacity: 0.8 }}
                                    ></div>

                                    {/* Capa de gradiente oscuro para asegurar contraste de texto */}
                                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/10 pointer-events-none"></div>

                                    {/* Contenido (Textos) */}
                                    <div className="relative z-10 pointer-events-none mt-auto">
                                        <div
                                            className="text-[3rem] font-light text-[#b8c4d4] opacity-50 mb-4 leading-none"
                                            style={{ fontFamily: 'Rye, cursive', textShadow: '2px 4px 10px rgba(0,0,0,0.9)' }}
                                        >
                                            {item.num}
                                        </div>
                                        <h4
                                            className="text-xl font-light text-[#ffffff] mb-3"
                                            style={{ fontFamily: 'Rye, cursive', textShadow: '2px 4px 6px rgba(0,0,0,0.9)' }}
                                        >
                                            {t(`origin.items.${item.key}.title`)}
                                        </h4>
                                        <p className="text-[1rem] text-[#f0ebe2] leading-loose drop-shadow-md" style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.8)' }}>
                                            {t(`origin.items.${item.key}.desc`)}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section >

            {/* -------------- SERVICIOS DESTACADOS -------------- */}
            < section className="section-pad bg-[#0a0a0a] border-t border-[#141414]" >
                <div className="container-orazal">
                    <Reveal className="text-center mb-14">
                        <SectionLabel>{t('services.label')}</SectionLabel>
                        <h2
                            className="text-4xl md:text-5xl font-light mb-4"
                            style={{ fontFamily: 'Rye, cursive' }}
                        >
                            {t('services.title')}
                        </h2>
                        <p className="text-[1.05rem] text-[#c8bfb0]">{t('services.subtitle')}</p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {services.map((s, i) => (
                            <Reveal key={s.key} delay={i * 0.12}>
                                <div
                                    className="p-8 group card-glow transition-all duration-400 hover:border-[rgba(184,196,212,0.2)]"
                                    style={{ border: '1px solid #1a1a1a', background: '#0c0c0c' }}
                                >
                                    <div className="text-2xl text-[#b8c4d4] opacity-60 mb-5">{s.icon}</div>
                                    <h3
                                        className="text-xl font-light text-[#f0ebe2] mb-3"
                                        style={{ fontFamily: 'Rye, cursive' }}
                                    >
                                        {t(`services.categories.${s.key}.title`)}
                                    </h3>
                                    <p className="text-[1rem] text-[#c8bfb0] leading-loose mb-5">
                                        {t(`services.categories.${s.key}.desc`)}
                                    </p>
                                    <Link
                                        to="/servicios"
                                        className="inline-flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-[#b8c4d4] opacity-60 group-hover:opacity-100 transition-opacity"
                                    >
                                        {t('services.cta_info')} <ArrowRight size={11} />
                                    </Link>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="text-center">
                        <Link to="/servicios" className="btn-primary">
                            Explora nuestros servicios <ArrowRight size={14} />
                        </Link>
                    </Reveal>
                </div>
            </section >

            {/* -------------- CONTACTO RÁPIDO -------------- */}
            < section className="section-pad border-t border-[#141414]" >
                <div className="container-orazal">
                    <Reveal className="text-center mb-12">
                        <SectionLabel>{t('contact.label')}</SectionLabel>
                        <h2
                            className="text-4xl md:text-5xl font-light mb-4"
                            style={{ fontFamily: 'Rye, cursive' }}
                        >
                            {t('contact.title')}
                        </h2>
                        <p className="text-[1.05rem] text-[#c8bfb0] max-w-md mx-auto">
                            {t('contact.subtitle')}
                        </p>
                    </Reveal>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a href="https://wa.me/529510000000" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-3 px-7 py-4 rounded-none transition-all duration-300 text-[0.75rem] tracking-[0.15em] uppercase"
                            style={{ background: '#25D366', color: '#fff' }}
                        >
                            <MessageCircle size={16} /> {t('contact.whatsapp')}
                        </a>
                        <a href="mailto:ventas@casaorazal.com" className="btn-secondary">
                            <Mail size={14} /> {t('contact.email_sales')}
                        </a>
                    </div>

                    <Reveal className="flex items-center justify-center gap-8 mt-8">
                        {[
                            { icon: Instagram, href: '#', label: 'Instagram' },
                            { icon: Facebook, href: '#', label: 'Facebook' },
                            { icon: Linkedin, href: '#', label: 'LinkedIn' },
                        ].map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 flex items-center justify-center border border-[#232323] text-[#c8bfb0] hover:text-[#b8c4d4] hover:border-[#b8c4d4] transition-all duration-300"
                                >
                                    <IconComponent size={16} />
                                </a>
                            );
                        })}
                    </Reveal>
                </div>
            </section >
        </div >
    );
}

