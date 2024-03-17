import UserName from "./UserName"
import UserEmail from "./UserEmail"
import UserTheme from "./UserTheme"
import UserButton from "./UserButton"

function PopupUser () {
    return (
        <div>
        <UserName/>
        <UserEmail/>
        <UserTheme/>
        <UserButton/>
        </div>
    )
}

export default PopupUser;