import "./RegistrarUsuarios.css";
import { useState, useEffect } from "react";

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
        nombre: usuarioEditado.name.firstname || "",
        apellidos: usuarioEditado.name.lastname || "",
        direccion: `${usuarioEditado.address.street} ${usuarioEditado.address.number} ${usuarioEditado.address.city} ${usuarioEditado.address.zipcode}` || "",
        telefono: usuarioEditado.phone || "",
        correo: usuarioEditado.email || "",
        username: usuarioEditado.username || ""
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

    try {
      let usuarioActualizado = null;

      if (usuarioEditado) {
        // Aquí podrías hacer PUT a tu API si la tienes
        // Por ahora simulamos la actualización:
        usuarioActualizado = {
          ...usuarioEditado,
          name: { firstname: usuario.nombre, lastname: usuario.apellidos },
          address: { ...usuarioEditado.address, street: usuario.direccion }, // ajusta si quieres separar street/number/city
          phone: usuario.telefono,
          email: usuario.correo,
          username: usuario.username
        };
        alert("Usuario actualizado correctamente");
        limpiarSeleccion();
      } else {
        // POST a la API para registrar
        // Simulación:
        usuarioActualizado = {
          id: Math.floor(Math.random() * 10000),
          name: { firstname: usuario.nombre, lastname: usuario.apellidos },
          address: { street: usuario.direccion, number: "", city: "", zipcode: "" },
          phone: usuario.telefono,
          email: usuario.correo,
          username: usuario.username
        };
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
        <input type="text" name="apellidos" placeholder="Apellidos" value={usuario.apellidos} onChange={handleChange} required />
        <input type="text" name="direccion" placeholder="Dirección" value={usuario.direccion} onChange={handleChange} required />
        <input type="tel" name="telefono" placeholder="Teléfono" value={usuario.telefono} onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Correo" value={usuario.correo} onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" value={usuario.username} onChange={handleChange} required />
        <button type="submit">{usuarioEditado ? "Actualizar" : "Registrar"}</button>
      </form>
    </div>
  );
}

export default RegistrarUsuarios;