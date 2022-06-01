import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Detail from "./pages/detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
