import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import axios from "axios";

const Buscador = ({ setImagenesData, setLoading }) => {
  const [busqueda, setBusqueda] = useState("");

  const ejecutarBusqueda = (e) => {
    e.preventDefault();
    buscar(busqueda);
  };

  const buscar = async (tema) => {
    setLoading(true);
    try {
      const url = `https://pixabay.com/api/?key=17294357-d3238409fe83dc90aa58137bc&q=${tema}&image_type=photo`;
      const response = await axios.get(url);
      const imagenes = response.data;
      setImagenesData(imagenes);
      setLoading(false);
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
