import './ContenedorTarjetas.css';

// imágenes
import bandolera from './assets/bandolera.jpg';
import wine from './assets/wine.jpg';
import longvoyage from './assets/longvoyage.jpg';
import jwpei from './assets/jwpei.jpg';
import fondoBolso from './assets/fondo-bolso.jpg';

// vistas
import Galeria from './Galeria';
import Productos from './Productos';
import Contactos from './Contactos';
import Sucursales from './Sucursales';
import AcercaDe from './AcercaDe';

function ContenedorTarjetas({ vista }) {

    const vistas = {
        "Galeria": <Galeria />,
        "Productos": <Productos />,
        "Contactos": <Contactos />,
        "Sucursales": <Sucursales />,
        "AcercaDe": <AcercaDe />
    };

    // 👉 SI NO ES INICIO, MOSTRAMOS OTRA VISTA
    if (vista !== "Inicio") {
        return (
            <div className="vistaExtra">
                {vistas[vista]}
            </div>
        );
    }

    // 👉 INICIO (tarjetas + promociones)
    return (
        <div className="ContenedorTarjetas">

            {/* Fondo */}
            <div
                className="fondoImagen"
                style={{ backgroundImage: `url(${fondoBolso})` }}
            ></div>

            {/* TARJETAS */}
            <div className="tarjetasWrapper">
                <div className="tarjetas">
                    <Tarjeta imagen={bandolera} titulo="Bandolera" texto="Diseño minimalista en tendencia" />
                    <Tarjeta imagen={wine} titulo="Wine" texto="Ideal para ocasiones especiales" />
                    <Tarjeta imagen={longvoyage} titulo="Longvoyage" texto="Espaciosa y elegante" />
                    <Tarjeta imagen={jwpei} titulo="JW Pei" texto="Estilo urbano" />
                </div>
            </div>
        </div>
    );
}

function Tarjeta({ imagen, titulo, texto }) {
    return (
        <div className="tarjeta">
            <img src={imagen} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    );
}

export default ContenedorTarjetas;




