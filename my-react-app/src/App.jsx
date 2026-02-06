import Encabezado from "./Encabezado";
import ContenedorTarjetas from "./ContenedorTarjetas";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      {/* MENÚ SUPERIOR */}
      <Encabezado cambiarVista={setVista} />
      <ContenedorTarjetas vista = {vista}/>               {/* TARJETAS + PROMOCIONES */}
      <Footer />                                          {/* PIE DE PÁGINA */}
    </div>
  );
}

export default App;

