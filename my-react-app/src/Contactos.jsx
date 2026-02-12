import { useState } from "react";
import "./Contactos.css";

function Contactos() {

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",   // 👈 Nuevo campo agregado
    mensaje: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos enviados:", formData);

    alert("Mensaje enviado correctamente 💌");

    // Reiniciamos todos los campos (incluyendo teléfono)
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      mensaje: ""
    });
  };

  return (
    <div className="contactoContainer">

      <h2 className="tituloContacto">Contáctanos</h2>

      <p>
        Si tienes dudas sobre nuestros productos o promociones,
        escríbenos y con gusto te responderemos.
      </p>

      <form onSubmit={handleSubmit} className="formulario">

        {/* Nombre */}
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        {/* Correo */}
        <input
          type="email"
          name="correo"
          placeholder="Tu correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        {/* 👇 NUEVO CAMPO: Teléfono */}
        <input
          type="tel"
          name="telefono"
          placeholder="Tu número de teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        {/* Mensaje */}
        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Enviar mensaje
        </button>

      </form>

    </div>
  );
}

export default Contactos;
