import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WspButton() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="541153743796"
        accountName="Calliope Lyrica"
        avatar="C.png"
        chatMessage="¡Hola! Escribe tu consulta y te responderemos a la brevedad"
        placeholder="Escribe un mensaje..."
      />
    </div>
  );
}
