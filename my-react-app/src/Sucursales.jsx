import './Sucursales.css';

function Sucursales() {

    const sucursales = [
        {
            nombre: "Ciudad de México",
            direccion: "Av. Reforma 123, Centro",
            telefono: "(55) 1234 5678",
            lat: 19.4326,
            lng: -99.1332
        },
        {
            nombre: "Guadalajara",
            direccion: "Av. Vallarta 456, Zona Norte",
            telefono: "(33) 9876 5432",
            lat: 20.6597,
            lng: -103.3496
        },
        {
            nombre: "Monterrey",
            direccion: "Paseo Santa Lucía 789",
            telefono: "(81) 4567 8901",
            lat: 25.6866,
            lng: -100.3161
        },
        {
            nombre: "Querétaro",
            direccion: "Plaza de Armas",
            telefono: "(44) 2139 6468",
            lat: 20.5888,
            lng: -100.3899
        }
    ];

    return (
        <div className="sucursalesContainer">

            <h2 className="tituloSucursales">Nuestras Sucursales</h2>

            <p className="introSucursales">
                Visítanos y vive la experiencia de nuestra colección en persona.
                Descubre nuestros diseños exclusivos y recibe asesoría personalizada.
            </p>

            <div className="sucursalesGrid">

                {sucursales.map((sucursal, index) => (
                    <div className="sucursalCard" key={index}>

                        <h3>{sucursal.nombre}</h3>
                        <p>📍 {sucursal.direccion}</p>
                        <p>📞 {sucursal.telefono}</p>
                        <p>🕒 Lunes a Viernes: 10:00 am – 8:00 pm</p>
                        <p>🕒 Sábados: 11:00 am – 6:00 pm</p>

                        <div style={{
                            marginTop: '10px',
                            padding: '10px',
                            background: '#f0f0f0',
                            borderRadius: '5px',
                            fontSize: '12px'
                        }}>
                            📌 Coordenadas: {sucursal.lat.toFixed(4)}, {sucursal.lng.toFixed(4)}
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Sucursales;



