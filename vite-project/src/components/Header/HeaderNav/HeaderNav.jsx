import HeaderButtonNew from "./HeaderButtonNew/HeaderButtonNew.jsx";
import HeaderHref from "./HeaderHref/HeaderHref.jsx";
import PopupUser from "../../Popups/PopupUser/PopupUser.jsx";
import { useState } from "react";

function HeaderNav() {
  const [showPopup, setShowPopup] = useState(false);

  const tooglePopup = () => {
    return setShowPopup((prevState) => !prevState);
  };

  return (
    <nav className="header__nav">
      <HeaderButtonNew />
      <HeaderHref tooglePopup={(tooglePopup)} />
      {showPopup && <PopupUser />}
    </nav>
  );
}

export default HeaderNav;
