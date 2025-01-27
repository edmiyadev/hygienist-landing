export const HamburgerMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <>
      <div className={`hamburger is-md ${isMenuOpen && "is-active"} `}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
    </>
  );
};
