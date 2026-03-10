import Encabezado from "./Encabezado";
import ContenedorTarjetas from "./ContenedorTarjetas";
import Promociones from "./Promociones";
import Footer from "./Footer";
import Login from "./Login";
import { useState } from "react";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div className="appContainer">

      {/* MENÚ SUPERIOR */}
      <Encabezado setVista={setVista} />

      {/* CONTENIDO PRINCIPAL */}
      <div className="contenido">
        <ContenedorTarjetas vista={vista} />

        {vista === "Login" && <Login />}

      </div>

      {vista === "Inicio" && <Promociones />}

      {/* PIE DE PÁGINA */}
      <Footer />

    </div>
  );
}

export default App;