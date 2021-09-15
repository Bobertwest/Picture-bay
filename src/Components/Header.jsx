import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1 className="titulo">P</h1>
      <div className="menu">
        <a href="!#">Categorías</a>
        <a href="!#">Ordenar por</a>
        <a href="!#">Ver imagenes</a>
      </div>
    </div>
  );
};

export default Header;
