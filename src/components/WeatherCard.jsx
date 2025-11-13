import React from "react";

export default function WeatherCard({ weather, units = "metric" }) {
  if (!weather) return null;
  const desc = weather.weather?.[0]?.description || "";
  const main = weather.weather?.[0]?.main || "";

  return (
    <div className="card" role="region" aria-label="Current weather">
      <h2 className="city">
        {weather.name}, <span className="country">{weather.sys?.country}</span>
      </h2>

      <div className="temp-section">
        <h1 className="temp">{Math.round(weather.main.temp)}°</h1>

        <div className="cond">
          <div className="main">{main}</div>
          <div className="desc">{desc}</div>
        </div>
      </div>

      <div className="meta-row">
        <div className="meta">
          <div className="label">Feels</div>
          <div className="value">{Math.round(weather.main.feels_like)}°{units === "metric" ? "C" : "F"}</div>
        </div>

        <div className="meta">
          <div className="label">Humidity</div>
          <div className="value">{weather.main.humidity}%</div>
        </div>

        <div className="meta">
          <div className="label">Wind</div>
          <div className="value">{weather.wind.speed} {units === "metric" ? "m/s" : "mph"}</div>
        </div>
      </div>
    </div>
  );
}
