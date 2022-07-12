import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetalhesPage } from "../pages/DetalhesPage/DetalhesPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { PokedexPage } from "../pages/PokedexPage/Pokedex";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="pokedex/" element={<PokedexPage />} />
        <Route path="detalhes/:id" element={<DetalhesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
