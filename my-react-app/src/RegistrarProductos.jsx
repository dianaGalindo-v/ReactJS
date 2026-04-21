import { useState, useEffect } from "react";
import { productosAPI, categoriasAPI } from "./Services/api";
import "./RegistrarProductos.css";

function RegistrarProductos({ productoEditado, limpiarSeleccion, onActualizacionExitosa }) {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [stock, setStock] = useState("");
    const [direccion, setDireccion] = useState("");
    const [imagen, setImagen] = useState("");
    const [idCategoria, setIdCategoria] = useState("");
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(false);

    // Cargar categorías al montar
    useEffect(() => {
        cargarCategorias();
    }, []);

    // Cargar producto a editar
    useEffect(() => {
        if (productoEditado) {
            setNombre(productoEditado.nombre || "");
            setPrecio(productoEditado.precio || "");
            setStock(productoEditado.stock || "");
            setDireccion(productoEditado.direccion || "");
            setImagen(productoEditado.imagen || "");
            setIdCategoria(productoEditado.id_categoria || "");
        } else {
            limpiarFormulario();
        }
    }, [productoEditado]);

    const cargarCategorias = async () => {
        try {
            const response = await categoriasAPI.listar();
            setCategorias(response.data);
        } catch (error) {
            console.error("Error cargando categorías:", error);
        }
    };

    const limpiarFormulario = () => {
        setNombre("");
        setPrecio("");
        setStock("");
        setDireccion("");
        setImagen("");
        setIdCategoria("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !precio || !stock || !idCategoria) {
            alert("⚠️ Complete los campos obligatorios");
            return;
        }

        const nuevoProducto = {
            nombre,
            precio: parseFloat(precio),
            stock: parseInt(stock),
            direccion,
            imagen,
            id_categoria: parseInt(idCategoria)
        };

        try {
            setCargando(true);
            let productoActualizado = null;

            if (productoEditado) {
                const response = await productosAPI.actualizar(productoEditado.id, nuevoProducto);
                productoActualizado = response.data;
                alert("✅ Producto actualizado correctamente");
                limpiarSeleccion();
            } else {
                const response = await productosAPI.crear(nuevoProducto);
                productoActualizado = response.data;
                alert("✅ Producto registrado correctamente");
            }

            limpiarFormulario();

            // Notificar al padre
            if (onActualizacionExitosa) {
                onActualizacionExitosa(productoActualizado);
            }

            console.log("Producto guardado:", productoActualizado);

        } catch (error) {
            console.error("Error:", error);
            const mensaje = error.response?.data?.message || "Ocurrió un error al procesar la solicitud";
            alert("❌ " + mensaje);
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className="registro-productos">
            <h3 className="registro-productos__titulo">
                {productoEditado ? "Editar Producto" : "Registrar Producto"}
            </h3>

            <form className="registro-productos__form" onSubmit={handleSubmit}>
                <label>Nombre: *</label>
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                    placeholder="Nombre del producto"
                />

                <label>Precio: *</label>
                <input 
                    type="number" 
                    step="0.01"
                    value={precio} 
                    onChange={(e) => setPrecio(e.target.value)} 
                    required 
                    placeholder="Precio"
                />

                <label>Stock: *</label>
                <input 
                    type="number" 
                    value={stock} 
                    onChange={(e) => setStock(e.target.value)} 
                    required 
                    placeholder="Cantidad en stock"
                />

                <label>Dirección/Descripción:</label>
                <input 
                    type="text" 
                    value={direccion} 
                    onChange={(e) => setDireccion(e.target.value)} 
                    placeholder="Descripción del producto"
                />

                <label>Imagen (URL):</label>
                <input 
                    type="text" 
                    value={imagen} 
                    onChange={(e) => setImagen(e.target.value)} 
                    placeholder="https://..."
                />

                <label>Categoría: *</label>
                <select 
                    value={idCategoria} 
                    onChange={(e) => setIdCategoria(e.target.value)}
                    required
                >
                    <option value="">Selecciona una categoría</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>
                            {cat.nombre}
                        </option>
                    ))}
                </select>

                <button 
                    type="submit"
                    disabled={cargando}
                >
                    {cargando ? "Guardando..." : (productoEditado ? "Actualizar" : "Registrar")}
                </button>
            </form>
        </div>
    );
}

export default RegistrarProductos;