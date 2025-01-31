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
    <header className="flex justify-center h-20 lg:h-24 border-b border-solid border-b-gray-300 dark:border-b-gray-700 bg-slate-100 dark:bg-gray-900 text-black dark:text-white">
      <Navbar navItems={navItems} />
    </header>
  );
};
