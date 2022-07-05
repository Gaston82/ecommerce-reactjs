import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import { Navbar } from "./components/layouts/Navbar";
import { Home } from "./pages/Home";
import { NavbarShop } from "./components/layouts/NavbarShop";
import { get } from "./api";

import { userCont } from "./context/UserContext";
import { Store } from "./components/store/Store";
import { Detail } from "./pages/Detail";
import { Provider } from "react-redux";
import { SelectedProductsDetail } from "./components/store/SelectedProductsDetail";
import { store } from "./redux/store/store";
import { cartContext } from './context/CartContext';
import { types } from './types/types';
import "./App.css";
import { AddProduct } from "./components/store/AddProduct";
import { ListAllProducts } from "./components/store/ListAllProducts";



function App() {
  const { setUser } = useContext(userCont);
  const {setItems} = useContext(cartContext)

  // Recuperamos sesión del usuario
  useEffect(() => {
    get("/api/auth/validate")
      .then(result=>{
        setUser({type: types.login,payload:result.user})
        get("/api/cart")
        .then(data=>{
          setItems({
            type:"UPDATE",
            payload:data
          })
        })
        .catch(console.log)
      })
      .catch(error=>console.log(error))
    },[setUser,setItems])

  return (
    <Provider store={store}>
      <Navbar />
      <NavbarShop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/store" element={<Store />} />
        <Route
          path="/selectedProductsDetail"
          element={<SelectedProductsDetail />}
        />
        <Route path="/listAllProducts" element={<ListAllProducts />} />
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </Provider>
  );
}

export default App;
