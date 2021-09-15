import axios from "axios";

export const buscar = async (tema) => {
  console.log("Loading...");
  try {
    const url = `https://pixabay.com/api/?key=17294357-d3238409fe83dc90aa58137bc&q=${tema}&image_type=photo`;
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
