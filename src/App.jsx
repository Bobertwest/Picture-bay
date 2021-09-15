import React, { useEffect } from "react";
import "../src/Styles/App.css";
import Portada from "./Components/Portada";
import { buscar } from "./helpers/helpers";

function App() {
  useEffect(() => {
    const temasDefault = ["populares", "paisajes", "paises"];
    const temaRandom =
      temasDefault[Math.floor(Math.random() * temasDefault.length)];
    buscar(temaRandom);
  }, []);
  return (
    <div className="App">
      <Portada />
    </div>
  );
}

export default App;
