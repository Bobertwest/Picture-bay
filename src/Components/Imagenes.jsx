import React, { useContext } from "react";
import { ImagenesContext } from "../Context/ImagenesProvider";
import "../Styles/Imagenes.css";
import Imagen from "./Imagen";
import Loading from "./Loading";

const Imagenes = () => {
  const { imagenesData, loading } = useContext(ImagenesContext);

  return (
    <div className="iimagenesContainer">
      {loading ? (
        <Loading />
      ) : (
        <div id="imagenesSeccion" className="imagenesPage">
          {imagenesData.total === 0 ? (
            <h1>No se encontraron resultados</h1>
          ) : (
            <div className="imagen">
              {imagenesData.hits.map((pic) => (
                <Imagen data={pic} key={pic.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Imagenes;
