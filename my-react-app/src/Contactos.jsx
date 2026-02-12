import { useState } from 'react';
import './Contactos.css';

function Contactos() {

    // useState permite guardar informacion q cambia, aqui se guardan los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: ''
    });

    //funcion q se ejecuta cuando el usuario escribe algo
    const handleChange = (e) => {
        setFormData({ //mantiene valores anteriores
            ...formData,
            [e.target.name]: e.target.value //actualiza el campo q cambia
        });
    };

    //esta funcion se ejecuta cuando el usuario envia el formulario 
    const handleSubmit = (e) => {
        e.preventDefault();
        //evita q la pagina se recargue
        alert("Mensaje enviado correctamente ✨");
        setFormData({
            nombre: '',
            correo: '',
            mensaje: ''
        });
    };

    return (
        <div className="vista">
            <h2>Contacto</h2>
            <p>¿Tienes dudas o comentarios? Escríbenos.</p>

            <form className="formulario" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="correo"
                    placeholder="Tu correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="mensaje"
                    placeholder="Escribe tu mensaje"
                    rows="4"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Enviar mensaje</button>

            </form>
        </div>
    );
}

export default Contactos;

