import React from "react";
import "../Styles/Header.css";

const Header = () => {
  const verImagenes = () => {
    document.getElementById("imagenesSeccion").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="headerContainer">
      <h1 className="titulo">P</h1>
      <div className="menu">
        <a href="!#">Categorías</a>
        <a href="!#">Ordenar por</a>
        <button onClick={verImagenes}>Ver imagenes</button>
      </div>
    </div>
  );
};

export default Header;
