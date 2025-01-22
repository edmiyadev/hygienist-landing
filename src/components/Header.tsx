import { NavItem } from "../interfaces/NavItem";
import { Navbar } from "../components";

export const Header = () => {
  const navItems: NavItem[] = [
    {
      id: 1,
      name: "hero",
      label: "Inicio",
    },
    {
      id: 2,
      name: "services",
      label: "Servicios",
    },
    {
      id: 3,
      name: "about",
      label: "Sobre Mi",
    },
    {
      id: 4,
      name: "contact",
      label: "Contacto",
    },
  ];

  return (
    <header className="h-36 lg:h-20">
      <Navbar navItems={navItems} />
    </header>
  );
};
