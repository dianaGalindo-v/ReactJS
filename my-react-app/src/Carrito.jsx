import './Carrito.css';
import { useEffect, useState } from 'react';
import api from './Services/Api';

function Carrito() {

  const [carritos, setCarritos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState({});

  useEffect(() => {

    const obtenerCarritos = async () => {

      try {

        const response = await api.get('/carts');

        // 🔧 CORRECCIÓN AQUÍ
        setCarritos([response.data[response.data.length - 1]]);

        const ids = Array.from(
          new Set(
            response.data.flatMap(c => c.products.map(p => p.productId))
          )
        );

        const prods = {};

        for (let id of ids) {

          const res = await api.get(`/products/${id}`);
          prods[id] = res.data;

        }

        setProductos(prods);

      } catch (error) {

        console.error('error al obtener carritos', error);

      } finally {

        setCargando(false);

      }

    };

    obtenerCarritos();

  }, []);

  if (cargando) return <p>Cargando carritos.......</p>;

  return (

    <div className="carritos">

      <h1>Carrito de compras</h1>

      {carritos.map((carrito) => (

        <div className="carrito-card" key={carrito.id}>

          <div className="carrito-id">
            ID Pedido: {carrito.id}
          </div>

          <div className="carrito-fecha">
            {new Date(carrito.date).toLocaleDateString()}
          </div>

          <div className="carrito-productos-titulo">
            Productos
          </div>

          <ul>

            {carrito.products.map((prod, idx) => {

              const producto = productos[prod.productId];

              return (

                <li key={idx} className="carrito-producto">

                  {producto ? (

                    <div className="producto-info">

                      <img
                        src={producto.image}
                        alt={producto.title}
                        width="50"
                      />

                      <span>{producto.title}</span>

                      <span>${producto.price}</span>

                      <span>
                        Cantidad: {prod.quantity}
                      </span>

                    </div>

                  ) : (

                    <span>
                      Cargando producto...
                    </span>

                  )}

                </li>

              );

            })}

          </ul>

          <button className="comprar" disabled>
            Comprar
          </button>

        </div>

      ))}

    </div>

  );

}

export default Carrito;