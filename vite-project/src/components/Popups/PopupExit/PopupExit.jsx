import { PopExitForm } from "./PopExitForm/PopExitForm";

export function PopupExit() {
    return (
        <div className="pop-exit" id="popExit">
            <div className="pop-exit__container">
                <div className="pop-exit__block">
                    <div className="pop-exit__tt1">
                        <h2>Выйти из аккаунта?</h2>
                    </div>
                    <PopExitForm/>
                </div>
            </div>
        </div>
    )    
}