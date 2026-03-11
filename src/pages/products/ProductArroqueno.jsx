import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';

const PRODUCT = {
    key: 'arroqueno',
    num: '02',
    agave: 'Agave americana var. oaxacensis (Arroqueño)',
    region: 'San Pedro Teozacoalco, Mixteca Alta, Oaxaca (1,593 msnm)',
    process: 'Horneado de 5 a 7 días en arroqueno cónico de piedra subterráneo · Tahona tirada por mula · Fermentación en madera de encino · Doble destilación en olla de barro',
    nose: ['Maguey cocido', 'Aroma floral fino', 'Humo sutil y elegante', 'Terrosidad limpia'],
    palate: ['Seda en paladar', 'Yogur artesanal', 'Flores blancas', 'Cuerpo robusto con espíritu refinado'],
    pairing: ['Degustación pura en jícara', 'Cacao oscuro', 'Moles ligeros'],
    abv: '50° Alc. Vol.',
    production: 'Ancestral  olla de barro',
    harvest: 'Semi-cultivable (8-9 años de maduración)',
    quote: 'De una elegancia amigable y distinguida. Su paso por el paladar es sedoso, revelando notas sorprendentes.',
};

// Greca zapoteca horizontal
function GrecaZapoteca() {
    return (
        <svg viewBox="0 0 500 24" className="w-full" preserveAspectRatio="none" aria-hidden="true" style={{ opacity: 0.25 }}>
            <g fill="#4a8a4a">
                {Array.from({ length: 25 }).map((_, i) => {
                    const x = i * 20;
                    return (
                        <g key={i} transform={`translate(${x}, 0)`}>
                            <rect x="0" y="0" width="8" height="8" />
                            <rect x="8" y="8" width="8" height="8" />
                            <rect x="0" y="16" width="8" height="8" />
                            <rect x="12" y="4" width="4" height="4" />
                        </g>
                    );
                })}
            </g>
        </svg>
    );
}

// Ornamento circular oaxaqueño
function CircleOrnament({ size = 200, opacity = 0.06 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true" style={{ opacity }}>
            <circle cx="100" cy="100" r="95" stroke="#4a8a4a" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="80" stroke="#4a8a4a" strokeWidth="0.5" fill="none" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="60" stroke="#4a8a4a" strokeWidth="1" fill="none" />
            {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 100 + 60 * Math.cos(angle);
                const y1 = 100 + 60 * Math.sin(angle);
                const x2 = 100 + 95 * Math.cos(angle);
                const y2 = 100 + 95 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4a8a4a" strokeWidth="0.5" />;
            })}
            <circle cx="100" cy="100" r="8" stroke="#4a8a4a" strokeWidth="1.5" fill="rgba(74,138,74,0.15)" />
        </svg>
    );
}

function DataRow({ label, value }) {
    return (
        <div className="flex gap-4 items-baseline py-3" style={{ borderBottom: '1px solid rgba(74,138,74,0.12)' }}>
            <span style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(74,138,74,0.6)', minWidth: '8rem', flexShrink: 0 }}>
                {label}
            </span>
            <span style={{ fontFamily: 'Kalam, cursive', fontWeight: 300, fontSize: '1.05rem', color: '#7aaa7a', lineHeight: 1.6 }}>
                {value}
            </span>
        </div>
    );
}

