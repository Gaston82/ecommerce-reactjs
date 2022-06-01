import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsServices";
import Product from "./product";

export default function ListProducts({ products }) {
  if (!products) {
    return <p>Loading...</p>;
  }
  return products.map((product) => (
    <Product
      key={product.id}
      title={product.title}
      image={product.image}
      id={product.id}
    />
  ));
}
