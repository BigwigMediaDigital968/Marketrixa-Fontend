import React from "react";

interface WhatsAppButtonProps {
    message: string;
    phoneNumber?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function WhatsAppButton({
    message,
    phoneNumber = "919512400000",
    children = "Chat on WhatsApp",
    className = "",
}: WhatsAppButtonProps) {
    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 active:scale-95 ${className}`}
            style={{
                background: "linear-gradient(135deg, #25D366, #1aab52)",
                boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
            }}
        >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.526 5.845L.057 23.428a.75.75 0 00.916.916l5.633-1.474A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.964-1.355l-.355-.212-3.686.965.982-3.595-.233-.371A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            {children}
        </a>
    );
}

// USE CASE 
{/* <WhatsAppButton
    message={`Hi! I'd like to discuss my project.
    Name: ${formData.name}
    Email: ${formData.email}
    Company: ${formData.company || "N/A"}
    Services: ${selectedServices.join(", ") || "N/A"}`}
    >
    Chat on WhatsApp
    </WhatsAppButton> */}