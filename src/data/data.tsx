import { NavItem, Service } from "../interfaces";
import { BrushIcon, ShieldIcon, SparklesIcon } from "../components/icons";

export const navItems: NavItem[] = [
  {
    href: "#hero",
    label: "Inicio",
  },
  {
    href: "#services",
    label: "Servicios",
  },
  {
    href: "#about",
    label: "Sobre Mi",
  },
  {
    href: "#contact",
    label: "Contacto",
  },
];

export const services: Service[] = [
  {
    icon: <SparklesIcon />,
    title: "Limpieza Dental",
    description: "Eliminación de placa y sarro para una sonrisa saludable.",
  },
  {
    icon: <BrushIcon />,
    title: "Blanqueamiento",
    description: "Tratamiento para aclarar el tono de tus dientes.",
  },
  {
    icon: <ShieldIcon />,
    title: "Prevención",
    description: "Consejos y cuidados para mantener una buena salud bucal.",
  },
];

export const about = {
  image: "./img/avatar.webp",
  name: "Katherine Lora",
  description: `Soy una higienista dental certificada con más de 2 años de experiencia 
            en salud bucodental preventiva. Mi formación especializada y continua 
            actualización me permiten ofrecer los mejores tratamientos de limpieza, 
            prevención y estética dental. Me apasiona educar a mis pacientes sobre 
            técnicas de higiene oral adecuadas y ayudarles a mantener una sonrisa 
            saludable y radiante. Mi enfoque se basa en un cuidado personalizado, 
            atento y profesional para que cada visita sea una experiencia cómoda 
            y satisfactoria.`,
};
