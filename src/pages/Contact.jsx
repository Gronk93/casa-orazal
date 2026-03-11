import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

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

export default function Contact() {
    const { t } = useTranslation();

    const contacts = [
        { label: 'Sede Oaxaca (Centro Cultural)', value: 'Zaragoza 413, Col. Centro, Oaxaca de Juárez, Oax.', href: null, Icon: MapPin },
        { label: 'Sede Tehuacán (Punto de Distribución)', value: '15 A Norte 610, Frac. Frambollanes, Tehuacán, Puebla.', href: null, Icon: MapPin },
        { label: 'Correo Electrónico', value: 'casaorazal@gmail.com', href: 'mailto:casaorazal@gmail.com', Icon: Mail },
        { label: 'Teléfono Directo 1', value: '+52 1 951 244 1984', href: 'tel:+5219512441984', Icon: MessageCircle },
        { label: 'Teléfono Directo 2', value: '+52 1 238 385 2656', href: 'tel:+5212383852656', Icon: MessageCircle },
    ];

    const socials = [
        { Icon: Instagram, href: '#', label: '@casaorazal' },
        { Icon: Facebook, href: '#', label: 'Casa Orazal' },
        { Icon: Linkedin, href: '#', label: 'Casa Orazal MX' },
    ];

    return (
        <div className="text-[#f0ebe2] min-h-screen relative">
            {/* --- GLOBAL IMMERSIVE BACKGROUND --- */}
            <div
                className="fixed inset-0 pointer-events-none z-[0]"
                style={{
                    backgroundImage: "url('/images/portada.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Dynamic difuminado (Blur + Gradient) for readability */}
            <div className="fixed inset-0 pointer-events-none z-[0] bg-black/40 backdrop-blur-md" />
            <div className="fixed inset-0 pointer-events-none z-[0] bg-gradient-to-b from-transparent via-[#060606]/70 to-[#080808] h-[120vh]" />

            {/* --- PREMIUM CONTENT --- */}
            <section className="relative z-10 w-full min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-16">
                {/* Content */}
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                    <Reveal>
                        <div
                            className="text-[0.65rem] md:text-[0.75rem] tracking-[0.4em] uppercase mb-4"
                            style={{ fontFamily: 'var(--font-ui)', color: '#d0d8e8', opacity: 0.8 }}
                        >
                            {t('contact.label')}
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
                            {t('contact.title')}
                        </h1>
                        <div className="w-16 md:w-24 h-[1px] bg-[#d0d8e8]/40 mx-auto my-6" />
                        <p
                            className="text-[#c8bfb0] text-[1.1rem] md:text-[1.3rem] max-w-lg mx-auto leading-relaxed"
                            style={{
                                fontFamily: '"Caveat Brush", cursive',
                                textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                            }}
                        >
                            {t('contact.subtitle')}
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section-pad relative z-10">
                <div className="container-orazal max-w-3xl mx-auto">

                    {/* WhatsApp — featured row */}
                    <Reveal className="mb-16">
                        <a
                            href="https://wa.me/5219512441984"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-6 py-6 transition-opacity duration-300 hover:opacity-100 opacity-80"
                            style={{ borderBottom: '1px solid rgba(37,211,102,0.15)' }}
                        >
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{ background: '#25D366', boxShadow: '0 0 25px rgba(37,211,102,0.2)' }}
                            >
                                <MessageCircle size={20} className="text-white" fill="white" />
                            </div>
                            <div className="flex-1">
                                <p
                                    className="text-[0.55rem] tracking-[0.28em] uppercase mb-1"
                                    style={{ fontFamily: 'Kalam, cursive', fontWeight: 300, color: '#3a3a3a' }}
                                >
                                    WhatsApp directo
                                </p>
                                <p
                                    className="text-xl font-light text-[#f0ebe2]"
                                    style={{ fontFamily: 'Rye, cursive', fontStyle: 'italic' }}
                                >
                                    {t('contact.whatsapp')}
                                </p>
                            </div>
                            <span
                                className="text-[#25D366] opacity-40 group-hover:opacity-100 transition-all duration-300 text-[0.6rem] tracking-[0.2em] uppercase"
                                style={{ fontFamily: 'Kalam, cursive', fontWeight: 300 }}
                            >
                                Abrir →
                            </span>
                        </a>
                    </Reveal>

                    {/* Contact rows — borderless separators only */}
                    <div className="space-y-0 mb-16">
                        {contacts.map((c, i) => (
                            <Reveal key={c.label} delay={i * 0.08}>
                                <div
                                    className="flex items-center gap-5 py-6 group px-4 rounded-xl transition-all duration-300 hover:bg-[#0c0c0c]/80 backdrop-blur-md hover:border-[rgba(184,196,212,0.2)]"
                                    style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                                >
                                    <c.Icon size={14} className="text-[#b8c4d4] opacity-35 shrink-0" />
                                    <div className="flex-1">
                                        <p
                                            className="text-[0.55rem] tracking-[0.22em] uppercase mb-1"
                                            style={{ fontFamily: 'Kalam, cursive', fontWeight: 300, color: '#3a3a3a' }}
                                        >
                                            {c.label}
                                        </p>
                                        {c.href ? (
                                            <a
                                                href={c.href}
                                                className="text-[1.05rem] text-[#c8bfb0] hover:text-[#f0ebe2] transition-colors break-all"
                                                style={{ fontFamily: 'Kalam, cursive', fontWeight: 300 }}
                                            >
                                                {c.value}
                                            </a>
                                        ) : (
                                            <p
                                                className="text-[1.05rem] text-[#c8bfb0]"
                                                style={{ fontFamily: 'Kalam, cursive', fontWeight: 300 }}
                                            >
                                                {c.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Socials — floating icons, no boxes */}
                    <Reveal className="text-center">
                        <p
                            className="text-[0.55rem] tracking-[0.3em] uppercase text-[#b8c4d4] mb-8 opacity-70"
                            style={{ fontFamily: 'Kalam, cursive', fontWeight: 300 }}
                        >
                            {t('contact.follow')}
                        </p>
                        <div className="flex items-center justify-center gap-12">
                            {socials.map((item) => {
                                const Icon = item.Icon;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col items-center gap-2 transition-opacity duration-300 opacity-35 hover:opacity-100"
                                    >
                                        <Icon size={18} className="text-[#b8c4d4]" />
                                        <span
                                            className="text-[0.6rem] tracking-[0.1em] text-[#c8bfb0]"
                                            style={{ fontFamily: 'Kalam, cursive', fontWeight: 300 }}
                                        >
                                            {item.label}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
