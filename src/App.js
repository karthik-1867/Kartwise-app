import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import '../src/app.css'


function App() {
  return (
    <div className="AppContainer">
      <Navbar/>
      <div className="Container">
        <Menu/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
