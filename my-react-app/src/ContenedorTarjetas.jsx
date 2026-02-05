import './ContenedorTarjetas.css';
import valentineTarj from './assets/valentineTarj.jpg';
function ContenedorTarjetas(){
    return(
        <div className="ContenedorTarjetas">
            <div className="tarjetasWrapper">
                <div className="contenedorHorizontal">
                    <div className="tarjetas">
                        <Tarjeta />
                        <Tarjeta />
                        <Tarjeta />
                        <Tarjeta />
                    </div>
                </div>
            </div>
        </div>
    );
}
function Tarjeta(){
    return(
        <div className="tarjeta">
            <img src={valentineTarj} alt="valentineTarj" />
            <h3>Esta es una tarjeta</h3>
            <p>Aqui va el texto</p>
            
        </div>
    );
}
export default ContenedorTarjetas;