import React, { useEffect } from "react";
import axios from "axios";
import "../Styles/Botones.css";
import { imagenesPorPagina } from "../helpers/helpers";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";

const Botones = ({
  totalPaginas,
  paginaActual,
  setPaginaActual,
  setImagenesData,
  setLoading,
  setTotalPaginas,
  busqueda,
}) => {
  const buscar = async (tema) => {
    setLoading(true);
    try {
      const url = `https://pixabay.com/api/?key=17294357-d3238409fe83dc90aa58137bc&q=${tema}&per_page=${imagenesPorPagina}&page=${paginaActual}&image_type=photo`;
      const response = await axios.get(url);
      const imagenes = response.data;
      setImagenesData(imagenes);
      setTotalPaginas(Math.ceil(imagenes.totalHits / imagenesPorPagina));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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
