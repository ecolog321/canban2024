import UserName from "./UserName"
import UserEmail from "./UserEmail"
import UserTheme from "./UserTheme"
import UserButton from "./UserButton"

function PopupUser () {
    return (
        <div className="header__pop-user pop-user-set" id="user-set-target">
        <UserName/>
        <UserEmail/>
        <UserTheme/>
        <UserButton/>
        </div>
    )
}

export default PopupUser;