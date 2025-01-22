import Image from "next/image";

const IconWhatsApp = () => {
  return (
    <a
      className="fixed bottom-8 right-3 z-40"
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/icone-whatsapp.svg"
        alt="Icone WhatsApp"
        width={60}
        height={60}
      />
    </a>
  );
};

export default IconWhatsApp;
