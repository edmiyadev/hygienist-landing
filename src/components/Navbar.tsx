import { useState } from "react";
import { NavItem } from "../interfaces/NavItem";
import { HamburgerMenu } from "./HamburgerMenu";
import { ButtonThemeMode } from "./ButtonThemeMode";

export const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  const [navActive, setNavActive] = useState(false);

  const onClick = () => {
    setNavActive(!navActive);
  };

  const styles = {
    navNotActive: {
      nav: "flex left-1/2 transform -translate-x-1/2  lg:left-auto lg:transform-none bg-white justify-center space-center  mx-auto fixed lg:relative z-10 container py-4 w-full px-2 lg:bg-transparent dark:bg-[#0f172a]",
      div: "hidden flex-col w-2/3 items-center gap-x-8 text-xl font-semibold md:flex-row md:justify-between lg:flex ",
    },
    navActive: {
      nav: "flex fixed z-10 bg-blue-700 flex-col h-screen w-full py-5 px-2",
      div: "flex flex-col items-center gap-y-6 text-xl font-semibold",
    },
  };

  return (
    <nav className={navActive ? styles.navActive.nav : styles.navNotActive.nav}>
      <div className="flex container mx-auto justify-between items-center w-full">
        <h1 className={"font-bold text-2xl mb-2"}>Katherine Lora</h1>

        <button className="lg:hidden" onClick={onClick}>
          <HamburgerMenu navActive={navActive} />
        </button>
      </div>

      <div
        className={navActive ? styles.navActive.div : styles.navNotActive.div}
      >
        {navItems.map((item: NavItem) => {
          return (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-blue-800 flex-nowrap"
              onClick={() => navActive && setNavActive(!navActive)}
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
