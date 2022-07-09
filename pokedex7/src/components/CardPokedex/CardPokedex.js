import { CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  ConstainerControl,
  ConstainerPokedex,
  ContainerCondicional,
} from "./styled";

export const CardPokedex = (props) => {
  const { name, imageFront, imageBack, stats, types, moves } = props
  const [screen, setScreen] = useState(1);

  return (
    <ConstainerPokedex>
      <ContainerCondicional>
        {screen === 1 && <CardMedia
          component="img"
          height="200"
          width="200"
          image={imageFront}
          alt="green iguana"
          sx={{ borderRaidus: "5px", backgroundColor: "#54661a" }}
        />}

        {screen === 2 && <CardMedia
          component="img"
          height="200"
          width="200"
          image={imageBack}
          alt="green iguana"
          sx={{ borderRaidus: "5px", backgroundColor: "#54661a" }}
        />}

        {screen === 3 && <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="black"
          fontSize={"28px"}
          textAlign={"center"}
          margin={"5px"}
          sx={{ backgroundColor: "white", opacity: "0.6" }}
        >
          Stats
        </Typography>}

        {screen === 3 && stats.map((stat) => {
          return (
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="black"
              fontSize={"28px"}
              textAlign={"center"}
              margin={"5px"}
              sx={{ backgroundColor: "white", opacity: "0.6" }}
            >
              {`${stat.name}: ${stat.baseStat}`}
            </Typography>
          )
        })}

        {screen === 4 && types.map((type) => {
          return (
            <Typography
              key={`${name}-${type}`}
              gutterBottom
              variant="p"
              component="div"
              color="black"
            >
              {type}
            </Typography>
          )
        })}
        {screen === 5 && moves.map((move) => {
          return (
            <Typography
              key={`${name}-${move}`}
              gutterBottom
              variant="p"
              component="div"
              color="black"
            >
              {move}
            </Typography>
          )
        })}
      </ContainerCondicional>

      <ConstainerControl>
        <button onClick={() => setScreen(1)}>{"Frente"}</button>
        <button onClick={() => setScreen(2)}>{"Costas"}</button>
        <button onClick={() => setScreen(3)}>{"Status"}</button>
        <button onClick={() => setScreen(4)}>{"Tipo"}</button>
        <button onClick={() => setScreen(5)}>{"Movimentos"}</button>
      </ConstainerControl>
    </ConstainerPokedex>
  );
};
