import Image from "next/image";

const IconWhatsApp = () => {
  return (
    <a
      className="fixed bottom-8 right-3 z-40"
      href="https://wa.me/5511914850610?text=Gostaria%20de%20agendar%20minha%20consulta%20na%20Cl%C3%ADnica%20Elanc%C3%A9...%20"
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
