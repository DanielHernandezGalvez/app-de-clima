import hotBg from "./assets/calor.jpg";
import coldBg from "./assets/frio.jpg";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Ciudad..." />
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>Zapopan, Jal</h3>
              <img
                src="https://openweathermap.org/img/wn/02d@2x.png"
                alt="icono clima"
              />
              <h3>Nublado</h3>
              <div className="temperature">
                <h1>34 °C</h1>
              </div>
            </div>
            {/* bodon description */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
