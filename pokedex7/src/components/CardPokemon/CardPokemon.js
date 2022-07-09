import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { CardContentText, CardPokemonContainer } from "./styled";

export const CardPokemon = (props) => {
  return (
    <CardPokemonContainer
      sx={{
        maxWidth: 300,
        padding: "20px",
        backgroundColor: "secundary",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png"
        alt="green iguana"
        sx={{ borderRaidus: "5px" }}
      />
      <CardContentText>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContentText>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button color="secundary" variant="contained" size="medium">
          adicionar
        </Button>
        <Button size="medium" variant="contained" color="secundary">
          ver detalhe
        </Button>
      </CardActions>
    </CardPokemonContainer>
  );
};
