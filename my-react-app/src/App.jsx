import Encabezado from "./Encabezado";
import ContenedorTarjetas from "./ContenedorTarjetas";
import Footer from "./Footer";

function App() {
  return (
    <div>
      {/* MENÚ SUPERIOR */}
      <Encabezado />

      {/* TARJETAS + PROMOCIONES */}
      <ContenedorTarjetas />

      {/* PIE DE PÁGINA */}
      <Footer />
    </div>
  );
}

export default App;

