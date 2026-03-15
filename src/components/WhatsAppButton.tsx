import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center active:scale-95 transition-transform"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={24} className="text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
