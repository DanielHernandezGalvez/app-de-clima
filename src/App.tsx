import hotBg from "./assets/calor.jpg";
import coldBg from "./assets/frio.jpg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getData } from "./wetherServices";

function App() {
  const [city, setCity] = useState("Zapopan");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(city, units);
      setWeather(data);

      const standar = units === "metric" ? 20 : 60;
      if (data.temp <= standar) setBg(coldBg);
      else setBg(hotBg);
    };

    fetchData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKey = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section__inputs">
              <input
                onKeyDown={enterKey}
                type="text"
                name="city"
                placeholder="Ciudad..."
              />
              <button onClick={(e) => handleUnitsClick(e)}>°F</button>
            </div>
            <div className="section sectionA section__temperature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconUrl} alt="icono clima" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  units === "metric" ? "C" : "F"
                }`}</h1>
              </div>
            </div>
            <Descriptions weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
