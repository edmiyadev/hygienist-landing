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
    <header className="h-32 lg:h-20 dark:text-white">
      <Navbar navItems={navItems} />
    </header>
  );
};