export default function ProductArroqueno() {
    const heroRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (heroRef.current) {
                heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div style={{ background: '#040a04', color: '#c8e0c8', minHeight: '100vh' }}>

            {/* --- HERO --- */}
            <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

                {/* Fondo */}
                <div ref={heroRef} style={{
                    position: 'absolute', inset: '-20%',
                    background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(26,74,26,0.5) 0%, transparent 70%), radial-gradient(ellipse 100% 60% at 20% 100%, rgba(10,30,10,0.6) 0%, transparent 60%), linear-gradient(160deg, #040a04 0%, #091509 50%, #040c04 100%)',
                }} />

                {/* Textura tierra */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.6' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
                }} />

                {/* Grid decorativo oaxaqueño */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(74,138,74,0.04) 79px, rgba(74,138,74,0.04) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(74,138,74,0.04) 79px, rgba(74,138,74,0.04) 80px)',
                }} />

                {/* Ornamentos circulares decorativos */}
                <div style={{ position: 'absolute', top: '8%', right: '5%' }}>
                    <CircleOrnament size={260} opacity={0.12} />
                </div>
                <div style={{ position: 'absolute', bottom: '10%', left: '3%' }}>
                    <CircleOrnament size={180} opacity={0.08} />
                </div>

                {/* Número */}
                <div style={{
                    position: 'absolute', top: '10rem', left: '4%',
                    fontFamily: 'Rye, cursive',
                    fontSize: 'clamp(6rem, 18vw, 16rem)',
                    fontWeight: 200, color: 'rgba(74,138,74,0.05)',
                    lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                }}>
                    02
                </div>

                {/* Contenido */}
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 2rem' }}>
                    <p style={{ fontFamily: 'Kalam, cursive', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: 'rgba(100,170,100,0.65)', marginBottom: '1rem', animation: 'fadeIn 1s ease forwards' }}>
                        Casa Orazal
                    </p>
                    <GrecaZapoteca />
                    <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                        <h1 style={{
                            fontFamily: 'Rye, cursive',
                            fontSize: 'clamp(5rem, 18vw, 17rem)',
                            fontWeight: 200,
                            fontStyle: 'italic',
                            lineHeight: 0.88,
                            color: 'transparent',
                            backgroundImage: 'linear-gradient(160deg, #6abf6a 0%, #4a8a4a 40%, #2d5e2d 70%, #5da85d 100%)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            letterSpacing: '-0.02em',
                            animation: 'fadeUp 1.2s ease forwards',
                        }}>
                            arroqueño
                        </h1>
                    </div>
                    <GrecaZapoteca />
                    <p style={{ fontFamily: 'var(--font-ui)', fontWeight: 300, fontSize: '1.15rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(100,170,100,0.6)', marginTop: '2rem', animation: 'fadeIn 1.4s ease forwards' }}>
                        Agave americana · San Pedro Teozacoalco
                    </p>
                    <p style={{ fontFamily: 'var(--font-artisan)', fontSize: '1.3rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(100,170,100,0.5)', marginTop: '0.75rem', animation: 'fadeIn 1.6s ease forwards' }}>
                        Medalla de Plata · 88 Puntos CAVA 2023
                    </p>
                </div>

                {/* Scroll indicator */}
                <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', animation: 'fadeIn 2s ease forwards' }}>
                    <span style={{ fontFamily: 'Kalam, cursive', fontSize: '0.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(74,138,74,0.45)' }}>Descubre</span>
                    <div style={{ width: '1px', height: '3rem', background: 'linear-gradient(to bottom, rgba(74,138,74,0.5), transparent)' }} />
                </div>
            </section>

            {/* --- QUOTE & VIDEO (70 / 30 LOGIC) --- */}
            <section style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #040a04 0%, #071207 100%)' }}>
                <div className="container-orazal" style={{ maxWidth: '1200px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-center">
                        {/* Video 60% (6 de 10 columnas en pantallas grandes) */}
                        <div className="lg:col-span-6 relative w-full overflow-hidden rounded-md" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(74,138,74,0.1)' }}>
                            <video
                                src="/videos/clip_arroqueño.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Texto 40% (4 de 10 columnas en pantallas grandes) */}
                        <div className="lg:col-span-4 text-center flex flex-col justify-center px-4 lg:pl-8">
                            <div style={{ marginBottom: '2rem' }} className="flex justify-center">
                                <span style={{ fontFamily: 'Rye, cursive', fontSize: '2rem', color: 'rgba(74,138,74,0.3)' }}>❝</span>
                            </div>
                            <p style={{ fontFamily: 'Rye, cursive', fontStyle: 'italic', fontWeight: 'bold', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'rgba(100,170,100,0.85)', lineHeight: 1.4, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                                {PRODUCT.quote}
                            </p>
                            <div style={{ marginTop: '2rem' }} className="flex justify-center">
                                <span style={{ fontFamily: 'Rye, cursive', fontSize: '2rem', color: 'rgba(74,138,74,0.3)' }}>❞</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EL arroqueno --- */}
            <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(74,138,74,0.12)', background: 'linear-gradient(135deg, #040a04 0%, #071407 50%, #040a04 100%)' }}>
                <div className="container-orazal">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        {/* Ornamento Medalla Lado Izquierdo */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/images/Medalla.png"
                                alt="Medalla Casa Orazal Arroqueño"
                                className="w-full max-w-[320px] h-auto transition-transform hover:scale-105 duration-700"
                                style={{ filter: 'drop-shadow(0px 15px 25px rgba(0,0,0,0.6))' }}
                            />
                        </div>
                        {/* Texto del proceso */}
                        <div>
                            <p style={{ fontFamily: 'var(--font-artisan)', fontSize: '1.2rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(74,138,74,0.6)', marginBottom: '1rem' }}>
                                Reconocimiento de élite
                            </p>
                            <h2 style={{ fontFamily: 'var(--font-editorial)', fontWeight: 700, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#8acc8a', marginBottom: '1.5rem', lineHeight: 1 }}>
                                Medalla de Plata <br /><span style={{ fontSize: '0.6em' }}>CAVA 2023 (88 Pts)</span>
                            </h2>
                            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '1.25rem', color: '#8acc8a', lineHeight: 1.6 }}>
                                En el TOP 99 Mezcales de México 2023 de Revista CAVA, esta variedad Arroqueño obtuvo 88 puntos. Lograr este puntaje excelso en una <strong>destilación viva y caprichosa en ollas de barro</strong> es una hazaña técnica superior que demuestra nuestra integridad estructural y pureza química inigualable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CATA --- */}
            <section style={{ padding: '5rem 0', borderTop: '1px solid rgba(74,138,74,0.12)' }}>
                <div className="container-orazal">
                    <p style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(74,138,74,0.6)', marginBottom: '4rem' }}>
                        Notas de cata
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem' }}>
                        {[
                            { label: 'Nariz', items: PRODUCT.nose },
                            { label: 'Paladar', items: PRODUCT.palate },
                            { label: 'Maridaje', items: PRODUCT.pairing },
                        ].map(({ label, items }) => (
                            <div key={label}>
                                <p style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#4a8a4a', marginBottom: '1.5rem' }}>{label}</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {items.map(item => (
                                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                            <span style={{ color: '#4a8a4a', marginTop: '2px', fontSize: '0.75rem', flexShrink: 0 }}></span>
                                            <span style={{ fontFamily: 'Kalam, cursive', fontWeight: 300, fontSize: '1.05rem', color: '#8acc8a', lineHeight: 1.7 }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PROCESO & FICHA TÉCNICA + IMAGEN --- */}
            <section style={{ padding: '7rem 0', background: 'linear-gradient(180deg, #071207 0%, #040a04 100%)' }}>
                <div className="container-orazal" style={{ maxWidth: '1200px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

                        {/* Lado Izquierdo: Textos (Proceso y Ficha) - 5 Columnas */}
                        <div className="lg:col-span-5 flex flex-col justify-center">

                            {/* Proceso Ancestral */}
                            <div style={{ borderLeft: '2px solid rgba(74,138,74,0.4)', paddingLeft: '2rem', marginBottom: '5rem' }}>
                                <p style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#4a8a4a', marginBottom: '1.5rem' }}>
                                    Proceso ancestral
                                </p>
                                <p style={{ fontFamily: 'Kalam, cursive', fontStyle: 'italic', fontSize: '1.05rem', color: '#8acc8a', lineHeight: 2 }}>
                                    {PRODUCT.process}
                                </p>
                            </div>

                            {/* Ficha Técnica */}
                            <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(74,138,74,0.12)' }}>
                                <p style={{ fontFamily: 'Rye, cursive', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(74,138,74,0.6)', marginBottom: '2.5rem' }}>
                                    Ficha técnica
                                </p>
                                <DataRow label="Grado alcohólico" value={PRODUCT.abv} />
                                <DataRow label="Región" value={PRODUCT.region} />
                                <DataRow label="Cosecha" value={PRODUCT.harvest} />
                                <DataRow label="Producción" value={PRODUCT.production} />
                                <DataRow label="Agave" value={PRODUCT.agave} />
                            </div>

                        </div>

                        {/* Lado Derecho: Imagen Arroqueno3 - 7 Columnas */}
                        <div className="lg:col-span-7 relative flex justify-center lg:justify-end items-center h-full">
                            <img
                                src="/images/Arroqueno3.png"
                                alt="Casa Orazal Arroqueno Elaboración"
                                className="w-full h-auto rounded-lg object-cover"
                                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid rgba(74,138,74,0.1)' }}
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section style={{ padding: '7rem 0', textAlign: 'center', borderTop: '1px solid rgba(74,138,74,0.12)' }}>
                <div className="container-orazal">
                    <p style={{ fontFamily: 'Kalam, cursive', fontSize: '2rem', color: 'rgba(100,170,100,0.6)', marginBottom: '1rem' }}>
                        ¿Te interesa?
                    </p>
                    <h2 style={{ fontFamily: 'Rye, cursive', fontStyle: 'italic', fontWeight: 200, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#c8e0c8', marginBottom: '2.5rem', lineHeight: 1.2 }}>
                        Solicita información
                    </h2>
                    <Link to="/contacto" className="btn-primary">
                        Contactar <ArrowRight size={13} />
                    </Link>
                    <div style={{ marginTop: '3rem' }}>
                        <Link to="/productos"
                            style={{ fontFamily: 'Kalam, cursive', fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(74,138,74,0.4)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', transition: 'color 0.3s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'rgba(100,170,100,0.7)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(74,138,74,0.4)'}
                        >
                            <ChevronLeft size={12} /> Ver todos los mezcales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}





