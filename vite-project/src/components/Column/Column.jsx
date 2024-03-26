import { Card } from "../Card/Card"

export const Column=({title, taskList})=>{

    
    return (
        <div className="main__column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                {taskList.map((task)=> <Card key={task.id} {...task}/>)}
            </div>
        </div>
        
    )
   
}