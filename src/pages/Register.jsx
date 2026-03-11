import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Shield } from 'lucide-react';

const COUNTRIES = [
    'México', 'Estados Unidos', 'Canadá', 'España', 'Argentina', 'Colombia',
    'Chile', 'Perú', 'Brasil', 'Francia', 'Alemania', 'Italia', 'Japón',
    'Australia', 'Reino Unido', 'Países Bajos', 'Bélgica', 'Suiza', 'Otro'
];

export default function Register() {
    const { t } = useTranslation();
    const [form, setForm] = useState({ name: '', country: '', email: '', phone: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate submission
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    return (
        <div className="bg-[#080808] text-[#f0ebe2] pt-20 min-h-screen">
            <div className="section-pad">
                <div className="container-orazal max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-14">
                        <div className="flex items-center justify-center gap-4 mb-3">
                            <div className="h-px w-8 bg-[#b8c4d4] opacity-60" />
                            <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[#b8c4d4]">{t('register.label')}</span>
                            <div className="h-px w-8 bg-[#b8c4d4] opacity-60" />
                        </div>
                        <h1
                            className="text-4xl md:text-6xl font-light mb-5"
                            style={{ fontFamily: 'Rye, cursive' }}
                        >
                            {t('register.title')}
                        </h1>
                        <p className="text-[1.05rem] text-[#c8bfb0] leading-loose max-w-md mx-auto">
                            {t('register.subtitle')}
                        </p>
                    </div>

                    {sent ? (
                        /* Success state */
                        <div
                            className="p-12 text-center"
                            style={{ border: '1px solid rgba(184,196,212,0.25)', background: 'rgba(184,196,212,0.04)' }}
                        >
                            <CheckCircle size={40} className="text-[#b8c4d4] mx-auto mb-5 opacity-80" />
                            <h2
                                className="text-2xl font-light text-[#f0ebe2] mb-3"
                                style={{ fontFamily: 'Rye, cursive' }}
                            >
                                Bienvenido, {form.name}.
                            </h2>
                            <p className="text-[1.05rem] text-[#c8bfb0] leading-loose">
                                {t('register.success')}
                            </p>
                        </div>
                    ) : (
                        /* Form */
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                            style={{ border: '1px solid #1a1a1a', background: '#0c0c0c', padding: '3rem' }}
                        >
                            {/* Name */}
                            <div>
                                <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-[#c8bfb0] mb-2">
                                    {t('register.name')}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-[#2a2a2a] focus:border-[#b8c4d4] outline-none py-3 text-[1.05rem] text-[#f0ebe2] placeholder-[#3a3a3a] transition-colors duration-300"
                                    placeholder="Tu nombre completo"
                                />
                            </div>

                            {/* Country */}
                            <div>
                                <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-[#c8bfb0] mb-2">
                                    {t('register.country')}
                                </label>
                                <select
                                    name="country"
                                    required
                                    value={form.country}
                                    onChange={handleChange}
                                    className="w-full bg-[#0c0c0c] border-b border-[#2a2a2a] focus:border-[#b8c4d4] outline-none py-3 text-[1.05rem] text-[#f0ebe2] transition-colors duration-300 appearance-none cursor-pointer"
                                >
                                    <option value="" style={{ background: '#0c0c0c' }}>{t('register.select_country')}</option>
                                    {COUNTRIES.map((c) => (
                                        <option key={c} value={c} style={{ background: '#0c0c0c' }}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-[#c8bfb0] mb-2">
                                    {t('register.email')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-[#2a2a2a] focus:border-[#b8c4d4] outline-none py-3 text-[1.05rem] text-[#f0ebe2] placeholder-[#3a3a3a] transition-colors duration-300"
                                    placeholder="tu@correo.com"
                                />
                            </div>

                            {/* Phone (optional) */}
                            <div>
                                <label className="block text-[0.65rem] tracking-[0.2em] uppercase text-[#c8bfb0] mb-2">
                                    {t('register.phone')}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-[#2a2a2a] focus:border-[#b8c4d4] outline-none py-3 text-[1.05rem] text-[#f0ebe2] placeholder-[#3a3a3a] transition-colors duration-300"
                                    placeholder="+52 000 000 0000"
                                />
                            </div>

                            {/* Trust message */}
                            <div className="flex items-start gap-3 pt-3">
                                <Shield size={14} className="text-[#b8c4d4] opacity-50 flex-shrink-0 mt-0.5" />
                                <p className="text-[0.72rem] text-[#3a3a3a] leading-loose">
                                    {t('register.privacy')}
                                </p>
                            </div>

                            {/* Submit */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn-primary w-full justify-center"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full border border-[#b8c4d4] border-t-transparent animate-spin" />
                                            Un momento…
                                        </span>
                                    ) : t('register.submit')}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
