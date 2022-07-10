import React, { useState } from "react";
import {
  ConstainerControl,
  ContainerCondicional,
  ContainerPokedex,
  ImagemContainer,
  PokedexText,
} from "./styled";

export const CardPokedex = (props) => {
  const { name, imageFront, imageBack, stats, types, moves } = props;
  const [screen, setScreen] = useState(1);

  return (
    <ContainerPokedex>
      <ContainerCondicional>
        {screen === 1 && (
          <ImagemContainer>
            <img
              src={imageFront}
              alt={`imagem do pokemon ${name}`}
              style={{ height: "300px", textAlign: "center" }}
            ></img>
          </ImagemContainer>
        )}

        {screen === 2 && (
          <ImagemContainer>
            <img
              src={imageBack}
              alt={`imagem do pokemon ${name}`}
              style={{ height: "300px", textAlign: "center" }}
            ></img>
          </ImagemContainer>
        )}

        {screen === 3 && <PokedexText>Status</PokedexText>}

        {screen === 3 &&
          stats.map((stat) => {
            return (
              <PokedexText>{`${stat.name}: ${stat.baseStat}`}</PokedexText>
            );
          })}

        {screen === 4 &&
          types.map((type) => {
            return <PokedexText key={`${name}-${type}`}>{type}</PokedexText>;
          })}
        {screen === 5 &&
          moves.map((move) => {
            return <PokedexText key={`${name}-${move}`}>{move}</PokedexText>;
          })}
      </ContainerCondicional>

      <ConstainerControl>
        <button
          style={{ margin: "0 30px 0 30px" }}
          onClick={() => setScreen(1)}
        >
          {"Frente"}
        </button>
        <button onClick={() => setScreen(2)}>{"Costas"}</button>
        <button onClick={() => setScreen(3)}>{"Status"}</button>
        <button onClick={() => setScreen(4)}>{"Tipo"}</button>
        <button onClick={() => setScreen(5)}>{"Movimentos"}</button>
      </ConstainerControl>
    </ContainerPokedex>
  );
};
