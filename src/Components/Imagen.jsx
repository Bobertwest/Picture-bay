import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Imagen = ({ data }) => {
  return (
    <div
      className="imagenContainer"
      onClick={() => {
        window.open(data.largeImageURL, "_blank");
      }}>
      <img src={data.largeImageURL} alt="imagen" />
      <div className="infoImage">
        <p className="likes">
          <BiLike />
          {` ${data.likes}`}
        </p>
        <p className="likes">
          <AiOutlineCloudDownload />
          {` ${data.downloads}`}
        </p>
      </div>
    </div>
  );
};

export default Imagen;
