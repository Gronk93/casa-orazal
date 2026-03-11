import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';

const PRODUCT = {
    key: 'papalometl',
    num: '03',
    agave: 'Agave potatorum (Papalometl)',
    region: 'San Pedro Teozacoalco, Mixteca Alta, Oaxaca',
    process: 'Horneado de 5 a 7 días en horno cónico de piedra subterráneo · Tahona tirada por mula · Fermentación en madera de encino · Doble destilación en olla de barro',
    nose: ['Herbal profundo', 'Tierra húmeda mojada', 'Resinas silvestres'],
    palate: ['Terrosidad capturada', 'Complejidad herbal', 'Dulzor natural indómito', 'Esencia del monte oaxaqueño'],
    pairing: ['Degustación solitaria y contemplativa'],
    abv: '50° Alc. Vol.',
    production: 'Ancestral — olla de barro',
    harvest: '100% Silvestre (7-8 años de maduración)',
    quote: 'El espíritu silvestre. Representa la terrosidad capturada. Es una pieza de colección por su escasez, capturando la esencia indómita del monte oaxaqueño.',
};

// Shimmer animation keyframes via a style tag injection
const SILVER_SHIMMER_STYLE = `
@keyframes silverShimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
@keyframes silverPulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.3; }
}
@keyframes floatUp {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
`;

// Marco de plata decorativo
function SilverFrame() {
    return (
        <svg viewBox="0 0 600 400" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.08 }} preserveAspectRatio="none" aria-hidden="true">
            <rect x="20" y="20" width="560" height="360" stroke="#d0d8e8" strokeWidth="0.5" fill="none" />
            <rect x="30" y="30" width="540" height="340" stroke="#d0d8e8" strokeWidth="0.3" fill="none" strokeDasharray="3 5" />
            <rect x="10" y="10" width="580" height="380" stroke="#d0d8e8" strokeWidth="0.8" fill="none" />
            {/* Esquinas decorativas */}
            {[[20, 20], [580, 20], [20, 380], [580, 380]].map(([cx, cy], i) => (
                <g key={i}>
                    <circle cx={cx} cy={cy} r="6" stroke="#d0d8e8" strokeWidth="0.8" fill="none" />
                    <circle cx={cx} cy={cy} r="2" fill="#d0d8e8" opacity="0.5" />
                </g>
            ))}
        </svg>
    );
}

// Estrellas de agave (datos decorativos)
function AgaveStar({ cx, cy, size = 30, opacity = 0.12 }) {
    const points = Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const r = i % 2 === 0 ? size : size * 0.45;
        return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(' ');
    return <polygon points={points} fill="none" stroke="#c0cce0" strokeWidth="0.6" opacity={opacity} />;
}

function DataRow({ label, value }) {
    return (
        <div className="flex gap-4 items-baseline py-3" style={{ borderBottom: '1px solid rgba(180,190,210,0.1)' }}>
            <span style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(180,190,210,0.45)', minWidth: '8rem', flexShrink: 0 }}>
                {label}
            </span>
            <span style={{ fontFamily: 'Kalam, cursive', fontWeight: 300, fontSize: '1.05rem', color: '#a8b8cc', lineHeight: 1.6 }}>
                {value}
            </span>
        </div>
    );
}

