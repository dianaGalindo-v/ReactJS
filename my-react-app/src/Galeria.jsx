import './Galeria.css';
import lookUrbano from './assets/lookUrbano.jpeg';
import elegante from './assets/elegante.jpeg';
import minimal from './assets/minimal.jpeg';


function Galeria() {
    return (
        <div className="vista">
            <h2>Galería</h2>
            <p>Nuestros bolsos en diferentes estilos y momentos.</p>

            <div className="galeriaGrid">
                <div className="foto">
                    <img src={lookUrbano} alt="Look urbano" />
                    <span>Look urbano</span>
                </div>

                <div className="foto">
                    <img src={elegante} alt="Estilo elegante" />
                    <span>Estilo elegante</span>
                </div>

                <div className="foto">
                    <img src={minimal} alt="Minimal aesthetic" />
                    <span>Minimal aesthetic</span>
                </div>
            </div>
        </div>
    );
}

export default Galeria;
