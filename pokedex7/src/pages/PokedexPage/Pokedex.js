import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { BASE_URL } from "../../constants/urls";
import { ContextPokedex } from "../../contexts/ContextPokedex";
import { goToHomePage } from "../../router/coordinator";
import { Pokedex, ContainerPokedex } from "./styles";
import logo from "../../assets/pikachu2.png";
import disable from "../../assets/disable.png";
import Headers from "../../components/CardHeader/Headers";

export const PokedexPage = () => {
  const { pokedex, setPokedex } = useContext(ContextPokedex);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(pokedex)
  }, [pokedex]);

  return (
    <Pokedex>
      <Headers 
        image={logo} 
        botao={"Home"} 
        onClick={() => goToHomePage(navigate)}
        titulo={
          <a href="https://fontmeme.com/pt/fonte-de-pokemon/">
            <img src="https://fontmeme.com/permalink/220712/c9f75b884b78d96bfb6847e16fc7b8bb.png" alt="fonte-de-pokemon" border="0" />
          </a>}

        imageRight={disable} 
        botaoDir={""} 
        onClickRighButton={""} 
      />

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
