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
import UpdateRecipe from "./pages/UpdateRecipe";
import RecipePage from "./pages/RecipePage";
import RecipeListPage from "./pages/RecipeListPage";

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
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/update-recipe/:recipeId" element={<UpdateRecipe />} />
          <Route path="/recipe/:recipeSlug" element={<RecipePage />} />
          <Route path="/recipe-list" element={<RecipeListPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
