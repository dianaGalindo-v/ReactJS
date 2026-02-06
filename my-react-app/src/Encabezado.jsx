import logoBag from './assets/logoBag.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import gmail from './assets/gmail.png';
import tiktok from './assets/tik-tok.png';
import './Encabezado.css';
function Encabezado({cambiarVista}){ 
        return (
        <div className="Encabezado">
            <Logo />
            <Menu cambiarVista={cambiarVista} />
            <Redes />
        </div>
    );
}

function Logo(){
    return (
        <div className="LogoDiv">
            <img src={logoBag} alt="React Logo" />
        </div>
    );
}


function Menu({cambiarVista}){
    return (
        <div className="MenuDiv">
            <ul>
                <li onClick={()=> cambiarVista("Inicio")}><a href='#'>Inicio</a></li>
                <li onClick={()=> cambiarVista("AcercaDe")}><a href='#'>Acerca de</a></li>
                <li onClick={()=> cambiarVista("Productos")}><a href='#'>Productos</a></li>
                <li onClick={()=> cambiarVista("Galeria")}><a href='#'>Galeria</a></li>
                <li onClick={()=> cambiarVista("Contacto")}><a href='#'>Contacto</a></li>
                <li onClick={()=> cambiarVista("Sucursales")}><a href='#'>Sucursales</a></li>
            </ul>
        </div>    
    );
}

function Redes(){
    return (
        <div className="RedesDiv">
            <ul>
                <li className="redes"> <a href='#'> <img src={facebook} alt="Facebook" /></a></li> 
                <li className="redes"> <a href='#'> <img src={instagram} alt="Instagram" /></a></li>
                <li className="redes"> <a href='#'> <img src={gmail} alt="Gmail" /></a></li>
                <li className="redes"> <a href='#'> <img src={tiktok} alt="TikTok" /></a></li>
            </ul>
        </div>
    );
}
export default Encabezado;