import './ContenedorTarjetas.css';

// imágenes de tarjetas
import bandolera from './assets/bandolera.jpg';
import wine from './assets/wine.jpg';
import longvoyage from './assets/longvoyage.jpg';
import jwpei from './assets/jwpei.jpg';

// fondo
import fondoBolso from './assets/fondo-bolso.jpg';

function ContenedorTarjetas() {
    return (
        <div className="ContenedorTarjetas">

            {/* Fondo detrás de las tarjetas */}
            <div
                className="fondoImagen"
                style={{ backgroundImage: `url(${fondoBolso})` }}
            ></div>

            {/* ===== TARJETAS ===== */}
            <div className="tarjetasWrapper">
                <div className="contenedorHorizontal">
                    <div className="tarjetas">

                        <Tarjeta
                            imagen={bandolera}
                            titulo="Bandolera"
                            texto="Diseño minimalista en tendencia"
                        />

                        <Tarjeta
                            imagen={wine}
                            titulo="Wine"
                            texto="Ideal para ocasiones especiales"
                        />

                        <Tarjeta
                            imagen={longvoyage}
                            titulo="Longvoyage"
                            texto="Espaciosa y elegante para el día a día"
                        />

                        <Tarjeta
                            imagen={jwpei}
                            titulo="JW Pei"
                            texto="Comodidad con estilo urbano"
                        />

                    </div>
                </div>
            </div>

            {/* ===== PROMOCIONES ===== */}
            <div className="promoSection">

                <div
                    className="promoBackground"
                    style={{ backgroundImage: `url(${fondoBolso})` }}
                ></div>

                <div className="promoContent">
                    <h2>Promociones especiales</h2>
                    <p>
                        Descubre nuestros bolsos con descuentos exclusivos
                        por tiempo limitado.
                    </p>
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


