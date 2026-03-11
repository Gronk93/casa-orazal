import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
    const { slug } = useParams();
    const { t, i18n } = useTranslation();
    const lang = i18n.language.startsWith('en') ? 'en' : 'es';

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-[#080808] flex items-center justify-center text-[#f0ebe2] pt-20">
                <div className="text-center">
                    <p className="text-[#c8bfb0] mb-6">Artículo no encontrado.</p>
                    <Link to="/blog" className="btn-primary">← {t('blog.back')}</Link>
                </div>
            </div>
        );
    }

    const paragraphs = post.content[lang].split('\n\n');

    const renderParagraph = (text, i) => {
        if (text.startsWith('**') && text.endsWith('**')) {
            return (
                <h3
                    key={i}
                    className="text-2xl font-light text-[#f0ebe2] mt-10 mb-4"
                    style={{ fontFamily: 'Amatic SC, cursive' }}
                >
                    {text.replace(/\*\*/g, '')}
                </h3>
            );
        }
        if (text.startsWith('- ') || text.startsWith('* ')) {
            const items = text.split('\n').filter(Boolean);
            return (
                <ul key={i} className="space-y-2 my-4 ml-4">
                    {items.map((item, j) => (
                        <li key={j} className="text-[1.05rem] text-[#c8bfb0] leading-loose flex items-start gap-3">
                            <span className="text-[#b8c4d4] mt-1 flex-shrink-0">—</span>
                            <span dangerouslySetInnerHTML={{ __html: item.replace(/^[-*]\s/, '').replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
                        </li>
                    ))}
                </ul>
            );
        }
        const html = text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#f0ebe2;font-weight:400">$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>');
        return (
            <p
                key={i}
                className="text-[1.05rem] text-[#c8bfb0] leading-loose mb-6"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        );
    };

    return (
        <div className="bg-[#080808] text-[#f0ebe2] pt-20 min-h-screen">
            {/* Hero */}
            <div
                className="py-24 border-b border-[#141414]"
                style={{ background: 'linear-gradient(180deg, #0e0e0e 0%, #080808 100%)' }}
            >
                <div className="container-orazal max-w-3xl mx-auto">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-[#c8bfb0] hover:text-[#b8c4d4] transition-colors mb-10"
                    >
                        <ArrowLeft size={12} /> {t('blog.back')}
                    </Link>

                    <div className="flex items-center gap-3 mb-5">
                        <span
                            className="text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1"
                            style={{ border: '1px solid rgba(184,196,212,0.3)', color: '#b8c4d4' }}
                        >
                            {post.category[lang]}
                        </span>
                    </div>

                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
                        style={{ fontFamily: 'Amatic SC, cursive' }}
                    >
                        {post.title[lang]}
                    </h1>

                    <div className="flex items-center gap-6 text-[#3a3a3a] text-[0.7rem] tracking-wide">
                        <span className="flex items-center gap-2"><Calendar size={11} /> {post.date}</span>
                        <span className="flex items-center gap-2"><Clock size={11} /> {post.readTime}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="section-pad">
                <div className="container-orazal max-w-2xl mx-auto">
                    {/* Excerpt */}
                    <p
                        className="text-[1.1rem] text-[#c8bfb0] leading-loose mb-12 italic border-l-2 border-[#b8c4d4] pl-6"
                        style={{ fontFamily: 'Amatic SC, cursive', fontSize: '1.25rem' }}
                    >
                        {post.excerpt[lang]}
                    </p>

                    {/* Body */}
                    <div className="prose-orazal">
                        {paragraphs.map((p, i) => renderParagraph(p, i))}
                    </div>

                    {/* Footer nav */}
                    <div className="mt-16 pt-8 border-t border-[#141414] flex justify-between items-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase text-[#c8bfb0] hover:text-[#b8c4d4] transition-colors"
                        >
                            <ArrowLeft size={12} /> {t('blog.back')}
                        </Link>
                        <Link to="/registro" className="btn-primary text-[0.65rem]">
                            Únete a la comunidad
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
}
