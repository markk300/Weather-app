import React, { useState } from "react";
import "./App.css";

function App() {
  const apikey = "1d5654462c8b7f7b99046314695b91ee";
  const [wetherData, setWetherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWether = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWetherData(data);
          setCity("");
        });
    }
  };
  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        className="input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWether}
      />
      <div className="list">
        {typeof wetherData.main === "undefined" ? (
          <div>
            <p>Welcome to wether app. Emter your city.</p>
          </div>
        ) : (
          <div className="resultlist">
            <p className="cityname">{wetherData.name}</p>
            <p className="temp">{Math.round(wetherData.main.temp)}°C</p>
            <p className="wether">{wetherData.weather[0].main}</p>
          </div>
        )}
        {wetherData.cod==="404" ? (<p>City not found</p>) : (<p></p>)}
      </div>
    </div>
  );
}

export default App;
