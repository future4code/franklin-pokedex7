import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const CardPokemonContainer = styled(Card)`
  background-image: url(https://guikao.files.wordpress.com/2012/01/pokemon_wallpaper01_1680.jpg);
  box-shadow: 5px 5px blue, 10px 10px red, 15px 15px green;
  margin-bottom: 20px;
  :hover {
    box-shadow: 0 0 10px yellow;
  }
`;

export const CardContentText = styled(CardContent)`
  border-radius: 3px;
  margin: 5px 0 0 0;
  background-color: white;
  opacity: 0.6;
`;
