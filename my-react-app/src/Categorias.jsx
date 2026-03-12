import { useEffect, useState } from "react";

function Categorias() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {

    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(data => {

        console.log("Categorias:", data.categories);

        setCategorias(data.categories);

      })
      .catch(error => {
        console.error("Error cargando categorias:", error);
      });

  }, []);

  return (

    <div style={{ padding: "40px" }}>

      <h2>Categorías de Comida</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>

        {categorias.map((cat) => (

          <div key={cat.idCategory}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center"
            }}
          >

            <img
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              style={{ width: "100%" }}
            />

            <h3>{cat.strCategory}</h3>

            <p style={{ fontSize: "14px" }}>
              {cat.strCategoryDescription.substring(0, 100)}...
            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Categorias;