import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // choose background image based on weather
  const getBackground = () => {
    if (!weather) return "/images/default.jpg";
    const main = weather.weather?.[0]?.main?.toLowerCase() || "";

    if (main.includes("clear")) return "/images/clear.jpg";
    if (main.includes("cloud")) return "/images/cloudy.jpg";
    if (main.includes("rain")) return "/images/rainy.jpg";
    if (main.includes("mist")) return "/images/mist.jpg";
    if (main.includes("snow")) return "/images/snow.jpg";
    if (main.includes("thunder")) return "/images/thunder.jpg";

    return "/images/default.jpg";
  };

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) {
      setErrorMsg("Enter a city name");
      return;
    }

    setErrorMsg("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        if (res.status === 404) throw new Error("City not found");
        throw new Error("Failed to fetch weather");
      }

      const data = await res.json();
      setWeather(data);
    } catch (error) {
      setErrorMsg(error.message || "Something went wrong");
    }
  };

    return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${getBackground()})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
        <div className="overlay">
          <SearchBar
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onSubmit={fetchWeather}
          />

          {errorMsg && <div className="error">{errorMsg}</div>}

          {weather && <WeatherCard weather={weather} />}
        </div>
        </div>
        );
}