import axios from "axios";

export const buscar = async (tema) => {
  console.log("Loading...");
  try {
    const url = `https://pixabay.com/api/?key=17294357-d3238409fe83dc90aa58137bc&q=${tema}&image_type=photo`;
    const response = await axios.get(url);
    const imagenes = response.data;
    console.log(imagenes);
  } catch (error) {
    console.log(error);
  }
};

export const datosDeImagenes = [];
