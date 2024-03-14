import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Meal from "./pages/meal";
import Meals from "./pages/meals";
import Home from "./pages/Home";
import MealsBySearch from "./pages/mealsBySearch";
import "./App.css";
import Category from "./pages/category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Search />
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/category" element={<Category />} />
         <Route path="/meals/meal/:id" element={<Meal/>} />
         <Route path="/meals/:id" element={<Meals/>} />
         <Route path="/mealsbysearch/:id" element={<MealsBySearch/>} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
