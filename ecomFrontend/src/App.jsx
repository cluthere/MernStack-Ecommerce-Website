import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/product/Products";
import About from "./components/contact_about/About";
import Contact from "./components/contact_about/Contact"
import Home from "./components/homePage/Home";
import Nav from "./components/navbar/Nav";
import Footer from "./components/navbar/Footer"


export default function App(){
  return(
    <>
    <div className="bg-white fixed top-0 w-full z-10">
    <Nav/>
    </div>
    <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer/>
    </div>
    </>
  )
}