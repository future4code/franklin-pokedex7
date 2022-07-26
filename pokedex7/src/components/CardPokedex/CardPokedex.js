import { height } from "@mui/system";
import radioButton from "../../assets/radioButton.jpeg";
import ovalButton from "../../assets/ovalButton.jpeg";
import React, { useState } from "react";
import { goToPokedexPage } from "../../router/coordinator";
import {
  ConstainerControl,
  ContainerButton01,
  ContainerCondicional,
  ContainerPokedex,
  ImagemContainer,
  OvalButton,
  PokedexText,
  RadioButton,
} from "./styled";
import { useNavigate } from "react-router-dom";

export const CardPokedex = (props) => {
  const navigate = useNavigate();
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
        <ContainerButton01>
          <button
            style={{
              height: "58px",
              width: "58px",
              borderRadius: "8px",
              boxShadow: "3px 10px",
            }}
            onClick={() => setScreen(1)}
          >
            {"Frente"}
          </button>

          <RadioButton>
            <button
              style={{
                borderRadius: "50%",
                height: "58px",
                width: "58px",
                borderStyle: "none",
                boxShadow: "3px 10px",
                margin: "0 10px 0 5px",
                background: `url(${radioButton})`,
              }}
              onClick={() => setScreen(2)}
            >
              {"Costas"}
            </button>

            <button
              style={{
                borderRadius: "50%",
                height: "58px",
                width: "58px",
                borderStyle: "none",
                boxShadow: "3px 10px",
                margin: "0 5px 0 10px",
                background: `url(${radioButton})`,
              }}
              onClick={() => setScreen(3)}
            >
              {"Status"}
            </button>
          </RadioButton>
        </ContainerButton01>
        <OvalButton>
          <button
            style={{
              borderRadius: "8px",
              height: "60px",
              width: "100px",
              // borderStyle: "none",
              boxShadow: "3px 10px",
              // margin: "0 5px 0 5px",
              background: `url(${ovalButton})`,
            }}
            onClick={() => setScreen(4)}
          >
            {"Tipo"}
          </button>

          <button
            style={{
              borderRadius: "8px",
              height: "60px",
              width: "100px",
              // borderStyle: "none",
              boxShadow: "3px 10px",
              // margin: "0 5px 0 5px",
              background: `url(${ovalButton})`,
            }}
            onClick={() => setScreen(5)}
          >
            {"Movimentos"}
          </button>
          <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
        </OvalButton>
      </ConstainerControl>
    </ContainerPokedex>
  );
};
