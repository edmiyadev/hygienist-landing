import { useState } from "react";

export const useToggleMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    isMenuOpen,
    onClickMenu,
  };
};
