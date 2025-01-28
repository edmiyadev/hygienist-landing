import { ButtonThemeMode } from "./ButtonThemeMode";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavItem } from "../interfaces/NavItem";
import { useToggleMenu } from "../hooks/useToggleMenu";

export const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  const { isMenuOpen, onClickMenu } = useToggleMenu();

  const styles = {
    menuClose: {
      nav: "left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none justify-center space-center mx-auto lg:relative container",
      div: "hidden w-3/4 gap-x-8 md:flex-row md:justify-between lg:flex",
    },
    menuOpen: {
      nav: "flex-col h-screen",
      div: "flex gap-y-6",
    },
  };

  return (
    <nav
      className={`fixed flex w-full z-10 p-4 bg-white dark:bg-gray-900 ${
        isMenuOpen ? styles.menuOpen.nav : styles.menuClose.nav
      }`}
    >
      <div className="flex container mx-auto justify-between items-center w-full lg:w-1/4">
        <h1 className={"font-bold text-2xl mb-2"}>Katherine Lora</h1>

        <button className="lg:hidden" onClick={onClickMenu}>
          <HamburgerMenu isMenuOpen={isMenuOpen} />
        </button>
      </div>

      <div
        className={`flex-col items-center text-xl font-semibold ${
          isMenuOpen ? styles.menuOpen.div : styles.menuClose.div
        }`}
      >
        {navItems.map((item: NavItem) => {
          return (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-blue-800 flex-nowrap"
              onClick={() => isMenuOpen && onClickMenu()}
            >
              {item.label}
            </a>
          );
        })}
        <ButtonThemeMode />
      </div>
    </nav>
  );
};
