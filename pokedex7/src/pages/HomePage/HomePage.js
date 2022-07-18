import React from "react";
import { useNavigate } from "react-router-dom";
import { CardPokemon } from "../../components/CardPokemon/CardPokemon";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { ContainerHome } from "./styled";
import { goToPokedexPage } from "../../router/coordinator";
import Headers from "../../components/CardHeader/Headers";
import logo from "../../assets/iconPoke.png";
import disable from "../../assets/disable.png";

export const HomePage = (props) => {
  const data = useRequestData({}, `${BASE_URL}/pokemon/`);
  const navigate = useNavigate();

  return (
    <>
      <Headers 

      image={logo} 
      botao={"Pokédex"} 
      onClick={() => goToPokedexPage(navigate)} 

      titulo={
        <a href="https://fontmeme.com/pt/fonte-de-pokemon/">
          <img src="https://fontmeme.com/permalink/220712/9831eee22564648114fefaf45fc09b4b.png" alt="fonte-de-pokemon" border="0" />  
        </a>}

      imageRight={disable} 
      botaoDir={""} 
      onClickRighButton={""} 


      />

      <ContainerHome>
        
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
