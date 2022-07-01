import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import { getAllProducts } from "../services/productsServices";

export default function useProducts() {
  // const [listProducts, setListProducts] = useState([]);

  const listProducts = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      // console.log(response);
      // setListProducts(response);
      dispatch(setProducts(response));
    };
    fetchProducts();
  }, []);

  return listProducts;
}
