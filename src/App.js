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

function App() {


  const {setUser} = useContext(userCont)

  // Recuperamos sesión del usuario
  useEffect(()=>{
    get("/api/auth/validate")
    .then(result=>{
      setUser({
        logged:true,
        user:result.user
      })
    })
    .catch(error=>{
      //console.log(error)
    })
  },[setUser])


  return (
    <div className="App">
      <Navbar />
      <NavbarShop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/store" element={<Store />} />

      </Routes>
    </div>
  );
}

export default App;
