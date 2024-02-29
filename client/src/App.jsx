import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Header from "./components/Header";
import Recipes from "./pages/Recipes";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import CreateRecipe from "./pages/CreateRecipe";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/create-recipe" element={<CreateRecipe />} />
        </Route>
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
