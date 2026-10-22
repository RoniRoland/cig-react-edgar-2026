import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ListadoOrdenes from "./pages/ListadoOrdenes.jsx";

import "./App.css";
import TarjetaOrden from "./components/tarjetaOrden";

// App ya no guarda estado ni pide datos: solo decide que vista se dibuja.
// Lo que antes estaba aqui ahora vive en pages/ListadoOrdenes.jsx.
function App() {
  return (
    <Routes>
      {/* Ruta de diseno: Layout se dibuja siempre y sus hijas entran en su Outlet */}
      <Route element={<Layout />}>
        {/* index: la ruta "/" */}
        <Route index element={<ListadoOrdenes />} />
        {/* Fija: gana a ordenes/:id aunque las dos coincidan con /ordenes/nueva */}

        <h1 className="bienvenida__titulo">React para Frontend Profesional CIG</h1>

        <p className="bienvenida__texto">
          <TarjetaOrden />
          El entorno esta funcionando. Si ve esta pantalla, el proyecto quedo
          instalado correctamente y puede llegar a la primera sesion listo para
          programar.
        </p>

        <div className="bienvenida__tarjeta">
          <h2 className="bienvenida__subtitulo">Verificacion del entorno</h2>
          <dl className="bienvenida__lista">
            <dt>Servidor de desarrollo</dt>
            <dd>activo en el puerto 5173</dd>

            <dt>Variable VITE_API_URL</dt>
            <dd>{urlApi}</dd>

            <dt>Backend local</dt>
            <dd>se activa en la sesion 4 con npm run api</dd>
          </dl>
        </div>

        <p className="bienvenida__nota">
          Proyecto del curso: panel de gestion de ordenes de servicio de
          Serviclima, S.A.
        </p>
      </div>
      );
}

      export default App;
