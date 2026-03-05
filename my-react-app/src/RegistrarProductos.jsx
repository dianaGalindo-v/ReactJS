import { useState, useEffect } from "react";
import api from "./Services/Api";
import "./RegistrarProductos.css";

function RegistrarProductos({ productoEditado, limpiarSeleccion, onActualizacionExitosa }) {
    const [titulo, setTitulo] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        if (productoEditado) {
            setTitulo(productoEditado.title || "");
            setPrice(productoEditado.price || "");
            setDescription(productoEditado.description || "");
            setCategory(productoEditado.category || "");
            setImage(productoEditado.image || "");
        } else {
            limpiarFormulario();
        }
    }, [productoEditado]);

    const limpiarFormulario = () => {
        setTitulo("");
        setPrice("");
        setDescription("");
        setCategory("");
        setImage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoProducto = {
            title: titulo,
            price: Number(price),
            description,
            category,
            image
        };

        try {
            let productoActualizado = null;

            if (productoEditado) {
                const response = await api.put(`/products/${productoEditado.id}`, nuevoProducto);
                productoActualizado = response.data;
                alert("Producto actualizado correctamente");
                limpiarSeleccion();
            } else {
                const response = await api.post("/products", nuevoProducto);
                productoActualizado = response.data;
                alert("Producto registrado correctamente");
            }

            limpiarFormulario();

            // 💡 Aquí enviamos el producto actualizado al padre
            if (onActualizacionExitosa) {
                onActualizacionExitosa(productoActualizado);
            }

            // 👀 Mostrar en consola
            console.log("Producto actualizado:", productoActualizado);

        } catch (error) {
            console.error("Error:", error);
            alert("Ocurrió un error al procesar la solicitud");
        }
    };

    return (
        <div className="registro-productos">
            <h3 className="registro-productos__titulo">
                {productoEditado ? "Editar Producto" : "Registrar Producto"}
            </h3>

            <form className="registro-productos__form" onSubmit={handleSubmit}>
                <label>Título:</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />

                <label>Precio:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

                <label>Descripción:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />

                <label>Categoría:</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />

                <label>Imagen (URL):</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

                <button type="submit">{productoEditado ? "Actualizar" : "Registrar"}</button>
            </form>
        </div>
    );
}

export default RegistrarProductos;