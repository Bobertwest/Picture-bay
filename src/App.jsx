import React from "react";
import "../src/Styles/App.css";
import Imagenes from "./Components/Imagenes";
import Portada from "./Components/Portada";
import Opciones from "./Components/Opciones";
import Botones from "./Components/Botones";
import ImagenesProvider from "./Context/ImagenesProvider";

function App() {
  return (
    <ImagenesProvider>
      <div className="App">
        <Portada />
        <div className="imagenesResultados">
          <Opciones />
          <Imagenes />
        </div>
        <Botones />
      </div>
    </ImagenesProvider>
  );
}

export default App;
