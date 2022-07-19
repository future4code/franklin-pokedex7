import { CardMedia, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { CardPokedex } from "../../components/CardPokedex/CardPokedex";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { DetalhesContainer, StyledImage } from "./styled";
import Headers from "../../components/CardHeader/Headers";
import cabeca from "../../assets/pikachu2.png";
import rabo from "../../assets/RaboPikachu2.png";
import { goToHomePage, goToPokedexPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

export const DetalhesPage = () => {
  const { id } = useParams();
  const data = useRequestData({}, `${BASE_URL}/pokemon/${id}`);

  const navigate = useNavigate()

  return (
    <>
      <Headers 

      image={cabeca} 
      botao={"Home"} 
      onClick={() => goToHomePage(navigate)}

      titulo={
        <a href="https://fontmeme.com/pt/fonte-de-pokemon/">
          <img src="https://fontmeme.com/permalink/220712/f0e88c5baeeb3a6acad85049b4215468.png" alt="fonte-de-pokemon" border="0" />
        </a>}

      imageRight={rabo} 
      botaoDir={"Pokédex"} 
      onClickRightButton={() => goToPokedexPage(navigate)} 

      />

      

      <DetalhesContainer>
        {data.name && <CardPokedex
          name={id}
          imageFront={data.sprites.front_default}
          imageBack={data.sprites.back_default}
          stats={data.stats.map((stat) => {
            return { name: stat.stat.name, baseStat: stat.base_stat }
          })}
          types={data.types.map((type) => type.type.name)}
          moves={data.moves.slice(0, 5).map((move) => move.move.name)}
        />}
      </DetalhesContainer> 
    </>    
  );
};
