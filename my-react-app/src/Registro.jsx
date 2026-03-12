import { useState } from "react";
import "./Login.css";

function Registro({ volverLogin }) {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const registrarCuenta = (e) => {

    e.preventDefault();

    if (!nombre || !correo || !password) {
      alert("Completa todos los campos");
      return;
    }

    const nuevoUsuario = {
      nombre,
      correo,
      password
    };

    const usuariosGuardados =
      JSON.parse(localStorage.getItem("usuarios")) || [];

    usuariosGuardados.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

    alert("✅ Cuenta creada exitosamente");

    console.log("Usuarios:", usuariosGuardados);

    setNombre("");
    setCorreo("");
    setPassword("");

    volverLogin(); // regresar al login
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

        <label>Correo</label>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Crea una contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="login__btn login__btn--acceder"
        >
          Registrar
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