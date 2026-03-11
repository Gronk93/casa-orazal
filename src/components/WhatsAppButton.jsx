import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    const { t } = useTranslation();
    return (
        <a
            href="https://wa.me/529510000000"
            target="_blank"
            rel="noopener noreferrer"
            title={t('contact.whatsapp')}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-silver"
            style={{ boxShadow: '0 4px 24px rgba(37,211,102,0.35)' }}
        >
            <MessageCircle size={26} className="text-white" fill="white" />
        </a>
    );
}
