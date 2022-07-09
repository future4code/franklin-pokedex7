import { CardMedia, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { DetalhesContainer, HabilidadesContainer, ImagemContainer, MovimentosContainer, StatusContainer, TipoContainer } from "./styled";

export const DetalhesPage = () => {
  const { id } = useParams();
  const data = useRequestData({}, `${BASE_URL}/pokemon/${id}`)

  return (
    <DetalhesContainer>
      <ImagemContainer>
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={data.sprites ? data.sprites.front_default : ""}
          alt="green iguana"
          sx={{ borderRaidus: "5px" }}
        />
        <CardMedia
          component="img"
          height="200"
          width="200"
          image={data.sprites ? data.sprites.back_default : ""}
          alt="green iguana"
          sx={{ borderRaidus: "5px" }}
        />
      </ImagemContainer>
      <StatusContainer>
        <Typography gutterBottom variant="h5" component="div" color="black">
          Stats
        </Typography>
        {data.stats && data.stats.map((stat) => {
          return (
            <Typography key={`${data.name}-${stat.stat.name}`} gutterBottom variant="p" component="div" color="black">
              {stat.stat.name}: {stat.base_stat}
            </Typography>
          )
        })}
      </StatusContainer>
      <HabilidadesContainer>
        <TipoContainer>
          {data.types && data.types.map((type) => {
            return (
              <Typography key={`${data.name}-${type.type.name}`} gutterBottom variant="p" component="div" color="black">
                {type.type.name}
              </Typography>
            )
          })}
        </TipoContainer>
        <MovimentosContainer>
          {data.moves && data.moves.slice(0, 5).map((move) => {
            return (
              <Typography key={`${data.name}-${move.move.name}`} gutterBottom variant="p" component="div" color="black">
                {move.move.name}
              </Typography>
            )
          })}
        </MovimentosContainer>
      </HabilidadesContainer>
    </DetalhesContainer>
  );
};
