import { useState } from "react";
import { NavItem } from "../interfaces/NavItem";

export const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
  const [navActive, setNavActive] = useState(false);

  const onClick = () => {
    setNavActive(!navActive);
  };

  const styles = {
    navNotActive: {
      nav: "flex-row container justify-between h-full",
      h1: "font-bold text-2xl mb-2",
      button: "lg:hidden",
      div: "lg:flex flex-col md:flex-row md:justify-between items-center gap-x-8 text-xl font-semibold hidden",
    },
    navActive: {
      nav: "fixed z-10 bg-blue-700 flex-col h-screen w-full py-4 px-2",
      h1: "hidden",
      button: "mb-8",
      div: "flex flex-col items-center gap-y-6 text-xl font-semibold",
    },
  };

  return (
    <nav
      className={`flex mx-auto items-center px-2 ${
        navActive ? styles.navActive.nav : styles.navNotActive.nav
      }`}
    >
      <h1
        className={`font-bold text-2xl mb-2 ${
          navActive ? styles.navActive.h1 : styles.navNotActive.h1
        }`}
      >
        Katherine Lora
      </h1>

      <button
        className={
          navActive ? styles.navActive.button : styles.navNotActive.button
        }
        onClick={onClick}
      >
        menubar
      </button>

      <div
        className={navActive ? styles.navActive.div : styles.navNotActive.div}
      >
        {navItems.map((item: NavItem) => {
          return (
            <a
              key={item.id}
              href={`#${item.name}`}
              className="hover:text-blue-800"
              onClick={() => {
                navActive && setNavActive(!navActive);
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

// export const Navbar = ({ navItems }: { navItems: NavItem[] }) => {
//   const [navActive, setNavActive] = useState(false);

//   const onClick = () => {
//     setNavActive(!navActive);
//   };

//   if (navActive) {
//     return (
//       <nav className="fixed z-10 bg-blue-700 flex flex-col mx-auto items-center h-screen w-full py-4 px-2">
//         <button className="mb-8" onClick={onClick}>
//           menubar
//         </button>

//         <div className="flex flex-col items-center gap-y-6 text-xl font-semibold">
//           {navItems.map((item: NavItem) => {
//             return (
//               <a
//                 key={item.id}
//                 href={`#${item.name}`}
//                 className="hover:text-blue-800"
//                 onClick={() => {
//                   setNavActive(!navActive);
//                 }}
//               >
//                 {item.label}
//               </a>
//             );
//           })}
//         </div>
//       </nav>
//     );
//   }

//   return (
//     <nav className="flex flex-row container mx-auto justify-between items-center h-full px-2">
//       <h1 className="font-bold text-2xl mb-2">Katherine Lora</h1>

//       <button className="lg:hidden" onClick={onClick}>menubar</button>
//       <div className="lg:flex flex-col md:flex-row md:justify-between items-center gap-x-8 text-xl font-semibold hidden">
//         {navItems.map((item: NavItem) => {
//           return (
//             <a
//               key={item.id}
//               href={`#${item.name}`}
//               className="hover:text-blue-800"
//             >
//               {item.label}
//             </a>
//           );
//         })}
//       </div>
//     </nav>
//   );
// };
