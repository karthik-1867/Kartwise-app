import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import '../src/app.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Fav from "./pages/fav/Fav";
import CreateExpenseSheet from "./pages/createExpenseSheet/CreateExpenseSheet";
import CreateExpense from "./pages/createExpenseGroup/CreateExpense";


function App() {
  return (
    <div className="AppContainer">
      <BrowserRouter>
        <Navbar/>
        <div className="Container">
          <Menu/>
          <div className="Homecontainer">
          <Routes>
            <Route path="/">
               <Route index element={<Home/>}/>
               <Route path="/fav" element={<Fav/>}/>
               <Route path="/expenseGroup" element={<CreateExpense/>}/>
               <Route path="/expenseSheet" element={<CreateExpenseSheet/>}/>
            </Route>
          </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
