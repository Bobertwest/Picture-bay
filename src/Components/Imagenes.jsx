import React, { Fragment } from "react";
import Imagen from "./Imagen";

const Imagenes = ({ imagenesData, loading }) => {
  return (
    <div>
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <div id="imagenesSeccion">
          {imagenesData.total === 0 ? (
            <h1>No se encontraron resultados</h1>
          ) : (
            <Fragment>
              {imagenesData.hits.map((pic) => (
                <Imagen data={pic} key={pic.id} />
              ))}
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export default Imagenes;
