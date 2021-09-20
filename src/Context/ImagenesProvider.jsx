import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ImagenesContext = createContext();
export const imagenesPorPagina = 21;

const ImagenesProvider = (props) => {
  const [imagenes, setImagenes] = useState({});
  const [imagenesData, setImagenesData] = useState({});
  const [loading, setLoading] = useState(true);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [busqueda, setBusqueda] = useState("");

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
    const temasDefault = ["populares", "paisajes", "paises"];
    const temaRandom =
      temasDefault[Math.floor(Math.random() * temasDefault.length)];
    buscar(temaRandom);
    //eslint-disable-next-line
  }, []);

  return (
    <ImagenesContext.Provider
      value={{
        imagenes,
        setImagenes,
        imagenesData,
        setImagenesData,
        loading,
        setLoading,
        paginaActual,
        setPaginaActual,
        totalPaginas,
        setTotalPaginas,
        busqueda,
        setBusqueda,
        buscar,
      }}>
      {props.children}
    </ImagenesContext.Provider>
  );
};

export default ImagenesProvider;
