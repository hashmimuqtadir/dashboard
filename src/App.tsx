import Sidebar from "./components/sidebar/sidebar";
import "./App.css"
import {BrowserRouter as Router} from 'react-router-dom'
import Expenses from "./pages/Expenses/Expenses";

function App() {

  return (
    <>
     <Router>
      <Sidebar />
      <Expenses />
     </Router>
      
    </>
  );

}

export default App
