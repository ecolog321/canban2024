import { Cards } from "../Card/Card"

export const Column=()=>{
    return (
        <div className="main__column">
            <div className="column__title">
                <p>Без статуса</p>
            </div>
            <div className="cards">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            </div>
        </div>
    )
   
}