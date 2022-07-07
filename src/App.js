import "./App.css";
import Elipse from "./assets/a.svg";
import Conjunto from "./assets/b.svg";

function App() {
  return (
    <div className="app">
      <nav>el nav </nav>
      <div className="container">
        <div className="container-1">
          <div className="container-1__1">
            <img className="elipse-img" src={Elipse} alt="pepe" /> 
          </div>
          <div className="container-1__2"></div>
        </div>

        <div className="container-2">
          
        </div>
        <div className="container-3">3</div>
      </div>
    </div>
  );
}

export default App;
