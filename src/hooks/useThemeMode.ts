import { useEffect, useState } from "react";

export const useThemeMode = () => {
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem("theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  const onChangeTheme = () => {
    setTheme((theme) => {
      if (theme === "light") {
        localStorage.setItem("theme", "dark");
        return "dark";
      } else {
        localStorage.setItem("theme", "light");
        return "light";
      }
    });
  };

  useEffect(() => {
    theme === "dark"
      ? document.querySelector("html")?.classList.add("dark")
      : document.querySelector("html")?.classList.remove("dark");
  }, [theme]);

  return {
    theme,
    onChangeTheme,
  };
};
