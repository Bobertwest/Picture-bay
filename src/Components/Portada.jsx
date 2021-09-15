import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { buscar } from "../helpers/helpers";
import "../Styles/Portada.css";
import Header from "./Header";

const Portada = () => {
  const [busqueda, setBusqueda] = useState("");

  const ejecutarBusqueda = (e) => {
    e.preventDefault();
    buscar(busqueda);
  };

  return (
    <div className="portadaContainer">
      <Header />
      <h1 className="frase">
        Busca entre mas de 4,000 imagenes completamente gratis!
      </h1>
      <form className="buscador" onSubmit={ejecutarBusqueda}>
        <input
          type="text"
          name="foto"
          autoComplete="off"
          placeholder="Busca imagen ej. casa o auto"
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
    </div>
  );
};

export default Portada;
