import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Briefcase, Star, Users, Zap, Globe, Package } from 'lucide-react';

function Reveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return (
        <div ref={ref} className={className} style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(24px)',
            transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
        }}>{children}</div>
    );
}

const SERVICES = [
    { key: 'corporate_tastings', Icon: Briefcase },
    { key: 'private_tastings', Icon: Star },
    { key: 'private_events', Icon: Users },
    { key: 'brand_experiences', Icon: Zap },
    { key: 'activations', Icon: Globe },
    { key: 'distribution', Icon: Package },
];

export default function Services() {
    const { t } = useTranslation();

    return (
        <div className="text-[#f0ebe2] min-h-screen relative">
            {/* --- GLOBAL IMMERSIVE BACKGROUND --- */}
            <div
                className="fixed inset-0 pointer-events-none z-[0]"
                style={{
                    backgroundImage: "url('/images/cata.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Dynamic difuminado (Blur + Gradient) for readability */}
            <div className="fixed inset-0 pointer-events-none z-[0] bg-black/20 backdrop-blur-sm" />
            <div className="fixed inset-0 pointer-events-none z-[0] bg-gradient-to-b from-transparent via-[#060606]/40 to-[#080808] h-[120vh]" />

            {/* --- PREMIUM CONTENT --- */}
            <section className="relative z-10 w-full min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-16">
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
                    <Reveal>
                        <div
                            className="text-[0.65rem] md:text-[0.75rem] tracking-[0.4em] uppercase mb-4"
                            style={{ fontFamily: 'var(--font-ui)', color: '#d0d8e8', opacity: 0.8 }}
                        >
                            {t('services.label')}
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
                            {t('services.title')}
                        </h1>
                        <div className="w-16 md:w-24 h-[1px] bg-[#d0d8e8]/40 mx-auto my-6" />
                        <p
                            className="text-[#c8bfb0] text-[1.1rem] md:text-[1.3rem] max-w-lg mx-auto leading-relaxed"
                            style={{
                                fontFamily: '"Caveat Brush", cursive',
                                textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                            }}
                        >
                            {t('services.subtitle')}
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section-pad relative z-10">
                <div className="container-orazal">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                        {SERVICES.map((item, i) => {
                            const Icon = item.Icon;
                            return (
                                <Reveal key={item.key} delay={i * 0.1}>
                                    <div
                                        className="group flex flex-col h-full overflow-hidden rounded-xl transition-all duration-400 hover:border-[rgba(184,196,212,0.3)] hover:bg-[#0c0c0c]/80 backdrop-blur-md p-8"
                                        style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(12,12,12,0.6)' }}
                                    >
                                        <div className="flex items-start gap-4 mb-5">
                                            <Icon
                                                size={18}
                                                className="text-[#b8c4d4] opacity-40 group-hover:opacity-80 transition-opacity shrink-0 mt-1"
                                            />
                                            <h3
                                                className="text-xl font-light text-[#f0ebe2]"
                                                style={{ fontFamily: 'Amatic SC, cursive', fontStyle: 'italic' }}
                                            >
                                                {t(`services.categories.${item.key}.title`)}
                                            </h3>
                                        </div>
                                        <p className="text-[1rem] text-[#c8bfb0] leading-loose flex-1 mb-6 pl-9">
                                            {t(`services.categories.${item.key}.desc`)}
                                        </p>
                                        <div className="pl-9">
                                            <a
                                                href="https://wa.me/529510000000"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-primary"
                                            >
                                                {t('services.cta')} <ArrowRight size={11} />
                                            </a>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container-orazal text-center">
                    <Reveal>
                        <div
                            className="text-3xl text-[#b8c4d4] mb-4"
                            style={{ fontFamily: 'Caveat Brush, cursive', opacity: 0.65 }}
                        >
                            ¿Listo para conversar?
                        </div>
                        <h2
                            className="text-3xl md:text-5xl font-light mb-8 text-[#f0ebe2]"
                            style={{ fontFamily: 'Amatic SC, cursive', fontStyle: 'italic' }}
                        >
                            Diseñamos la experiencia<br />
                            <span className="text-[#b8c4d4]">a tu medida</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                            <a
                                href="https://wa.me/529510000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                {t('services.cta')} <ArrowRight size={14} />
                            </a>
                            <Link to="/contacto" className="btn-secondary">
                                {t('services.cta_info')}
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
