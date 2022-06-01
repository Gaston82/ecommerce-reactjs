import Header from "../components/header";
import ListProducts from "../components/listProducts";
import useProducts from "../hooks/useProducts";

export default function Home() {
  const { listProducts } = useProducts();
  if (!listProducts) {
    return <p>Loading...</p>;
  }
  // console.log(listProducts);
  return (
    <>
      <Header />
      <ListProducts products={listProducts} />
    </>
  );
}
