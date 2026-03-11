import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

export default function Store() {
    const { t } = useTranslation();

    const products = [
        {
            id: 'arroqueno',
            name: 'Arroqueño',
            badge: 'Edición Limitada',
            desc: 'Carácter vegetal, profundidad y una personalidad marcada.',
            price: '$1,800.00 MXN',
            volume: '750ml',
            image: '/images/HORNO.png',
            color: 'rgba(28,75,79, 0.4)'
        },
        {
            id: 'papalometl',
            name: 'Papalometl',
            badge: 'Premium Silvestre',
            desc: 'Intensidad, elegancia y sofisticación en su forma pura.',
            price: '$2,500.00 MXN',
            volume: '750ml',
            image: '/images/papalometl maguey.png',
            color: 'rgba(201,168,76, 0.4)'
        }
    ];

    return (
        <div className="bg-[#040a04] text-[#c8e0c8] min-h-screen pt-28 pb-20">
            <div className="container-orazal">

                {/* Header Tienda */}
                <Reveal className="text-center mb-16">
                    <div
                        className="text-[0.65rem] md:text-[0.75rem] tracking-[0.4em] uppercase mb-4"
                        style={{ fontFamily: 'var(--font-ui)', color: '#d0d8e8', opacity: 0.8 }}
                    >
                        {t('store.label')}
                    </div>
                    <h1
                        className="text-4xl md:text-5xl lg:text-7xl font-light mb-6"
                        style={{ fontFamily: 'Amatic SC, cursive', fontStyle: 'italic', color: '#8acc8a' }}
                    >
                        {t('store.title')}
                    </h1>
                    <p
                        className="text-[1rem] md:text-[1.3rem] max-w-2xl mx-auto leading-relaxed px-4"
                        style={{ fontFamily: '"Caveat Brush", cursive', color: '#7aaa7a' }}
                    >
                        {t('store.subtitle')}
                    </p>
                </Reveal>

                {/* Grid Productos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto px-4">
                    {products.map((p, idx) => (
                        <Reveal key={p.id} delay={0.2 * (idx + 1)} className="group relative">
                            {/* Card Glow */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
                                style={{ background: `radial-gradient(circle at center, ${p.color}, transparent 70%)` }}
                            />

                            {/* Card Content */}
                            <div className="relative z-10 bg-[#071207] border border-[rgba(74,138,74,0.15)] rounded-2xl p-8 flex flex-col h-full overflow-hidden hover:border-[rgba(74,138,74,0.3)] transition-colors duration-500">

                                <div className="flex justify-between items-start mb-6">
                                    <span style={{ fontFamily: 'Caveat Brush, cursive', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b8c4d4' }}>
                                        {p.badge}
                                    </span>
                                    <span style={{ fontFamily: 'Caveat Brush, cursive', fontSize: '1rem', color: '#f0ebe2' }}>
                                        {p.volume}
                                    </span>
                                </div>

                                <div className="h-64 mb-8 flex justify-center items-center relative mix-blend-screen">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="h-full w-auto object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                                    />
                                </div>

                                <div className="flex-1 text-center">
                                    <h2 style={{ fontFamily: 'Amatic SC, cursive', fontSize: '2.5rem', color: '#f0ebe2', marginBottom: '1rem' }}>
                                        {p.name}
                                    </h2>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#8acc8a', lineHeight: 1.6, marginBottom: '2rem' }}>
                                        {p.desc}
                                    </p>
                                </div>

                                <div className="mt-auto border-t border-[rgba(74,138,74,0.15)] pt-6 flex flex-col items-center gap-4">
                                    <span style={{ fontFamily: 'var(--font-artisan)', fontSize: '1.8rem', color: '#f0ebe2' }}>
                                        {p.price}
                                    </span>

                                    <button
                                        className="w-full py-4 rounded-md flex items-center justify-center gap-2 overflow-hidden relative group/btn"
                                        style={{ background: 'linear-gradient(90deg, #1f421f 0%, #2d5e2d 100%)', border: '1px solid #4a8a4a' }}
                                    >
                                        <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                                        <ShoppingBag size={18} className="relative z-10 text-[#f0ebe2]" />
                                        <span style={{ fontFamily: 'Caveat Brush, cursive', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#f0ebe2' }} className="relative z-10">
                                            {t('store.buy_now')}
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.6} className="mt-20 text-center px-4">
                    <p style={{ fontFamily: 'Caveat Brush, cursive', fontSize: '0.9rem', color: '#8acc8a', opacity: 0.6 }}>
                        {t('store.shipping_note')}
                    </p>
                </Reveal>

            </div>
        </div>
    );
}
