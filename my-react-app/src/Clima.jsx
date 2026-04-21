import { useEffect, useState } from "react";
import "./Clima.css";

function Clima() {
  const [clima, setClima] = useState(null);
  const [error, setError] = useState(false);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const lat = 20.27815436789821;
  const lng = -97.95916073755724;

  useEffect(() => {
    if (!API_KEY) {
      setError(true);
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`
    )
      .then((res) => res.json())
      .then((data) => {
        setClima(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
      });
  }, [API_KEY]);

  return (
    <div className="divClima">
      {error ? (
        <div className="cargando">⛅ Sin clima</div>
      ) : clima ? (
        <>
          <div className="tempPrincipal">
            {Math.round(clima.main.temp)}°C
          </div>

          <div className="ciudad">
            {clima.name}
          </div>

          <div className="detalles">
            💧 {clima.main.humidity}% | {clima.weather[0].description}
          </div>
        </>
      ) : (
        <div className="cargando">⛅ Cargando...</div>
      )}
    </div>
  );
}

export default Clima;