import { ButtonThemeMode } from "./";
import { HamburgerMenu } from "./";
import { NavItem } from "../interfaces";
import { useToggleMenu } from "../hooks";
import "@fontsource/alex-brush";

export const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  const { isMenuOpen, onClickMenu } = useToggleMenu();

  const styles = {
    menuClose: {
      nav: "left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none justify-center space-center mx-auto lg:relative",
      div: "hidden w-3/4 gap-x-6 md:flex-row md:justify-between lg:flex",
    },
    menuOpen: {
      nav: "flex-col h-screen duration-500",
      div: "flex gap-y-6",
    },
  };

  return (
    <nav
      className={`fixed flex w-full z-10 p-4 bg-slate-100 dark:bg-gray-900 ${
        isMenuOpen ? styles.menuOpen.nav : styles.menuClose.nav
      }`}
    >
      <div className="flex container mx-auto justify-between items-center lg:w-2/5 w-full lg:justify-start">
        <div
          className={
            " flex lg:flex-col items-center justify-center font-bold mb-2"
          }
        >
          <img
            alt="Katherine Lora"
            src="./icons/favicon.svg"
            width={"60px"}
          ></img>
          <h1
            className="text-xl"
            style={{ fontFamily: "'Alex Brush', cursive" }}
          >
            Katherine Lora
          </h1>
        </div>

        <button className="lg:hidden" onClick={onClickMenu}>
          <HamburgerMenu isMenuOpen={isMenuOpen} />
        </button>
      </div>

      <div
        className={`flex-col items-center text-xl font-semibold flex-1 ${
          isMenuOpen ? styles.menuOpen.div : styles.menuClose.div
        }`}
      >
        {navItems.map((item: NavItem) => {
          return (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#359EFF] flex-nowrap"
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
