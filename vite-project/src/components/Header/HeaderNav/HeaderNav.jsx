import HeaderButtonNew from "./HeaderButtonNew/HeaderButtonNew.jsx"
import HeaderHref from "./HeaderHref/HeaderHref.jsx"
import PopupUser from "C:/Users/Дмитрий/Desktop/Учеба/skypro/app2024/canban2024/vite-project/src/components/Popups/PopupUser"

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
