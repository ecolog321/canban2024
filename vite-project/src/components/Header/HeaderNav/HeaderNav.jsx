import HeaderButtonNew from "./HeaderButtonNew/HeaderButtonNew.jsx";
import HeaderHref from "./HeaderHref/HeaderHref.jsx";
import PopupUser from "../../Popups/PopupUser/PopupUser.jsx";
import { useState } from "react";

function HeaderNav() {

  const [showPopup, setShowPopup] = useState(false);

  const TooglePopup = () => setShowPopup(!showPopup);

  return (
    <nav className="header__nav">
      <HeaderButtonNew />
      <HeaderHref TooglePopup={TooglePopup}/>
      <PopupUser />
    </nav>
  );
}

export default HeaderNav;
