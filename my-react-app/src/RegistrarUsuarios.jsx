import "./RegistrarUsuarios.css";
import { useState, useEffect } from "react";
import { usuariosAPI } from "./Services/api";

function RegistrarUsuarios({ usuarioEditado, limpiarSeleccion, onActualizacionExitosa }) {

  const [usuario, setUsuario] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    correo: "",
    password: "",
    rol: "cliente"
  });

  useEffect(() => {
    if (usuarioEditado) {
      setUsuario({
        nombre: usuarioEditado.nombre || "",
        direccion: usuarioEditado.direccion || "",
        telefono: usuarioEditado.telefono || "",
        correo: usuarioEditado.email || "",
        password: usuarioEditado.password || "",
        rol: usuarioEditado.rol || "cliente"
      });
    } else {
      limpiarFormulario();
    }
  }, [usuarioEditado]);

  const limpiarFormulario = () => {
    setUsuario({
      nombre: "",
      direccion: "",
      telefono: "",
      correo: "",
      password: "",
      rol: "cliente"
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

    try {
      let usuarioActualizado = null;
      const datos = {
        nombre: usuario.nombre,
        direccion: usuario.direccion,
        telefono: usuario.telefono,
        email: usuario.correo,
        password: usuario.password || usuarioEditado?.password || "123456",
        rol: usuario.rol,
        fecha_registro: usuarioEditado ? usuarioEditado.fecha_registro : new Date()
      };

      if (usuarioEditado) {
        const response = await usuariosAPI.actualizar(usuarioEditado.id, datos);
        usuarioActualizado = response.data;
        alert("Usuario actualizado correctamente");
        limpiarSeleccion();
      } else {
        const response = await usuariosAPI.crear(datos);
        usuarioActualizado = response.data;
        alert("Usuario registrado correctamente");
      }

      limpiarFormulario();

      if (onActualizacionExitosa) {
        onActualizacionExitosa(usuarioActualizado);
      }

      console.log("Usuario actualizado:", usuarioActualizado);

    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      alert("Ocurrió un error al procesar la solicitud");
    }
  };

  return (
    <div className="registro-usuarios">
      <h2>{usuarioEditado ? "Editar Usuario" : "Registrar Usuario"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" value={usuario.nombre} onChange={handleChange} required />
        <input type="text" name="direccion" placeholder="Dirección" value={usuario.direccion} onChange={handleChange} required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={usuario.telefono} onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" value={usuario.correo} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" value={usuario.password} onChange={handleChange} required={!usuarioEditado} />
        <select name="rol" value={usuario.rol} onChange={handleChange}>
          <option value="cliente">Cliente</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">{usuarioEditado ? "Actualizar" : "Registrar"}</button>
      </form>
    </div>
  );
}

export default RegistrarUsuarios;