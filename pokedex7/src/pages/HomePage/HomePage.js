import React from "react";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { ContainerHome } from "./styled";
import { goToPokedexPage } from "../../router/coordinator";

export const HomePage = (props) => {
  const data = useRequestData({}, `${BASE_URL}/pokemon/`);
  const navigate = useNavigate();

  return (
    <>
      <ContainerHome>
        <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
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
      </ContainerHome>
    </>
  );
};
