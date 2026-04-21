import { useState } from "react";
import "./Login.css";
import { useAuth } from "./AuthContext";
import { usuariosAPI } from "./Services/api";

function Login({ setVista }) {

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setError("");
      setCargando(true);

      const response = await usuariosAPI.login(email, password);

      const token = response.data.token;

      // usamos el contexto
      login(token);

      console.log("Login exitoso:", token);

      alert("✅ Login exitoso");
      setVista("Inicio");

    } catch (err) {

      console.error("Error en login:", err);

      const mensaje = err.response?.data?.message || "Email o contraseña incorrecta";
      setError(mensaje);

    } finally {
      setCargando(false);
    }
  };

  return (
    <section className="login">

      <h2 className="login__titulo">Iniciar Sesión</h2>

      <form className="login__form" onSubmit={handleLogin}>

        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          disabled={cargando}
        >
          {cargando ? "Cargando..." : "Acceder"}
        </button>

        <div className="login__extra">

          <button
            type="button"
            className="login__btn login__btn--secundario"
            onClick={() => setVista("Registro")}
          >
            Crear cuenta
          </button>

        </div>

      </form>

    </section>
  );
}

export default Login;