interface WhatsappButtonProps {
  phone: string;
  productName: string;
}

export function WhatsappButton({ phone, productName }: WhatsappButtonProps) {
  const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${productName}. Gostaria de mais detalhes.`);

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center font-medium gap-2"
    >
      Conversar no WhatsApp
    </a>
  );
}