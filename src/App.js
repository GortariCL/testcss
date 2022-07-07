import "./App.css";
import Elipse from "./assets/a.svg";
import Conjunto from "./assets/b.svg";

function App() {
  return (
    <div className="app">
      <nav>el nav </nav>
      <div className="container">
        <div className="container-1">
          <div className="container-1__img">
            <img src={Elipse} alt="pepe" />
          </div>

          <div className="container-1__text">
            <h6>Invita a quien tu quieras</h6>
            <h3>Crea tus eventos</h3>
            <p>Organiza y diseña sadfojiasfdiojdsaf </p>
          </div>
        </div>

        <div className="container-2">2</div>
        <div className="container-3">3</div>
      </div>
    </div>
  );
}

export default App;
