import { useEffect, useState } from 'react';
import { productosAPI, carritosAPI, carritoDetalleAPI } from './Services/api';
import RegistrarProductos from './RegistrarProductos';
import './Productos.css';
import { useAuth } from './AuthContext';

function Productos() {

    const { isLoggedIn, role, userId } = useAuth();
    const isAdmin = role === 'admin';

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    // Obtener todos los productos
    const obtenerProductos = async () => {
        try {
            setCargando(true);
            const response = await productosAPI.listar();
            setProductos(response.data);
            setError(null);
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

    // ELIMINAR PRODUCTO
    const eliminarProducto = async (id) => {
        const confirmar = window.confirm("¿Seguro que deseas eliminar este producto?");
        if (!confirmar) return;

        try {
            await productosAPI.eliminar(id);
            alert("✅ Producto eliminado");

            setProductos((prev) => prev.filter((p) => p.id !== id));

        } catch (error) {
            console.error("Error al eliminar:", error);
            alert("❌ No se pudo eliminar el producto");
        }
    };

    // AGREGAR AL CARRITO
    const agregarAlCarrito = async (producto) => {
        try {
            if (!isLoggedIn) {
                alert("⚠️ Debes iniciar sesión para agregar productos al carrito.");
                return;
            }

            if (producto.stock <= 0) {
                alert("⚠️ El producto no tiene stock disponible");
                return;
            }

            const carritoResponse = await carritosAPI.listar({ id_usuario: userId });
            const carritos = Array.isArray(carritoResponse.data) ? carritoResponse.data : [];
            let carrito = carritos[carritos.length - 1];

            if (!carrito) {
                const crearCarrito = await carritosAPI.crear({
                    total: 0,
                    estado: 'abierto',
                    fecha_creacion: new Date().toISOString(),
                    id_usuario: userId,
                });
                carrito = crearCarrito.data;
            }

            const detalleResponse = await carritoDetalleAPI.listar({
                id_carrito: carrito.id,
                id_producto: producto.id,
            });
            const detalleExistente = Array.isArray(detalleResponse.data) ? detalleResponse.data[0] : null;

            if (detalleExistente) {
                await carritoDetalleAPI.actualizar(detalleExistente.id, {
                    precio_unitario: producto.precio,
                    cantidad: detalleExistente.cantidad + 1,
                    id_carrito: carrito.id,
                    id_producto: producto.id,
                });
            } else {
                await carritoDetalleAPI.crear({
                    precio_unitario: producto.precio,
                    cantidad: 1,
                    id_carrito: carrito.id,
                    id_producto: producto.id,
                });
            }

            const nuevoTotal = parseFloat(carrito.total || 0) + parseFloat(producto.precio);
            await carritosAPI.actualizar(carrito.id, {
                total: nuevoTotal,
                estado: carrito.estado || 'abierto',
                fecha_creacion: carrito.fecha_creacion || new Date().toISOString(),
                id_usuario: carrito.id_usuario || 1,
            });

            alert("✅ Producto agregado al carrito 🛒");

        } catch (error) {
            console.error("Error al agregar al carrito:", error);
            alert("❌ No se pudo agregar al carrito");
        }
    };

    if (cargando) return <p>⏳ Cargando productos...</p>;
    if (error) return <p>❌ {error}</p>;

    return (
        <div className="vista">

            {/* FORMULARIO SOLO SI ES ADMIN */}
            {isAdmin && (
                <RegistrarProductos
                    productoEditado={productoSeleccionado}
                    limpiarSeleccion={() => setProductoSeleccionado(null)}
                    onActualizacionExitosa={(productoActualizado) => {

                        if (productoActualizado) {

                            setProductos((prev) =>
                                prev.map((p) =>
                                    p.id === productoActualizado.id ? productoActualizado : p
                                )
                            );

                        } else {

                            obtenerProductos();

                        }
                    }}
                />
            )}

            <h2>Nuestros Productos</h2>

            <p className="descripcion">
                Explora nuestra colección de productos disponibles.
            </p>

            <div className="productosGrid">

                {productos.map((producto) => (

                    <div className="productoCard" key={producto.id}>

                        {producto.imagen && <img src={producto.imagen} alt={producto.nombre} />}

                        <h3>{producto.nombre}</h3>

                        <p className="precio">${producto.precio}</p>

                        <p className="stock">Stock: {producto.stock}</p>

                                        <div className="productoBotones">

                                {!isAdmin && (
                                  <button
                                      className="btnCarrito"
                                      onClick={() => agregarAlCarrito(producto)}
                                  >
                                      Añadir al carrito
                                  </button>
                                )}

                                {/* SOLO ADMIN PUEDE VER EDITAR/ELIMINAR */}
                                {isAdmin && (
                                    <>
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
                                    </>
                                )}

                            </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Productos;