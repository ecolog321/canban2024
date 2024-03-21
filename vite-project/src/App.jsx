import "./App.css";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { PopNewCard } from "./components/Popups/PopNewCard/PopNewCard";
import { PopupBrowse } from "./components/Popups/PopupBrowse/PopupBrowse";
import { PopupExit } from "./components/Popups/PopupExit/PopupExit";


function App() {
  return (
   <>

<div className="wrapper">
		
		<PopupExit/>

		<PopNewCard/>
		
		<PopupBrowse/>
		
		<Header/>

		<Main/>
		
    </div>

    <script src="js/script.js"></script>

   </>  
 )
  }

export default App;
