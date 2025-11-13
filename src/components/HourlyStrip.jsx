import React from "react";

export default function HourlyStrip({ hourly, units }) {
  if (!hourly || !hourly.length) return null;

  // show next 12 hours
  const slice = hourly.slice(0, 12);

  return (
    <div className="hourly-strip">
      {slice.map((h, idx) => {
        const date = new Date(h.dt * 1000);
        const hour = date.getHours();
        const temp = Math.round(h.temp);
        const icon = h.weather?.[0]?.main?.toLowerCase() || "clear";
        return (
          <div className="hour-card" key={idx}>
            <div className="hour-time">{hour}:00</div>
            <img src={`/images/${mapIcon(icon)}`} alt={icon} />
            <div className="hour-temp">{temp}°{units === "metric" ? "C" : "F"}</div>
          </div>
        );
      })}
    </div>
  );
}

function mapIcon(main) {
  // return one of your existing filenames, fallback to default.jpg
  if (main.includes("clear")) return "clear.jpg";
  if (main.includes("cloud")) return "cloudy.jpg";
  if (main.includes("rain")) return "rainy.jpg";
  if (main.includes("mist")) return "mist.jpg";
  if (main.includes("snow")) return "snow.jpg";
  if (main.includes("thunder")) return "thunder.jpg";
  return "default.jpg";
}
