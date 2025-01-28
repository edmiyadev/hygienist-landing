import { NavItem } from "../interfaces/NavItem";
import { Navbar } from "../components";

export const Header = () => {
  const navItems: NavItem[] = [
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

  return (
    <header className="flex justify-center h-32 lg:h-24 bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar navItems={navItems} />
    </header>
  );
};
