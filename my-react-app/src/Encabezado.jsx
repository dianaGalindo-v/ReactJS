import { useState } from "react";
import logoBag from './assets/logoBag.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import gmail from './assets/gmail.png';
import tiktok from './assets/tik-tok.png';
import './Encabezado.css';
import Clima from './Clima';
import LoginForm from './LoginForm'; // asegúrate que la ruta sea correcta

function Encabezado({ setVista }) {
    const [mostrarLogin, setMostrarLogin] = useState(false);

    return (
        <div className="Encabezado">
            <Logo />
            <Menu setVista={setVista} setMostrarLogin={setMostrarLogin} />
            <Redes />
            {mostrarLogin && <LoginForm cerrar={() => setMostrarLogin(false)} />}
        </div>
    );
}

function Logo() {
    return (
        <div className="LogoDiv">
            <img src={logoBag} alt="React Logo" />
        </div>
    );
}

function Menu({ setVista, setMostrarLogin }) {
    return (
        <div className="MenuDiv">
            <ul>
                <li onClick={() => setVista("Inicio")}>Inicio</li>
                <li onClick={() => setVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => setVista("Galeria")}>Galería</li>
                <li onClick={() => setVista("Sucursales")}>Sucursales</li>
                <li onClick={() => setVista("Productos")}>Productos</li>
                <li onClick={() => setVista("Carrito")}>Carrito</li>
                <li onClick={() => setVista("Usuarios")}>Usuarios</li>
                <li onClick={() => setVista("Contactos")}>Contactos</li>
                <li onClick={() => setVista("Login")}>Login</li>
            </ul>
        </div>
    );
}

function Redes() {
    return (
        <div className="RedesDiv">
            <ul>
                <li><img src={facebook} alt="Facebook" /></li> 
                <li><img src={instagram} alt="Instagram" /></li>
                <li><img src={gmail} alt="Gmail" /></li>
                <li><img src={tiktok} alt="TikTok" /></li>
            </ul>
            <Clima />
        </div>
    );
}

export default Encabezado;