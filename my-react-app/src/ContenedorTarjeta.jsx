import '.src/ContenedorTarjeta.css';
import valentineTarj from './assets/valentineTarj';
function ContenedorTarjeta(){
    return(
        <div className="ContenedorTarjeta">
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
        <div className="Tarjeta">
            <img src={valentineTarj} alt="valentineTarj" />
            <h3>Esta es una tarjeta</h3>
            <p>Aqui va el texto</p>
            
        </div>
    );
}
export default ContenedorTarjeta;