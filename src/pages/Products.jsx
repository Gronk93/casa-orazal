import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
    const { t } = useTranslation();

    return (
        <div className="bg-[#080808] text-[#f0ebe2] pt-20 min-h-screen">
            {/* ── Header ── */}
            <div className="border-b border-[#141414] relative overflow-hidden flex flex-col justify-center min-h-[50vh] xl:min-h-[60vh]">
                {/* Imagen de fondo Hero */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('/images/HERO PROUCTO.png')` }}
                ></div>

                {/* Degradado oscuro para legibilidad (ligero arriba, intenso abajo) */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-[#080808]/70 to-[#080808]"></div>

                {/* Degradado radial ligero adicional para dar carácter al texto como se hizo antes */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a]/30 via-transparent to-transparent pointer-events-none"></div>

                <div className="container-orazal flex flex-col items-center text-center max-w-4xl mx-auto relative z-10 py-16 mt-10">
                    <div
                        className="text-[2rem] md:text-[2.5rem] text-[#b8c4d4] mb-3"
                        style={{ fontFamily: 'Caveat Brush, cursive', opacity: 0.75 }}
                    >
                        {t('products.pre_title')}
                    </div>
                    <h1
                        className="text-6xl md:text-8xl lg:text-[7rem] font-light mb-8 drop-shadow-xl"
                        style={{ fontFamily: 'Amatic SC, cursive', fontStyle: 'italic', textShadow: '0 10px 40px rgba(0,0,0,0.6)' }}
                    >
                        {t('products.title')}
                    </h1>
                    <p
                        className="text-[1.1rem] md:text-[1.3rem] max-w-2xl mx-auto"
                        style={{ fontFamily: 'Caveat Brush, cursive', fontWeight: 300, color: '#c8bfb0', lineHeight: 1.8 }}
                    >
                        {t('products.subtitle')}
                    </p>
                </div>
            </div>

            {/* ── 50-50 Dual Layout ── */}
            <section className="container-orazal py-8">
                <div className="flex flex-col lg:flex-row w-full mb-16 rounded-2xl overflow-hidden shadow-2xl" border="1px solid #1a1a1a" style={{ border: '1px solid #1a1a1a' }}>

                    {/* Lado Izquierdo - Arroqueño/Espadín */}
                    <div className="w-full lg:w-1/2 relative bg-[#050505] p-8 md:p-14 xl:p-16 flex flex-col group border-b lg:border-b-0 lg:border-r border-[#1a1a1a]" style={{ '--tw-drop-shadow': '0 0 20px rgba(0,0,0,0.5)', filter: 'var(--tw-drop-shadow)' }}>
                        <div className="absolute top-0 right-0 text-[10rem] leading-none font-light opacity-[0.02] select-none pointer-events-none" style={{ fontFamily: 'Amatic SC, cursive', color: '#c8bfb0' }}>
                            A
                        </div>

                        <h3 className="text-3xl md:text-4xl font-light text-[#f0ebe2] mb-1" style={{ fontFamily: 'Amatic SC, cursive' }}>Mezcal Casa Orazal</h3>
                        <h4 className="text-xl md:text-2xl text-[#c8bfb0] mb-8 font-light italic">Joven Arroqueño</h4>

                        <p className="text-[1.05rem] text-[#c8bfb0] leading-relaxed mb-8 font-light" style={{ fontFamily: 'Caveat Brush, cursive' }}>
                            Mezcal artesanal Casa Orazal – Espadín, originario de Oaxaca y elaborado bajo la tradición ancestral por el maestro mezcalero Margarito Navarro Sánchez. Cada botella representa el orgullo de la tierra y la pasión de su gente.
                        </p>

                        <div className="mb-8">
                            <h5 className="text-[0.7rem] tracking-[0.25em] uppercase text-[#b8c4d4] opacity-80 mb-4 inline-block border-b border-[#b8c4d4]/30 pb-1" style={{ fontFamily: 'Caveat Brush, cursive' }}>100% Artesanal y Tradicional</h5>
                            <p className="text-[0.95rem] text-[#a0988c] mb-3" style={{ fontFamily: 'Caveat Brush, cursive' }}>Elaborado con un proceso único:</p>
                            <ul className="text-[0.9rem] text-[#a0988c] space-y-2 mb-4 font-light" style={{ fontFamily: 'Caveat Brush, cursive' }}>
                                <li className="flex items-start gap-2"><span className="text-[#b8c4d4] mt-1">•</span> Cocimiento en horno cónico bajo tierra.</li>
                                <li className="flex items-start gap-2"><span className="text-[#b8c4d4] mt-1">•</span> Molienda en molino de piedra.</li>
                                <li className="flex items-start gap-2"><span className="text-[#b8c4d4] mt-1">•</span> Fermentación natural en tinas de encino.</li>
                                <li className="flex items-start gap-2"><span className="text-[#b8c4d4] mt-1">•</span> Doble destilación en alambique de cobre.</li>
                            </ul>
                            <p className="text-[0.95rem] text-[#a0988c] italic" style={{ fontFamily: 'Caveat Brush, cursive' }}>Un método tradicional que asegura un perfil puro, lleno de carácter y sabor auténtico.</p>
                        </div>

                        <div className="mb-10 flex-1">
                            <h5 className="text-[0.7rem] tracking-[0.25em] uppercase text-[#b8c4d4] opacity-80 mb-3 inline-block border-b border-[#b8c4d4]/30 pb-1" style={{ fontFamily: 'Caveat Brush, cursive' }}>Toque del Espadín</h5>
                            <p className="text-[1rem] text-[#c8bfb0] leading-relaxed font-light" style={{ fontFamily: 'Caveat Brush, cursive' }}>
                                Este Espadín de Casa Orazal ofrece un equilibrio entre notas ahumadas, dulces y herbales, brindando una experiencia que conecta con las raíces de Oaxaca.
                            </p>
                        </div>

                        {/* Espacio para imagen */}
                        <div className="w-full h-64 md:h-80 relative mt-auto rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-t from-[#000] to-transparent border border-[#111] group-hover:border-[#222] transition-colors">
                            <img src="/images/HORNO.png" alt="Arroqueño" className="absolute h-[110%] object-contain group-hover:scale-105 transition-transform duration-700 opacity-90 bottom-2" style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.6))' }} />
                        </div>
                    </div>

                    {/* Lado Derecho - Papalometl */}
                    <div className="w-full lg:w-1/2 relative bg-[#0a0a0c] p-8 md:p-14 xl:p-16 flex flex-col group overflow-hidden">
                        {/* Sombreado plateado solicitado */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[rgba(184,196,212,0.18)] via-transparent to-transparent pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-80"></div>

                        <div className="absolute top-0 right-0 text-[10rem] leading-none font-light opacity-[0.03] select-none pointer-events-none text-[#b8c4d4]" style={{ fontFamily: 'Amatic SC, cursive' }}>
                            P
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-3xl md:text-4xl font-light text-[#f0ebe2] mb-1" style={{ fontFamily: 'Amatic SC, cursive' }}>Mezcal Casa Orazal</h3>
                            <h4 className="text-xl md:text-2xl text-[#b8c4d4] mb-3 font-light italic text-shadow-sm">Papalometl</h4>
                            <h5 className="text-[0.75rem] tracking-[0.2em] uppercase text-[#a0988c] mb-8 font-mono opacity-80">La Fuerza del Agave Silvestre</h5>

                            <p className="text-[1.05rem] text-[#c8bfb0] leading-relaxed mb-8 font-light" style={{ fontFamily: 'Caveat Brush, cursive' }}>
                                Mezcal artesanal Casa Orazal – Papalometl (Arroqueño), originario de Oaxaca y elaborado por el maestro mezcalero Margarito Navarro Sánchez. Un mezcal robusto, con carácter intenso y la nobleza de un agave silvestre que tarda más de 15 años en madurar.
                            </p>

                            <div className="mb-8">
                                <h5 className="text-[0.7rem] tracking-[0.25em] uppercase text-[#b8c4d4] opacity-80 mb-4 inline-block border-b border-[#b8c4d4]/30 pb-1" style={{ fontFamily: 'Caveat Brush, cursive' }}>100% Artesanal y Tradicional</h5>
                                <p className="text-[0.95rem] text-[#a0988c] mb-3" style={{ fontFamily: 'Caveat Brush, cursive' }}>Elaborado con un proceso único:</p>
                                <ul className="text-[0.9rem] text-[#a0988c] space-y-2 mb-4 font-light" style={{ fontFamily: 'Caveat Brush, cursive' }}>
                                    <li className="flex items-start gap-2"><span className="text-[#b8c4d4] mt-1">•</span> Cocimiento en horno cónico bajo tierra.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#b8c4d4] mt-1">•</span> Molienda en molino de piedra.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#b8c4d4] mt-1">•</span> Fermentación en tinas de encino.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#b8c4d4] mt-1">•</span> Doble destilación en alambique de cobre.</li>
                                </ul>
                                <p className="text-[0.95rem] text-[#a0988c] italic" style={{ fontFamily: 'Caveat Brush, cursive' }}>Un método ancestral que asegura un perfil complejo, profundo y lleno de tradición.</p>
                            </div>

                            <div className="mb-10 flex-1">
                                <h5 className="text-[0.7rem] tracking-[0.25em] uppercase text-[#b8c4d4] opacity-80 mb-3 inline-block border-b border-[#b8c4d4]/30 pb-1" style={{ fontFamily: 'Caveat Brush, cursive' }}>Toque del Papalometl (Arroqueño)</h5>
                                <p className="text-[1rem] text-[#c8bfb0] leading-relaxed font-light" style={{ fontFamily: 'Caveat Brush, cursive' }}>
                                    Este mezcal ofrece notas ahumadas intensas, con matices herbales y minerales, y un final largo que transmite la fuerza de la tierra oaxaqueña. Cada botella es una experiencia que conecta con lo silvestre y lo ancestral.
                                </p>
                            </div>

                            {/* Espacio para imagen */}
                            <div className="w-full h-64 md:h-80 relative mt-auto rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-t from-[#000] to-transparent border border-[#b8c4d4]/10 group-hover:border-[#b8c4d4]/20 transition-colors shadow-[0_0_40px_rgba(184,196,212,0.06)]">
                                <img src="/images/papalometl maguey.png" alt="Papalometl" className="absolute h-[110%] object-contain group-hover:scale-105 transition-transform duration-700 opacity-95 drop-shadow-[0_20px_30px_rgba(184,196,212,0.18)] bottom-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Proceso ancestral ── */}
            <section className="section-pad border-t border-[#141414]">
                <div className="container-orazal max-w-3xl mx-auto text-center">
                    <div
                        className="text-3xl text-[#b8c4d4] mb-4"
                        style={{ fontFamily: 'Caveat Brush, cursive', opacity: 0.6 }}
                    >
                        Hecho a mano, sin prisa
                    </div>
                    <h2
                        className="text-3xl md:text-5xl font-light mb-8"
                        style={{ fontFamily: 'Amatic SC, cursive', fontStyle: 'italic' }}
                    >
                        El proceso ancestral
                    </h2>
                    <p
                        className="text-[1.05rem] mb-10"
                        style={{ fontFamily: 'Caveat Brush, cursive', fontWeight: 300, color: '#c8bfb0', lineHeight: 1.9 }}
                    >
                        Cada botella de CASA ORAZAL pasa por meses de horno subterráneo, fermentación abierta y destilación en olla de barro o cobre. Sin atajos. Sin aditivos. Solo agave, fuego y tiempo.
                    </p>
                    <Link to="/contacto" className="btn-primary">
                        Hablar con nosotros <ArrowRight size={13} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
