import React, { useState } from "react";
import { headerPosition } from "../helpers/helpers";
import "../Styles/Header.css";

const Header = () => {
  const [altura, setAltura] = useState(parseInt(window.pageYOffset));

  const verImagenes = () => {
    document.getElementById("imagenesSeccion").scrollIntoView({
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    setAltura(parseInt(window.pageYOffset));
  });

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={headerPosition(altura)}>
      <h1 className="titulo" onClick={goToTop}>
        P
      </h1>
      <div className="menu">
        <button onClick={verImagenes}>Ver imagenes</button>
      </div>
    </div>
  );
};

export default Header;
