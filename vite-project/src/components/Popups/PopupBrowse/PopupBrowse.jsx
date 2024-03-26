import { BtnBrowse } from "./BtnBrowse/BtnBrowse"
import { BtnEdit } from "./BtnEdit/BtnEdit"
import { Status } from "./Status/Status"
import { ThemeCategories } from "./ThemeCategories/ThemeCategories"
import { TopBlock } from "./TopBlock/TopBlock"
import { Wrap } from "./Wrap/Wrap"

export const PopupBrowse=()=>{
    return  <div className="pop-browse" id="popBrowse">
                <div className="pop-browse__container">
                    <div className="pop-browse__block">
                        <div className="pop-browse__content">
                            <TopBlock/>
                            <Status/>
                            <Wrap/>
                            <ThemeCategories/>
                            <BtnBrowse/>
                            <BtnEdit/>
                        </div>
                    </div>
                </div>
            </div>
}