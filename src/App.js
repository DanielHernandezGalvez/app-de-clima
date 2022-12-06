import hotBg from "./assets/calor.jpg";
import coldBg from "./assets/frio.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getData } from "./wetherServices";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("paris");
      setWeather(data);
    };

    fetchData();
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input type="text" name="city" placeholder="Ciudad..." />
              <button>°F</button>
            </div>
            <div className="section section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconUrl} alt="icono clima" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  units === 'metric'
                 ? 'C' : 'F'}`}</h1>
              </div>
            </div>
            {/* bodon description */}
            <Descriptions weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
// minuto 49
