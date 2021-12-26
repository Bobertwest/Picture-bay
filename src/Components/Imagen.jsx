import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";

const Imagen = ({ data }) => {
  const [imageURL, setImageURL] = useState(data.previewURL);

  const loadImageHD = () => {
    setImageURL(data.largeImageURL);
  };
  return (
    <div
      className="imagenContainer"
      onClick={() => {
        window.open(data.largeImageURL, "_blank");
      }}>
      <LazyLoadImage src={imageURL} alt="imagen" afterLoad={loadImageHD} />
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
