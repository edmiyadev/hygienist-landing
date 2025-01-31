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
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tempore
            suscipit, iusto at voluptatum facilis ducimus animi natus autem
            praesentium omnis officiis, eaque eius, odit necessitatibus atque.
            Neque, voluptates animi!Lorem ipsum dolor sit amet consectetur
            adipisicing elit.`,
};
