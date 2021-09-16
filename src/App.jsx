import React, { useEffect, useState } from "react";
import axios from "axios";
import "../src/Styles/App.css";
import Imagenes from "./Components/Imagenes";
import Portada from "./Components/Portada";

function App() {
  const [imagenesData, setImagenesData] = useState({});
  const [loading, setLoading] = useState(true);

  const buscar = async (tema) => {
    setLoading(true);
    try {
      const url = `https://pixabay.com/api/?key=17294357-d3238409fe83dc90aa58137bc&q=${tema}&per_page=50&image_type=photo`;
      const response = await axios.get(url);
      const imagenes = response.data;
      if (imagenes.total === 0) {
        window.location.reload();
      } else {
        setImagenesData(imagenes);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.getElementById("buscadorInput").focus();
    const temasDefault = ["populares", "paisajes", "paises"];
    const temaRandom =
      temasDefault[Math.floor(Math.random() * temasDefault.length)];
    buscar(temaRandom);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Portada setImagenesData={setImagenesData} setLoading={setLoading} />
      <Imagenes imagenesData={imagenesData} loading={loading} />
    </div>
  );
}

export default App;
