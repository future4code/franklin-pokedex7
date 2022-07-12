import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { BASE_URL } from "../../constants/urls";
import { ContextPokedex } from "../../contexts/ContextPokedex";
import { goToHomePage } from "../../router/coordinator";
import { Pokedex, ContainerPokedex } from "./styles";

export const PokedexPage = () => {
  const { pokedex, setPokedex } = useContext(ContextPokedex);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(pokedex)
  }, [pokedex]);

  return (
    <Pokedex>
      <button onClick={() => goToHomePage(navigate)}>Home</button>
      <ContainerPokedex>
        {pokedex.map((pokemon) => {
          return (
            <CardPokemon
              key={`${BASE_URL}/pokemon/${pokemon}`}
              url={`${BASE_URL}/pokemon/${pokemon}`}
              name={pokemon}
            />
          );
        })}
      </ContainerPokedex>
    </Pokedex>
  );
};