export default function ProductPapalometl() {
    const heroRef = useRef(null);

    useEffect(() => {
        // Inject shimmer styles
        const style = document.createElement('style');
        style.textContent = SILVER_SHIMMER_STYLE;
        document.head.appendChild(style);

        const onScroll = () => {
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div style={{ background: '#040406', color: '#c8d0e0', minHeight: '100vh' }}>

            {/* ═══ HERO ═══ */}
            <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

                {/* Fondo multicapa oscurecido */}
                <div ref={heroRef} style={{
                    position: 'absolute', inset: '-20%',
                    background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(20,30,45,0.8) 0%, rgba(5,8,12,0.95) 70%), linear-gradient(160deg, #020305 0%, #05060a 40%, #010203 100%)',
                }} />

                {/* Ruido de alta frecuencia */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
                }} />

                {/* Micro-puntos de plata */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle, rgba(200,210,230,0.15) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    animation: 'silverPulse 4s ease-in-out infinite',
                }} />

                {/* Estrellas decorativas SVG */}
                <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} aria-hidden="true">
                    <AgaveStar cx="10%" cy="20%" size={50} opacity={0.1} />
                    <AgaveStar cx="88%" cy="15%" size={35} opacity={0.08} />
                    <AgaveStar cx="5%" cy="75%" size={25} opacity={0.07} />
                    <AgaveStar cx="92%" cy="80%" size={45} opacity={0.09} />
                    <AgaveStar cx="50%" cy="5%" size={20} opacity={0.06} />
                </svg>

                {/* Contenido principal del Hero (papalometl maguey) */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/papalometl maguey.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.25, /* Translucidez para mantener la legibilidad y el tono oscuro */
                        mixBlendMode: 'luminosity', /* Estiliza el maguey con los tonos plateados oscuros */
                        filter: 'blur(3px)' /* Efecto difuminado como solicitó el usuario */
                    }}
                />

                {/* Contenido */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem', maxWidth: '900px' }}>
                    <p style={{ fontFamily: 'Kalam, cursive', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'rgba(160,175,200,0.6)', marginBottom: '0.5rem', animation: 'fadeIn 1s ease forwards' }}>
                        Casa Orazal
                    </p>
                    {/* Línea plateada delgada */}
                    <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,215,235,0.3), transparent)', marginBottom: '1.5rem' }} />
                    <h1 style={{
                        fontFamily: 'Rye, cursive',
                        fontSize: 'clamp(2.5rem, 10vw, 9rem)',
                        fontWeight: 200,
                        fontStyle: 'italic',
                        lineHeight: 0.9,
                        color: 'transparent',
                        backgroundImage: 'linear-gradient(135deg, #a8b8d0 0%, #d0d8ee 25%, #e8eef8 50%, #b8c8e0 75%, #90a0c0 100%)',
                        backgroundSize: '200% auto',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        animation: 'silverShimmer 6s linear infinite, fadeUp 1.2s ease forwards',
                        letterSpacing: '-0.02em',
                    }}>
                        Papalometl
                    </h1>
                    {/* Línea plateada delgada */}
                    <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,215,235,0.3), transparent)', marginTop: '1.5rem', marginBottom: '1.5rem' }} />
                    <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: '1.15rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(160,175,200,0.6)', animation: 'fadeIn 1.4s ease forwards' }}>
                        Agave potatorum · 100% Silvestre
                    </p>
                    <p style={{ fontFamily: 'var(--font-artisan)', fontSize: '1.3rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(160,175,200,0.5)', marginTop: '0.75rem', animation: 'fadeIn 1.6s ease forwards' }}>
                        Pieza de colección por su escasez
                    </p>
                </div>

                {/* Scroll indicator */}
                <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', animation: 'fadeIn 2s ease forwards' }}>
                    <span style={{ fontFamily: 'Kalam, cursive', fontSize: '0.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(160,175,200,0.35)' }}>Descubre</span>
                    <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, rgba(160,175,200,0.4), transparent)' }} />
                </div>
            </section>

            {/* ═══ RAREZA & VIDEO (30-70) ═══ */}
            <section style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #040406 0%, #06070f 100%)' }}>
                <div className="container-orazal" style={{ maxWidth: '1400px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">

                        {/* Texto 30% (Izquierda) */}
                        <div className="lg:col-span-3 flex flex-col justify-center text-center lg:text-left px-4">
                            <p style={{ fontFamily: 'var(--font-artisan)', fontSize: '1rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(160,175,200,0.6)', marginBottom: '1.5rem' }}>
                                100% Silvestre · El Espíritu del Monte
                            </p>
                            <div style={{ position: 'relative', padding: '2rem 1rem', borderLeft: '1px solid rgba(160,175,200,0.1)' }}>
                                <p style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'normal', fontSize: 'clamp(1.5rem, 3vw, 2.8rem)', color: 'rgba(180,195,220,0.95)', lineHeight: 1.2, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                                    "{PRODUCT.quote}"
                                </p>
                            </div>
                        </div>

                        {/* Video 70% (Derecha) */}
                        <div className="lg:col-span-7 relative w-full overflow-hidden rounded-md" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.8)', border: '1px solid rgba(160,175,200,0.05)' }}>
                            <video
                                src="/videos/papalometl.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══ CATA ═══ */}
            <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(180,190,210,0.08)' }}>
                <div className="container-orazal">
                    <p style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(160,175,200,0.45)', marginBottom: '4rem' }}>
                        Notas de cata
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
                        {[
                            { label: 'Nariz', items: PRODUCT.nose },
                            { label: 'Paladar', items: PRODUCT.palate },
                            { label: 'Maridaje', items: PRODUCT.pairing },
                        ].map(({ label, items }) => (
                            <div key={label}>
                                <p style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#9aa8c0', marginBottom: '1.5rem' }}>{label}</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {items.map(item => (
                                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                            <span style={{ color: '#9aa8c0', marginTop: '2px', fontSize: '0.75rem', flexShrink: 0 }}>—</span>
                                            <span style={{ fontFamily: 'Kalam, cursive', fontWeight: 300, fontSize: '1.05rem', color: '#a8b8cc', lineHeight: 1.7 }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ PROCESO & FICHA TÉCNICA (30-30-30) ═══ */}
            <section style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #06070f 0%, #040406 100%)' }}>
                <div className="container-orazal" style={{ maxWidth: '1200px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

                        {/* 1. Proceso Ancestral (Izquierda) */}
                        <div style={{ borderLeft: '1px solid rgba(160,175,200,0.25)', paddingLeft: '2rem' }}>
                            <p style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9aa8c0', marginBottom: '1.5rem' }}>
                                Proceso ancestral
                            </p>
                            <p style={{ fontFamily: 'Kalam, cursive', fontStyle: 'italic', fontSize: '1.05rem', color: '#a8b8cc', lineHeight: 2 }}>
                                {PRODUCT.process}
                            </p>
                        </div>

                        {/* 2. Imagen Papalometl (Centro) */}
                        <div className="relative flex justify-center items-center px-4">
                            <img
                                src="/images/Papalotmetl 5.png"
                                alt="Casa Orazal Papalometl Botella"
                                className="w-full max-w-[320px] lg:max-w-[400px] h-auto rounded-lg object-cover transition-transform hover:scale-105 duration-700"
                                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(160,175,200,0.1)' }}
                            />
                        </div>

                        {/* 3. Ficha Técnica (Derecha) */}
                        <div>
                            <p style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(160,175,200,0.45)', marginBottom: '2.5rem' }}>
                                Ficha técnica
                            </p>
                            <DataRow label="Grado alcohólico" value={PRODUCT.abv} />
                            <DataRow label="Región" value={PRODUCT.region} />
                            <DataRow label="Cosecha" value={PRODUCT.harvest} />
                            <DataRow label="Producción" value={PRODUCT.production} />
                            <DataRow label="Agave" value={PRODUCT.agave} />
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section style={{ padding: '7rem 0', textAlign: 'center', borderTop: '1px solid rgba(180,190,210,0.08)' }}>
                <div className="container-orazal">
                    <p style={{ fontFamily: 'Kalam, cursive', fontSize: '2rem', color: 'rgba(160,175,200,0.5)', marginBottom: '1rem' }}>
                        Una rareza, tuya
                    </p>
                    <h2 style={{ fontFamily: 'Rye, cursive', fontStyle: 'italic', fontWeight: 200, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#d0d8e8', marginBottom: '2.5rem', lineHeight: 1.2 }}>
                        Solicita información
                    </h2>
                    <Link to="/contacto" className="btn-primary">
                        Contactar <ArrowRight size={13} />
                    </Link>
                    <div style={{ marginTop: '3rem' }}>
                        <Link to="/productos"
                            style={{ fontFamily: 'Kalam, cursive', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(160,175,200,0.3)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.3s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'rgba(180,195,220,0.65)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(160,175,200,0.3)'}
                        >
                            <ChevronLeft size={12} /> Ver todos los mezcales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
