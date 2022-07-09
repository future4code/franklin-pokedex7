import React from "react";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { ConstainerHome } from "./styled";

export const HomePage = () => {
  return (
    <>
      Home
      <ConstainerHome>
        <CardPokemon />
        <CardPokemon />
        <CardPokemon />
      </ConstainerHome>
    </>
  );
};
