import { NavItem } from "../interfaces/NavItem";

export const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  return (
    <nav className="flex flex-col container mx-auto justify-center items-center h-full md:flex-row md:justify-between md:px-2">
      <h1 className="font-bold text-2xl mb-2">Katherine Lora</h1>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-x-8 text-xl font-semibold">
        {navItems.map((item: NavItem) => {
          return (
            <a
              key={item.id}
              href={`#${item.name}`}
              className="hover:text-blue-800"
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
