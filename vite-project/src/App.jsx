import "./App.css";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { PopNewCard } from "./components/Popups/PopNewCard/PopNewCard";
import { PopupBrowse } from "./components/Popups/PopupBrowse/PopupBrowse";
import { PopupExit } from "./components/Popups/PopupExit/PopupExit";
import { useState,useEffect } from "react";
import { cards } from "./data";

function App() {

  const[tasks,setTaskList]=useState(cards)
  const[isLoading, setIsLoading]=useState(true)

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 1500);
  },[])
 
  return (
    <>
      <div className="wrapper">
        <PopupExit />

        <PopNewCard tasks={tasks} setTaskList={setTaskList} />

        <PopupBrowse />

        <Header />

        <Main cards={tasks} isLoading={isLoading}/>
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
