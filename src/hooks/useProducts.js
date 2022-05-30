import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsServices";

export default function useProducts() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      console.log(response);
      setListProducts(response);
    };
    fetchProducts();
  }, []);

  return { listProducts };
}
