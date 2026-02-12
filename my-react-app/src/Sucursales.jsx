import './Sucursales.css';

function Sucursales() {
    return (
        <div className="sucursalesContainer">

            <h2 className="tituloSucursales">Nuestras Sucursales</h2>

            <p className="introSucursales">
                Visítanos y vive la experiencia de nuestra colección en persona.
                Descubre nuestros diseños exclusivos y recibe asesoría personalizada.
            </p>

            <div className="sucursalesGrid">

                <div className="sucursalCard">
                    <h3>Ciudad de México</h3>
                    <p>📍 Av. Reforma 123, Centro</p>
                    <p>📞 (55) 1234 5678</p>
                    <p>🕒 Lunes a Viernes: 10:00 am – 8:00 pm</p>
                    <p>🕒 Sábados: 11:00 am – 6:00 pm</p>
                </div>

                <div className="sucursalCard">
                    <h3>Guadalajara</h3>
                    <p>📍 Av. Vallarta 456, Zona Norte</p>
                    <p>📞 (33) 9876 5432</p>
                    <p>🕒 Lunes a Viernes: 10:00 am – 8:00 pm</p>
                    <p>🕒 Sábados: 11:00 am – 6:00 pm</p>
                </div>

                <div className="sucursalCard">
                    <h3>Monterrey</h3>
                    <p>📍 Paseo Santa Lucía 789</p>
                    <p>📞 (81) 4567 8901</p>
                    <p>🕒 Lunes a Viernes: 10:00 am – 8:00 pm</p>
                    <p>🕒 Sábados: 11:00 am – 6:00 pm</p>
                </div>

                <div className="sucursalCard">
                    <h3>Queretaro</h3>
                    <p>📍 Plaza de Armas</p>
                    <p>📞 (44) 2139 6468</p>
                    <p>🕒 Lunes a Viernes: 10:00 am – 8:00 pm</p>
                    <p>🕒 Sábados: 11:00 am – 6:00 pm</p>
                </div>
            </div>

        </div>
    );
}

export default Sucursales;


