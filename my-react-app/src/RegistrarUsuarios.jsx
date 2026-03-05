import "./RegistrarUsuarios.css";
import { useState, useEffect } from "react";
import api from "./Services/Api";

function RegistrarUsuarios({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {

  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    correo: "",
    username: ""
  });

  useEffect(() => {

    if (usuarioEditado) {

      setUsuario({
        nombre: usuarioEditado.name.firstname,
        apellidos: usuarioEditado.name.lastname,
        direccion: usuarioEditado.address.street,
        telefono: usuarioEditado.phone,
        correo: usuarioEditado.email,
        username: usuarioEditado.username
      });

    } else {

      limpiarFormulario();

    }

  }, [usuarioEditado]);

  const limpiarFormulario = () => {
    setUsuario({
      nombre: "",
      apellidos: "",
      direccion: "",
      telefono: "",
      correo: "",
      username: ""
    });
  };

  const handleChange = (e) => {

    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const nuevoUsuario = {

      email: usuario.correo,
      username: usuario.username,
      phone: usuario.telefono,

      name: {
        firstname: usuario.nombre,
        lastname: usuario.apellidos
      },

      address: {
        street: usuario.direccion,
        number: 0,
        city: "Ciudad",
        zipcode: "00000"
      }

    };

    try {

      if (usuarioEditado) {

        await api.put(`/users/${usuarioEditado.id}`, nuevoUsuario);

        alert("Usuario actualizado correctamente");

        limpiarSeleccion();

      } else {

        await api.post("/users", nuevoUsuario);

        alert("Usuario registrado correctamente");

      }

      limpiarFormulario();

      if (onActualizacionExitosa) {
        onActualizacionExitosa();
      }

    } catch (error) {

      console.error("Error:", error);
      alert("Ocurrió un error");

    }

  };

  return (

    <div className="registro-usuarios">

      <h2>
        {usuarioEditado ? "Editar Usuario" : "Registrar Usuario"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={usuario.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          value={usuario.apellidos}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={usuario.direccion}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={usuario.telefono}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={usuario.correo}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={usuario.username}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {usuarioEditado ? "Actualizar Usuario" : "Registrar Usuario"}
        </button>

      </form>

    </div>
  );
}

export default RegistrarUsuarios;