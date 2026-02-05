import './ContenedorTarjetas.css';
import bandolera from './assets/bandolera.jpg';
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
            <img src={bandolera} alt="bandolera" />
            <h3>Bandolera</h3>
            <p>Aqui va el texto</p>
            
        </div>
    );
}
export default ContenedorTarjetas;