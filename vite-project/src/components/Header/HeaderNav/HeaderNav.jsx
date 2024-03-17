import HeaderButtonNew from "./HeaderButtonNew/HeaderButtonNew.jsx"
import HeaderHref from "./HeaderHref/HeaderHref.jsx"
import PopupUser from "../../Popups/PopupUser/PopupUser.jsx"

function HeaderNav() {
  return(
	<nav className="header__nav">
    <HeaderButtonNew/>
    <HeaderHref/>
    <PopupUser/>
  </nav>
  )
}

export default HeaderNav;
