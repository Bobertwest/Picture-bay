import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { ImagenesContext } from "../Context/ImagenesProvider";

const Buscador = () => {
  const { setPaginaActual, busqueda, setBusqueda, buscar } =
    useContext(ImagenesContext);

  const ejecutarBusqueda = (e) => {
    e.preventDefault();
    if (busqueda === "") return;
    setPaginaActual(1);
    buscar(busqueda);
  };

  return (
    <form className="buscador" onSubmit={ejecutarBusqueda}>
      <input
        type="text"
        name="foto"
        autoComplete="off"
        placeholder="Busca imagen ej. casa o auto"
        onChange={(e) => setBusqueda(e.target.value)}
        id="buscadorInput"
      />
      <button type="submit">
        <BsSearch />
      </button>
    </form>
  );
};

export default Buscador;
