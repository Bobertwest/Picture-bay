import React from "react";
import Buscador from "./Buscador";
import "../Styles/Portada.css";
import Header from "./Header";

const Portada = ({
  setImagenesData,
  setLoading,
  setTotalPaginas,
  paginaActual,
  busqueda,
  setBusqueda,
}) => {
  return (
    <div className="portadaContainer">
      <Header />
      <h1 className="frase">
        Busca entre mas de 4,000 imagenes completamente gratis!
      </h1>
      <Buscador
        setImagenesData={setImagenesData}
        setLoading={setLoading}
        setTotalPaginas={setTotalPaginas}
        paginaActual={paginaActual}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
    </div>
  );
};

export default Portada;
