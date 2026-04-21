import { useState } from "react";
import "./Login.css";
import { usuariosAPI } from "./Services/api";

function Registro({ volverLogin }) {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const registrarCuenta = async (e) => {

    e.preventDefault();

    if (!nombre || !email || !password || !direccion || !telefono) {
      alert("⚠️ Completa todos los campos");
      return;
    }

    try {
      setError("");
      setCargando(true);

      const nuevoUsuario = {
        nombre,
        email,
        password,
        direccion,
        telefono,
        rol: 'cliente',
        fecha_registro: new Date()
      };

      await usuariosAPI.crear(nuevoUsuario);

      alert("✅ Cuenta creada exitosamente");

      console.log("Usuario registrado:", nuevoUsuario);

      setNombre("");
      setEmail("");
      setPassword("");
      setDireccion("");
      setTelefono("");

      volverLogin(); // regresar al login
    } catch (err) {
      console.error("Error en registro:", err);
      const mensaje = err.response?.data?.message || "Error al registrar la cuenta";
      setError(mensaje);
    } finally {
      setCargando(false);
    }
  };

  return (

    <section className="login">

      <h2 className="login__titulo">Crear Cuenta</h2>

      <form className="login__form" onSubmit={registrarCuenta}>

        <label>Nombre</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Teléfono</label>
        <input
          type="tel"
          placeholder="Ingresa tu teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <label>Dirección</label>
        <input
          type="text"
          placeholder="Ingresa tu dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Crea una contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="login-error">{error}</p>}

        <button
          type="submit"
          className="login__btn login__btn--acceder"
          disabled={cargando}
        >
          {cargando ? "Registrando..." : "Registrar"}
        </button>

        <button
          type="button"
          className="login__btn login__btn--secundario"
          onClick={volverLogin}
        >
          Volver al login
        </button>

      </form>

    </section>
  );
}

export default Registro;