import { useEffect, useState } from 'react';
import api from './Services/Api';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        obtenerProductos();
    }, []);

    if (cargando) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="vista">
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;