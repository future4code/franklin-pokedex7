import React from "react";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { ConstainerHome } from "./styled";

export const HomePage = () => {
  const data = useRequestData({}, `${BASE_URL}/pokemon/`);
  return (
    <>
      <ConstainerHome>
        {data.results &&
          data.results.map((pokemon) => {
            return (
              <CardPokemon
                key={pokemon.name}
                url={pokemon.url}
                name={pokemon.name}
              />
            );
          })}
      </ConstainerHome>
    </>
  );
};
