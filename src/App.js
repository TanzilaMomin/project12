import React from "react";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Contact } from "./components/Contact";
import { Product } from "./components/Product";
import { Navigation } from "./components/Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Navigation />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/product" element={<Product />} />
           
        </Routes>
    </BrowserRouter>
  );
}

export default App;
