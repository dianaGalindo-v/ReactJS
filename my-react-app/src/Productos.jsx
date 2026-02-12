import './Productos.css';

// importar imágenes
import bandolera from './assets/bandolera.jpg';
import blackMini from './assets/blackMini.jpeg';
import blackSL from './assets/blackSL.jpeg';
import elegante from './assets/elegante.jpeg';
import longvoyage from './assets/longvoyage.jpg';
import lookUrbano from './assets/lookUrbano.jpeg';
import minimal from './assets/minimal.jpeg';
import whiteElegant from './assets/whiteElegant.jpeg';
import whiteMini from './assets/whiteMini.jpeg';
import charles from './assets/charles.jpg';
import wineJwpei from './assets/wineJwpei.jpeg';
import wine from './assets/wine.jpg';
import wineOval from './assets/wineOval.jpeg';
import wineAsimetric from './assets/wineAsimetric.jpeg';
import jwpei from './assets/jwpei.jpg';

function Productos() {
    const productos = [
        { img: bandolera, nombre: 'Bandolera' },
        { img: blackMini, nombre: 'Black Mini' },
        { img: blackSL, nombre: 'Saint Laurent Black' },
        { img: elegante, nombre: 'Elle' },
        { img: longvoyage, nombre: 'Longvoyage' },
        { img: lookUrbano, nombre: 'Black & Wine' },
        { img: minimal, nombre: 'Mini Min' },
        { img: whiteElegant, nombre: 'Soft White' },
        { img: whiteMini, nombre: 'White Square' },
        { img: charles, nombre: 'Charles & Keith'},
        { img: wineJwpei, nombre: 'JwPei wine' },
        { img: wine, nombre: 'Genevive' },
        { img: wineOval, nombre: 'Wine Oval' },
        { img: wineAsimetric, nombre: 'Lips Asimetric' },
        { img: jwpei, nombre: 'Red JwPei' },
    ];

    return (
        <div className="vista">
            <h2>Nuestros Productos</h2>
            <p className="descripcion">
                Explora nuestra colección de bolsos diseñados para acompañarte
                con estilo en cualquier momento.
            </p>

            <div className="productosGrid">
                {productos.map((producto, index) => (
                    <div className="productoCard" key={index}>
                        <img src={producto.img} alt={producto.nombre} />
                        <h3>{producto.nombre}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;

