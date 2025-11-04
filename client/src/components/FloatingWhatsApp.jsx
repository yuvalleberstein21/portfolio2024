import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = "972509525201";
        const message = "Hi! I'd like to get in touch.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl smooth-transition animate-glow-pulse group"
            aria-label="Contact via WhatsApp"
        >
            <MessageCircle className="h-6 w-6 group-hover:scale-110 smooth-transition" />
        </button>
    );
};