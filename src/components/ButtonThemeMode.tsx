import { useThemeMode } from "../hooks";
import { MoonIcon, SunIcon } from "./icons";

export const ButtonThemeMode = () => {
  const { theme, onChangeTheme } = useThemeMode();

  return (
    <button onClick={onChangeTheme}>
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};
