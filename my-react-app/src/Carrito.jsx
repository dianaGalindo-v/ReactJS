import './Carrito.css';
import { useEffect, useState } from 'react';
import { carritosAPI, carritoDetalleAPI } from './Services/api';
import { useAuth } from './AuthContext';

function Carrito() {

  const { isLoggedIn, userId, role } = useAuth();
  const isClient = role !== 'admin';
  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const limpiarCarrito = async () => {
    const confirmar = window.confirm("¿Seguro que deseas limpiar el carrito?");
    if (!confirmar) return;

    try {
      if (carritos.length === 0) return;
      const carrito = carritos[0];

      // Eliminar todos los detalles del carrito
      if (carrito.detalles && carrito.detalles.length > 0) {
        await Promise.all(
          carrito.detalles.map((detalle) =>
            carritoDetalleAPI.eliminar(detalle.id)
          )
        );
      }

      // Actualizar el total a 0
      await carritosAPI.actualizar(carrito.id, {
        total: 0,
        estado: carrito.estado,
        fecha_creacion: carrito.fecha_creacion,
        id_usuario: carrito.id_usuario,
      });

      alert("✅ Carrito limpiado");
      setCarritos([
        { ...carrito, detalles: [], total: 0 }
      ]);
    } catch (error) {
      console.error('Error al limpiar el carrito:', error);
      alert("❌ No se pudo limpiar el carrito");
    }
  };

  useEffect(() => {

    const obtenerCarritos = async () => {

      if (!isLoggedIn) {
        setCarritos([]);
        setCargando(false);
        return;
      }

      try {
        const response = await carritosAPI.listar({ id_usuario: userId });
        const data = response.data || [];

        if (data.length === 0) {
          setCarritos([]);
        } else {
          setCarritos([data[data.length - 1]]);
        }
      } catch (error) {
        console.error('error al obtener carritos', error);
        setCarritos([]);
      } finally {
        setCargando(false);
      }

    };

    obtenerCarritos();

  }, [isLoggedIn, userId]);

  if (cargando) return <p>Cargando carritos.......</p>;

  return (

    <div className="carritos">

      <h1>Carrito de compras</h1>

      {carritos.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        carritos.map((carrito) => (
          <div className="carrito-card" key={carrito.id}>

            <div className="carrito-id">
              ID Pedido: {carrito.id}
            </div>

            <div className="carrito-fecha">
              {new Date(carrito.fecha_creacion).toLocaleDateString()}
            </div>

            <div className="carrito-productos-titulo">
              Productos
            </div>

            <ul>
              {carrito.detalles && carrito.detalles.length > 0 ? (
                carrito.detalles.map((detalle, idx) => {
                  const producto = detalle.producto;

                  return (
                    <li key={idx} className="carrito-producto">
                      {producto ? (
                        <div className="producto-info">
                          {producto.imagen && (
                            <img
                              src={producto.imagen}
                              alt={producto.nombre}
                              width="50"
                            />
                          )}
                          <span>{producto.nombre}</span>
                          <span>${producto.precio}</span>
                          <span>Cantidad: {detalle.cantidad}</span>
                        </div>
                      ) : (
                        <span>Cargando producto...</span>
                      )}
                    </li>
                  );
                })
              ) : (
                <li>No hay productos agregados aún.</li>
              )}
            </ul>

            <div className="carrito-total">
              Total: ${carrito.total}
            </div>

            <button className="comprar" disabled>
              Comprar
            </button>

            {isClient && (
              <button className="limpiar-carrito" onClick={limpiarCarrito}>
                Limpiar carrito
              </button>
            )}

          </div>
        ))
      )}

    </div>

  );

}

export default Carrito;