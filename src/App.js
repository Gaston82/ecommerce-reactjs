import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import { Navbar } from "./components/layouts/Navbar";
import { Home } from "./pages/Home";
import { NavbarShop } from "./components/layouts/NavbarShop";
import { useEffect } from "react";
import { get } from "./api";
import { useContext } from "react";
import { userCont } from "./context/UserContext";
import { Store } from "./components/store/Store";
import { Detail } from "./pages/Detail";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { SelectedProductsDetail } from "./components/store/SelectedProductsDetail";
import { CrudProduct } from "./components/store/CrudProduct";

function App() {
  const { setUser } = useContext(userCont);

  // Recuperamos sesión del usuario
  useEffect(() => {
    get("/api/auth/validate")
      .then((result) => {
        setUser({
          logged: true,
          user: result.user,
        });
      })
      .catch((error) => {
        //console.log(error)
      });
  }, [setUser]);

  return (
    <Provider store={ store }>
      <Navbar />
      <NavbarShop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/store" element={<Store />} />
        <Route path="/selectedProductsDetail" element={<SelectedProductsDetail />} />
        <Route path="/crudProducts" element={ <CrudProduct />} />
      </Routes>
    </Provider>
  );
}

export default App;
