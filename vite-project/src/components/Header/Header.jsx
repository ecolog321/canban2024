import HeaderLogoLight from "./HeaderLogo/HeaderLogoLight";
import HeaderLogoDark from "./HeaderLogo/HeaderLogoDark";
import HeaderNav from "./HeaderNav/HeaderNav";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
        <HeaderLogoLight />
        <HeaderLogoDark />
        <HeaderNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
