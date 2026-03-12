import Encabezado from "./Encabezado";
import ContenedorTarjetas from "./ContenedorTarjetas";
import Promociones from "./Promociones";
import Footer from "./Footer";
import Login from "./Login";
import Registro from "./Registro";
import Categorias from "./Categorias";
import { useState } from "react";
import { AuthProvider } from "./AuthContext";

function App() {

  const [vista, setVista] = useState("Inicio");

  return (
    <AuthProvider>

      <div className="appContainer">

        {/* MENÚ SUPERIOR */}
        <Encabezado setVista={setVista} />

        {/* CONTENIDO PRINCIPAL */}
        <div className="contenido">

          <ContenedorTarjetas vista={vista} />

          {vista === "Login" && <Login setVista={setVista} />}

          {vista === "Registro" && (
            <Registro volverLogin={() => setVista("Login")} />
          )}
          
          {vista === "Categoria" && <Categorias />
          }
        </div>

        {vista === "Inicio" && <Promociones />}

        {/* PIE DE PÁGINA */}
        <Footer />

      </div>

    </AuthProvider>
  );
}

export default App;