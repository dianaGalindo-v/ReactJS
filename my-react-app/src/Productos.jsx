import { useEffect, useState } from 'react';
import api from './Services/Api';
import RegistrarProductos from './RegistrarProductos';
import './Productos.css';

function Productos() {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const obtenerProductos = async () => {
        try {
            const response = await api.get('/products');
            setProductos(response.data);
        } catch (err) {
            console.error('Error al obtener productos:', err);
            setError('No se pudieron cargar los productos.');
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    // 🗑 ELIMINAR PRODUCTO
    const eliminarProducto = async (id) => {

        const confirmar = window.confirm("¿Seguro que deseas eliminar este producto?");

        if (!confirmar) return;

        try {

            await api.delete(`/products/${id}`);

            alert("Producto eliminado");

            obtenerProductos();

        } catch (error) {

            console.error("Error al eliminar:", error);
            alert("No se pudo eliminar el producto");

        }

    };

    // 🛒 AGREGAR AL CARRITO
    const agregarAlCarrito = async (producto) => {

        try {

            const carrito = {
                userId: 1,
                date: new Date(),
                products: [
                    {
                        productId: producto.id,
                        quantity: 1
                    }
                ]
            };

            await api.post('/carts', carrito);

            alert("Producto agregado al carrito 🛒");

        } catch (error) {

            console.error("Error al agregar al carrito:", error);
            alert("No se pudo agregar al carrito");

        }

    };

    if (cargando) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="vista">

            <RegistrarProductos
                productoEditado={productoSeleccionado}
                limpiarSeleccion={() => setProductoSeleccionado(null)}
                onActualizacionExitosa={obtenerProductos}
            />

            <h2>Nuestros Productos</h2>

            <p className="descripcion">
                Explora nuestra colección de productos disponibles.
            </p>

            <div className="productosGrid">

                {productos.map((producto) => (

                    <div className="productoCard" key={producto.id}>

                        <img src={producto.image} alt={producto.title} />

                        <h3>{producto.title}</h3>

                        <p>${producto.price}</p>

                        <div className="productoBotones">

                            <button
                                className="btnCarrito"
                                onClick={() => agregarAlCarrito(producto)}
                            >
                                Añadir al carrito
                            </button>

                            <button
                                className="btnEditar"
                                onClick={() => setProductoSeleccionado(producto)}
                            >
                                Editar
                            </button>

                            <button
                                className="btnEliminar"
                                onClick={() => eliminarProducto(producto.id)}
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Productos;