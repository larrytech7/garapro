const phone = process.env.NEXT_PUBLIC_PHONE ?? "+237678656032";
const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "237678656032";

export const phoneE164 = phone.replace(/[^\d+]/g, "");
export const whatsappDigits = whatsapp.replace(/\D/g, "");

export function displayPhone() {
  const digits = phoneE164.replace(/\D/g, "");
  if (digits.startsWith("237") && digits.length === 12) {
    const local = digits.slice(3);
    return `+237 ${local[0]} ${local.slice(1, 3)} ${local.slice(3, 5)} ${local.slice(5, 7)} ${local.slice(7, 9)}`;
  }
  return phoneE164;
}

export function telHref() {
  return `tel:${phoneE164}`;
}

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
}
