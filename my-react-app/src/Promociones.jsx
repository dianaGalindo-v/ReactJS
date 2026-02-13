import './Promociones.css';
import MapaGeolocalizacion from './MapaGeolocalizacion';

function Promociones() {
    return (
        <div className="promoContent">
            <h2>Promociones especiales</h2>
            <p>Descuentos exclusivos por tiempo limitado.</p>
            <MapaGeolocalizacion/>
        </div>
    );
}

export default Promociones;
