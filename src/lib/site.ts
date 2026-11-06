const WHATSAPP_COUNTRY_CODE = "55";
const WHATSAPP_NATIONAL_NUMBER = "89994000014";

export const WHATSAPP_NUMBER = `${WHATSAPP_COUNTRY_CODE}${WHATSAPP_NATIONAL_NUMBER}`;
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá João! Vim pelo site e gostaria de conversar sobre um projeto.",
)}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/joaokelvindev/",
  linkedin: "https://www.linkedin.com/in/joaokelvindev/",
  github: "https://github.com/JoaoKelvinDev",
  email: "mailto:contato@joaokelvin.dev",
};
