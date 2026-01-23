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
            <h2>Bienvenido a mi sitio</h2>
        </div>
    );
}

function Logo(){
    return (
        <div className="Logo">
            <img src={miLogo} alt="React Logo" />
        </div>
    );
}


function Menu(){
    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </nav>
    );
}

function Redes(){
    return (
        <nav>
            <ul>
                <li><img src={facebook} alt="Facebook" /></li> 
                <li><img src={instagram} alt="Instagram" /></li>
                <li><img src={gmail} alt="Gmail" /></li>
                <li><img src={tiktok} alt="TikTok" /></li>
            </ul>
        </nav>
    );
}
export default Encabezado