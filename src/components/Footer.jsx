import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin, Facebook, Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
    const { t } = useTranslation();

    const navLinks = [
        { to: '/', label: t('nav.home') },
        { to: '/productos', label: t('nav.products') },
        { to: '/servicios', label: t('nav.services') },
        { to: '/blog', label: t('nav.blog') },
        { to: '/contacto', label: t('nav.contact') },
        { to: '/registro', label: t('nav.register') },
    ];

    return (
        <footer className="bg-[#080808] border-t border-[#1a1a1a] pt-16 pb-8">
            <div className="container-orazal">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="mb-4">
                            <div
                                style={{ fontFamily: 'Rye, cursive' }}
                                className="text-3xl font-light tracking-[0.25em] text-[#f0ebe2] leading-none"
                            >
                                CASA
                            </div>
                            <div
                                style={{ fontFamily: 'Rye, cursive' }}
                                className="text-[0.65rem] tracking-[0.45em] text-[#b8c4d4] mt-0.5"
                            >
                                ORAZAL
                            </div>
                        </div>
                        <p className="text-[0.75rem] tracking-[0.1em] text-[#c8bfb0] uppercase mt-4">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[#b8c4d4] mb-5" style={{ fontFamily: 'Cinzel, Georgia, serif' }}>
                            {t('footer.navigation')}
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.to}>
                                    <Link
                                        to={l.to}
                                        className="text-[1rem] text-[#c8bfb0] hover:text-[#f0ebe2] transition-colors duration-300"
                                        style={{ fontFamily: 'Raleway, Georgia, sans-serif', letterSpacing: '0.04em', fontWeight: 300 }}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[#b8c4d4] mb-5" style={{ fontFamily: 'Cinzel, Georgia, serif' }}>
                            {t('footer.contact')}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#3a3a3a] mb-1">
                                    Atención Directa
                                </p>
                                <a
                                    href="mailto:casaorazal@gmail.com"
                                    className="text-[1rem] text-[#c8bfb0] hover:text-[#f0ebe2] transition-colors flex items-center gap-2"
                                >
                                    <Mail size={12} />
                                    casaorazal@gmail.com
                                </a>
                            </li>
                            <li>
                                <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#3a3a3a] mb-2 mt-2">
                                    Sedes y Patrimonio
                                </p>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[0.9rem] text-[#c8bfb0] flex items-center gap-2">
                                        <MapPin size={12} className="shrink-0" />
                                        <span>Zaragoza 413, Centro, Oaxaca.</span>
                                    </span>
                                    <span className="text-[0.9rem] text-[#c8bfb0] flex items-center gap-2">
                                        <MapPin size={12} className="shrink-0" />
                                        <span>Frac. Frambollanes, Tehuacán.</span>
                                    </span>
                                </div>
                            </li>
                            <li className="pt-2">
                                <a
                                    href="https://wa.me/5219512441984"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[1rem] text-[#c8bfb0] hover:text-[#25D366] transition-colors flex items-center gap-2 mb-2"
                                >
                                    <MessageCircle size={12} />
                                    WhatsApp
                                </a>
                                <div className="flex flex-col gap-1 text-[0.85rem] text-[#c8bfb0]">
                                    <span className="flex items-center gap-2"><Phone size={12} /> +52 1 951 244 1984</span>
                                    <span className="flex items-center gap-2"><Phone size={12} /> +52 1 238 385 2656</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-[0.6rem] tracking-[0.25em] uppercase text-[#b8c4d4] mb-5" style={{ fontFamily: 'Cinzel, Georgia, serif' }}>
                            {t('footer.social')}
                        </h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { icon: Instagram, label: '@casaorazal', href: '#', hoverClass: 'hover:text-[#e1306c]' },
                                { icon: Facebook, label: 'Casa Orazal', href: '#', hoverClass: 'hover:text-[#1877f2]' },
                                { icon: Linkedin, label: 'Casa Orazal', href: '#', hoverClass: 'hover:text-[#0a66c2]' },
                            ].map((item) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-3 text-[1rem] text-[#c8bfb0] transition-colors duration-300 ${item.hoverClass}`}
                                    >
                                        <Icon size={14} />
                                        {item.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[0.65rem] tracking-[0.1em] text-[#3a3a3a] uppercase">
                        © {new Date().getFullYear()} CASA ORAZAL — {t('footer.rights')}
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-[0.65rem] tracking-[0.1em] text-[#3a3a3a] hover:text-[#c8bfb0] uppercase transition-colors">
                            {t('footer.privacy')}
                        </a>
                        <a href="#" className="text-[0.65rem] tracking-[0.1em] text-[#3a3a3a] hover:text-[#c8bfb0] uppercase transition-colors">
                            {t('footer.legal')}
                        </a>
                    </div>
                    <p className="text-[0.6rem] tracking-[0.05em] text-[#2a2a2a] text-center md:text-right">
                        {t('footer.age_warning')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
