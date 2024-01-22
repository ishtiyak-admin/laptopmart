import { useState } from "react";
import { Brand } from "./components/Brand";
import Footer from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Alert from "./Alert";
import { Route, Routes } from "react-router-dom";
import ProductView from "./components/ProductView";
import Products from "./components/Products";

function App() {



  return (
    <Routes>
      <Route exact path="/" element={<Products/>} />
      <Route path={"/product/:id"} element={<ProductView/>} />
    </Routes>
    
  );
}

export default App;
