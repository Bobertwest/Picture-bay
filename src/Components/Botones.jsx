import React, { useContext, useEffect } from "react";
import "../Styles/Botones.css";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import { ImagenesContext } from "../Context/ImagenesProvider";

const Botones = () => {
  const { totalPaginas, paginaActual, setPaginaActual, busqueda, buscar } =
    useContext(ImagenesContext);

  useEffect(() => {
    buscar(busqueda);
    //eslint-disable-next-line
  }, [paginaActual]);

  const anterior = () => {
    if (paginaActual <= 1) return;
    setPaginaActual(paginaActual - 1);
  };
  const siguiente = () => {
    if (paginaActual >= totalPaginas) return;
    setPaginaActual(paginaActual + 1);
  };
  return (
    <div className="botones">
      {paginaActual <= 1 ? null : (
        <button onClick={anterior}>
          <BiArrowToLeft /> Anterior
        </button>
      )}
      {paginaActual >= totalPaginas ? null : (
        <button onClick={siguiente}>
          Siguiente
          <BiArrowToRight />
        </button>
      )}
    </div>
  );
};

export default Botones;
