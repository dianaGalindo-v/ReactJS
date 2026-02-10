import logoBag from './assets/logoBag.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import gmail from './assets/gmail.png';
import tiktok from './assets/tik-tok.png';
import './Encabezado.css';

function Encabezado({setVista}){ 
        return (
        <div className="Encabezado">
            <Logo />
            <Menu setVista={setVista} />
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


function Menu({ setVista }) {
    return (
        <div className="MenuDiv">
            <ul>
                <li onClick={() => setVista("Inicio")}>Inicio</li>
                <li onClick={() => setVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => setVista("Productos")}>Productos</li>
                <li onClick={() => setVista("Galeria")}>Galería</li>
                <li onClick={() => setVista("Contactos")}>Contactos</li>
                <li onClick={() => setVista("Sucursales")}>Sucursales</li>
            </ul>
        </div>
    );
}


function Redes(){
    return (
        <div className="RedesDiv">
            <ul>
                <li><img src={facebook} alt="Facebook" /></li> 
                <li><img src={instagram} alt="Instagram" /></li>
                <li><img src={gmail} alt="Gmail" /></li>
                <li><img src={tiktok} alt="TikTok" /></li>
            </ul>
        </div>
    );
}
export default Encabezado;