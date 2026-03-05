// LoginForm.jsx
import { useState } from "react";
import './LoginForm.css';

function LoginForm() {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Por ahora solo mostramos en consola
        console.log("Usuario:", usuario);
        console.log("Contraseña:", contrasena);
        alert("Login simulado");
    };

    const handleCrearCuenta = () => {
        alert("Redirigir a Crear Cuenta");
    };

    const handleRecuperarContrasena = () => {
        alert("Redirigir a Recuperar Contraseña");
    };

    return (
        <div className="login-section">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin} className="login-form">
                <label>Usuario</label>
                <input
                    type="text"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    placeholder="Usuario"
                    required
                />

                <label>Contraseña</label>
                <input
                    type="password"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    placeholder="Contraseña"
                    required
                />

                <button type="submit">Acceder</button>
            </form>

            <div className="login-options">
                <button onClick={handleCrearCuenta}>Crear Cuenta</button>
                <button onClick={handleRecuperarContrasena}>Recuperar Contraseña</button>
            </div>
        </div>
    );
}

export default LoginForm;