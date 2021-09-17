import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/Styles/App.css";
import Imagenes from "./Components/Imagenes";
import Portada from "./Components/Portada";
import Opciones from "./Components/Opciones";
import { imagenesPorPagina } from "./helpers/helpers";
import Botones from "./Components/Botones";

function App() {
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
      if (imagenes.total === 0) {
        window.location.reload();
      } else {
        setImagenesData(imagenes);
        setTotalPaginas(Math.ceil(imagenes.totalHits / imagenesPorPagina));
        setLoading(false);
      }
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
    <div className="App">
      <Portada
        setImagenesData={setImagenesData}
        setLoading={setLoading}
        setTotalPaginas={setTotalPaginas}
        paginaActual={paginaActual}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      <div className="imagenesResultados">
        <Opciones />
        <Imagenes imagenesData={imagenesData} loading={loading} />
      </div>
      <Botones
        totalPaginas={totalPaginas}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        setImagenesData={setImagenesData}
        setLoading={setLoading}
        setTotalPaginas={setTotalPaginas}
        busqueda={busqueda}
      />
    </div>
  );
}

export default App;
