import { useEffect, useState } from "react";
import { categoriasAPI } from "./Services/api";
import "./Categorias.css";

function Categorias() {

  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    obtenerCategorias();

  }, []);

  const obtenerCategorias = async () => {
    try {
      setCargando(true);
      const response = await categoriasAPI.listar();
      setCategorias(response.data);
      setError(null);
    } catch (err) {
      console.error("Error cargando categorias:", err);
      setError("No se pudieron cargar las categorías");
    } finally {
      setCargando(false);
    }
  };

  if (cargando) return <div style={{ padding: "40px" }}>⏳ Cargando categorías...</div>;
  if (error) return <div style={{ padding: "40px" }}>❌ {error}</div>;

  return (

    <div style={{ padding: "40px" }}>

      <h2>Categorías de Productos</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>

        {categorias.map((cat) => (

          <div key={cat.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}
          >

            <h3>{cat.nombre}</h3>

            <p style={{ fontSize: "14px", color: "#666" }}>
              ID: {cat.id}
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Categorias;