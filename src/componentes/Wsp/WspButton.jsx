import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function WspButton() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="541153743796"
        accountName="Calliope Lyrica"
        avatar="calliopeWsp.png" 
        chatMessage="¡Hola! ¿Cómo podemos ayudarte?"
        placeholder="Escribe un mensaje..."
      />
    </div>
  );
}
