import { useState } from "react";
import "./Login.css";
import api from "./Services/Api";
import { useAuth } from "./AuthContext";

function Login() {
  const { login } = useAuth();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setError("");

      const response = await api.post("/auth/login", {
        username,
        password
      });

      const token = response.data.token;

      // usamos el contexto
      login(token);

      console.log("Token:", token);

      alert("Login exitoso");

    } catch (err) {

      console.error("Error en login:", err);

      setError("Usuario o contraseña incorrecta");

    }
  };

  const registrarUsuario = () => {

    if (!username || !password) {
      alert("Ingresa usuario y contraseña para registrar");
      return;
    }

    const nuevoUsuario = {
      username,
      password
    };

    const usuariosGuardados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    usuariosGuardados.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

    console.log("Usuarios registrados:", usuariosGuardados);

    alert("Usuario registrado correctamente");

    setUsername("");
    setPassword("");
  };

  return (
    <section className="login">

      <h2 className="login__titulo">Iniciar Sesión</h2>

      <form className="login__form" onSubmit={handleLogin}>

        <label>Usuario</label>
        <input
          type="text"
          placeholder="Ingresa tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="login-error">{error}</p>}

        <button
          type="submit"
          className="login__btn login__btn--acceder"
        >
          Acceder
        </button>

        <div className="login__extra">

          <button
            type="button"
            className="login__btn login__btn--secundario"
            onClick={registrarUsuario}
          >
            Crear cuenta
          </button>

          <button
            type="button"
            className="login__btn login__btn--secundario"
          >
            Recuperar contraseña
          </button>

        </div>

      </form>

    </section>
  );
}

export default Login;