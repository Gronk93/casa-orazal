import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';

const MEZCALES = [
    { name: 'Arroqueño', sub: 'Agave americana · 100% Silvestre', to: '/productos/arroqueno', color: 'rgba(28,75,79)', dot: '#1c4b4f' },
    { name: 'Papalometl', sub: 'Agave potatorum · 100% Silvestre', to: '/productos/papalometl', color: 'rgba(201,168,76)', dot: '#e0c070' },
];

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownTimer = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setOpen(false);
            setProductsOpen(false);
            setMobileProductsOpen(false);
        }, 0);
    }, [location.pathname]);

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
    };

    const isProductActive = () => location.pathname.startsWith('/productos');
    const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

    // Hover handlers con delay para evitar parpadeo
    const handleDropdownEnter = () => {
        clearTimeout(dropdownTimer.current);
        setProductsOpen(true);
    };
    const handleDropdownLeave = () => {
        dropdownTimer.current = setTimeout(() => setProductsOpen(false), 120);
    };

    const simpleLinks = [
        { to: '/', label: t('nav.home') },
        { to: '/servicios', label: t('nav.services') },
        { to: '/blog', label: t('nav.blog') },
        { to: '/contacto', label: t('nav.contact') },
        { to: '/tienda', label: t('nav.store') },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || open
                    ? 'bg-[#141414]/98 backdrop-blur-md border-b border-[#3a3a3a]'
                    : 'bg-[#141414]/85 backdrop-blur-md border-b border-[#232323]'
                    }`}
            >
                <div className="container-orazal flex items-center justify-between h-16 lg:h-20 px-4">
                    {/* Logo — Isotipo */}
                    <Link to="/" className="flex flex-col items-center leading-none group gap-1 shrink-0">
                        <img
                            src="/images/image.png"
                            alt="Casa Orazal"
                            className="h-10 lg:h-[55px] w-auto object-contain transition-all duration-300"
                            style={{
                                filter: 'brightness(1)',
                                mixBlendMode: 'screen', // Añadido para quitar fondo negro de la imagen
                                opacity: 0.65, // Traslúcido tenue orgánico
                                transition: 'filter 0.3s ease, transform 0.3s ease, opacity 0.3s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.filter = 'brightness(1.2) drop-shadow(0 0 8px rgba(184,196,212,0.5))';
                                e.currentTarget.style.transform = 'scale(1.05)';
                                e.currentTarget.style.opacity = '1';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.filter = 'brightness(1)';
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.opacity = '0.65';
                            }}
                        />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden lg:flex items-center gap-6">

                        {/* Home */}
                        <Link
                            to="/"
                            style={{ fontFamily: 'Caveat Brush, cursive', color: isActive('/') && location.pathname === '/' ? '#b8c4d4' : '#c8bfb0' }}
                            className="text-[1.2rem] tracking-[0.1em] uppercase transition-colors duration-300"
                            onMouseEnter={e => { if (location.pathname !== '/') e.currentTarget.style.color = '#f0ebe2'; }}
                            onMouseLeave={e => { if (location.pathname !== '/') e.currentTarget.style.color = '#c8bfb0'; }}
                        >
                            {t('nav.home')}
                        </Link>

                        {/* -- PRODUCTOS DROPDOWN -- */}
                        <div
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                        >
                            {/* Trigger */}
                            <button
                                style={{
                                    fontFamily: 'Caveat Brush, cursive',
                                    color: isProductActive() ? '#b8c4d4' : productsOpen ? '#f0ebe2' : '#c8bfb0',
                                }}
                                className="text-[1.2rem] tracking-[0.1em] uppercase transition-colors duration-300 flex items-center gap-1.5 bg-transparent border-none cursor-pointer"
                            >
                                {t('nav.products')}
                                <ChevronDown
                                    size={10}
                                    style={{
                                        transition: 'transform 0.3s ease',
                                        transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                    }}
                                />
                            </button>

                            {/* Dropdown panel */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 1rem)',
                                    left: '50%',
                                    minWidth: '280px',
                                    background: 'rgba(28,28,28,0.98)',
                                    backdropFilter: 'blur(20px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    padding: '1rem 0',
                                    opacity: productsOpen ? 1 : 0,
                                    pointerEvents: productsOpen ? 'auto' : 'none',
                                    transform: productsOpen
                                        ? 'translateX(-50%) translateY(0)'
                                        : 'translateX(-50%) translateY(-6px)',
                                    transition: 'opacity 0.25s ease, transform 0.25s ease',
                                }}
                            >
                                {/* Puntero superior */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-6px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '12px',
                                    height: '12px',
                                    background: 'rgba(28,28,28,0.98)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderBottom: 'none',
                                    borderRight: 'none',
                                    rotate: '45deg',
                                }} />

                                {/* Ver colección completa */}
                                <Link
                                    to="/productos"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem',
                                        padding: '0.6rem 1.4rem',
                                        textDecoration: 'none',
                                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                                        marginBottom: '0.5rem',
                                    }}
                                    className="group"
                                >
                                    <span style={{ fontFamily: 'Caveat Brush, cursive', fontWeight: 300, fontSize: '0.52rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(240,235,226,0.3)', transition: 'color 0.25s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'rgba(184,196,212,0.7)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,235,226,0.3)'}
                                    >
                                        Ver colección completa
                                    </span>
                                </Link>

                                {/* Mezcales */}
                                {MEZCALES.map((m) => (
                                    <Link
                                        key={m.to}
                                        to={m.to}
                                        style={{ display: 'block', padding: '0.65rem 1.4rem', textDecoration: 'none' }}
                                        onMouseEnter={e => e.currentTarget.style.background = `${m.color}12`}
                                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            {/* Dot color */}
                                            <span style={{
                                                width: '5px', height: '5px', borderRadius: '50%',
                                                background: m.dot, flexShrink: 0,
                                                boxShadow: `0 0 6px ${m.dot}60`,
                                            }} />
                                            <div>
                                                <p style={{ fontFamily: 'Amatic SC, cursive', fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: '#f0ebe2', letterSpacing: '0.02em', lineHeight: 1.2, margin: 0 }}>
                                                    {m.name}
                                                </p>
                                                <p style={{ fontFamily: 'Caveat Brush, cursive', fontWeight: 300, fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,235,226,0.3)', margin: '0.2rem 0 0', lineHeight: 1 }}>
                                                    {m.sub}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Resto de links */}
                        {simpleLinks.slice(1).map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                style={{ fontFamily: 'Caveat Brush, cursive', color: isActive(l.to) ? '#b8c4d4' : '#c8bfb0' }}
                                className="text-[1.2rem] tracking-[0.1em] uppercase transition-colors duration-300"
                                onMouseEnter={e => { if (!isActive(l.to)) e.currentTarget.style.color = '#f0ebe2'; }}
                                onMouseLeave={e => { if (!isActive(l.to)) e.currentTarget.style.color = '#c8bfb0'; }}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Lang + mobile toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleLang}
                            style={{ fontFamily: 'Caveat Brush, cursive' }}
                            className="text-[0.95rem] tracking-[0.2em] uppercase border border-[#3a3a3a] px-3 py-1.5 text-[#c8bfb0] hover:text-[#b8c4d4] hover:border-[#b8c4d4] transition-all duration-300"
                        >
                            {i18n.language === 'es' ? 'EN' : 'ES'}
                        </button>
                        <button
                            className="lg:hidden text-[#c8bfb0] hover:text-[#f0ebe2] transition-colors"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* -- Mobile menu -- */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                        } bg-[#0a0a0a]/98 border-t border-[#232323]`}
                >
                    <div className="container-orazal py-6 flex flex-col gap-1">
                        {/* Home */}
                        <Link
                            to="/"
                            style={{ fontFamily: 'Caveat Brush, cursive', color: location.pathname === '/' ? '#b8c4d4' : '#9a9a9a' }}
                            className="text-[0.9rem] tracking-[0.2em] uppercase transition-colors duration-300 py-3"
                        >
                            {t('nav.home')}
                        </Link>

                        {/* Productos toggle */}
                        <div>
                            <button
                                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                style={{ fontFamily: 'Caveat Brush, cursive', color: isProductActive() ? '#b8c4d4' : '#9a9a9a' }}
                                className="text-[0.9rem] tracking-[0.2em] uppercase w-full text-left flex items-center justify-between py-3 bg-transparent border-none cursor-pointer"
                            >
                                {t('nav.products')}
                                <ChevronDown
                                    size={12}
                                    style={{
                                        transition: 'transform 0.3s',
                                        transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0)',
                                        color: '#c8bfb0',
                                    }}
                                />
                            </button>

                            {/* Sub-menu móvil */}
                            <div style={{
                                maxHeight: mobileProductsOpen ? '300px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                            }}>
                                <Link
                                    to="/productos"
                                    style={{ fontFamily: 'Caveat Brush, cursive', color: '#4a4a4a', display: 'block', paddingLeft: '1.5rem', paddingBottom: '0.75rem' }}
                                    className="text-[0.55rem] tracking-[0.2em] uppercase"
                                >
                                    Colección completa
                                </Link>
                                {MEZCALES.map((m) => (
                                    <Link
                                        key={m.to}
                                        to={m.to}
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1.5rem', paddingBottom: '0.75rem', textDecoration: 'none' }}
                                    >
                                        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: m.dot, flexShrink: 0 }} />
                                        <span style={{ fontFamily: 'Amatic SC, cursive', fontStyle: 'italic', fontSize: '1.05rem', color: '#c8c8c8', letterSpacing: '0.02em' }}>
                                            {m.name}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Rest of links */}
                        {simpleLinks.slice(1).map((l) => (
                            <Link
                                key={l.to}
                                to={l.to}
                                style={{ fontFamily: 'Caveat Brush, cursive', color: isActive(l.to) ? '#b8c4d4' : '#9a9a9a' }}
                                className="text-[0.9rem] tracking-[0.2em] uppercase transition-colors duration-300 py-3"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    );
}

