import React from "react";
import Buscador from "./Buscador";
import "../Styles/Portada.css";
import Header from "./Header";

const Portada = () => {
  return (
    <div className="portadaContainer">
      <Header />
      <h1 className="frase">
        Busca entre mas de 4,000 imagenes completamente gratis!
      </h1>
      <Buscador />
    </div>
  );
};

export default Portada;
