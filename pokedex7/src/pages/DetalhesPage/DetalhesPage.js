import { CardMedia, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { CardPokedex } from "../../components/CardPokedex/CardPokedex";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { DetalhesContainer } from "./styled";

export const DetalhesPage = () => {
  const { id } = useParams();
  const data = useRequestData({}, `${BASE_URL}/pokemon/${id}`);

  return (
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
  );
};
