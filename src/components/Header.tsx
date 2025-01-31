import { Navbar } from "../components";
import { navItems } from "../data/data";

export const Header = () => {
  return (
    <header className="flex justify-center h-20 lg:h-24 border-b border-solid border-b-gray-300 dark:border-b-gray-700 bg-slate-100 dark:bg-gray-900 text-black dark:text-white">
      <Navbar navItems={navItems} />
    </header>
  );
};
