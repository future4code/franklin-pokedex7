import { CardMedia } from "@mui/material";
import styled from "styled-components";

export const ContainerPokedex = styled.div`
  background-color: red;
  padding-top: 20px;
  border-radius: 8px;
  width: 500px;
  height: 600px;
  box-shadow: 10px 10px;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const ConstainerControl = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;
  justify-items: center;
  margin: auto;
  row-gap: 30px;
`;

export const ContainerButton01 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RadioButton = styled.div`
  transform: rotate(-10deg);
`;

export const PlusButton = styled.div``;

export const OvalButton = styled.div`
  margin: auto;
`;

export const ContainerCondicional = styled.div`
  border: 10px solid;
  margin: 30px;
  height: 300px;
  background-color: #54661a;
  padding: 10px;
  border-radius: 5px;
`;

export const ImagemContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const PokedexText = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
  font-family: "Press Start 2P", cursive;
`;
