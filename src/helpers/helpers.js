export const headerPosition = (altura) => {
  var posicion;
  if (altura >= 11) {
    posicion = "Stiky";
  } else {
    posicion = "Absolute";
  }
  return posicion;
};

export const imagenesPorPagina = 21;
