import HeaderLogoLight from "./HeaderLogo/HeaderLogoLight";
import HeaderLogoDark from "./HeaderLogo/HeaderLogoDark";
import HeaderNav from "./HeaderNav/HeaderNav";

function Header () {
    return (
        <header className="header">
            <div className="header__block">
                <div className="header__logo_show_light">
                    <HeaderLogoLight/>
                </div>
                <div className="header__logo_show_dark">
                    <HeaderLogoDark/>
                </div>
                <nav className="header__nav">
                    <HeaderNav/>
                </nav>
            </div>
        </header>
    )
}

export default Header;