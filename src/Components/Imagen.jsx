import React from "react";

const Imagen = ({ data }) => {
  return <img src={data.previewURL} alt="imagen" />;
};

export default Imagen;
