import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "350px"
};

function MapaGeolocalizacion() {
  const [ubicacion, setUbicacion] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!apiKey) {
      setError("API Key no configurada");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUbicacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        console.error(error);
        setError("No se pudo obtener la ubicación");
      },
      { enableHighAccuracy: true }
    );
  }, [apiKey]);

  if (error) {
    return <div style={{padding: '20px', background: '#f0f0f0', borderRadius: '8px', textAlign: 'center'}}>
      ⚠️ {error}
    </div>;
  }

  return (
    <LoadScript googleMapsApiKey={apiKey || "dummy"}>
      {ubicacion && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={ubicacion}
          zoom={15}
        >
          <Marker position={ubicacion} />
        </GoogleMap>
      )}
    </LoadScript>
  );
}

export default MapaGeolocalizacion;
