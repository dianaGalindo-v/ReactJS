import miLogo from './assets/logo.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import gmail from './assets/gmail.png';
import tiktok from './assets/tik-tok.png';
import './Encabezado.css';
function Encabezado(){
    return (
        <div className="Encabezado">
            <Logo />
            <Menu />
            <Redes />
            <h2></h2>
        </div>
    );
}

function Logo(){
    return (
        <div className="LogoDiv">
            <img src={miLogo} alt="React Logo" />
        </div>
    );
}


function Menu(){
    return (
        <div className="MenuNav">
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Acerca de</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Contacto</a></li>
                <li><a href='#'>Sucursales</a></li>
            </ul>
        </div>    
        );
}

function Redes(){
    return (
        <div className="RedesDiv">
            <ul>
                <li><a href='#'><img src={facebook} alt="Facebook" /></a></li> 
                <li><a href='#'><img src={instagram} alt="Instagram" /></a></li>
                <li><a href='#'><img src={gmail} alt="Gmail" /></a></li>
                <li><a href='#'><img src={tiktok} alt="TikTok" /></a></li>
            </ul>
        </div>
    );
}
export default Encabezado