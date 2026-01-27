"use client";

export default function WhatsAppButton() {
  const phone = "917356886983";
  const message = encodeURIComponent(
    "Hi, I’m interested in your services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      Chat on WhatsApp
    </a>
  );
}
