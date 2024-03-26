import { cards } from "../../data";
import { Column } from "../Column/Column";

export const Main = () => {
  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  /* const [tasks, setTasks] = useState(cards); */

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status, index) => 
              <Column
              key={index}
              status={status}
              taskList={cards.filter((card)=>card.status===status)}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
