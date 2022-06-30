import axios from "axios";

export async function getAllProducts() {
  const { data } = await axios("https://fakestoreapi.com/products");
  //console.log(data);

  return data;
}

export async function getById(id) {
  const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
  console.log(data);
  return data;
}
