export const HamburgerMenu = ({ navActive }) => {
  return (
    <>
      <div className={`hamburger is-md ${navActive && "is-active"} `}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </div>
    </>
  );
};
