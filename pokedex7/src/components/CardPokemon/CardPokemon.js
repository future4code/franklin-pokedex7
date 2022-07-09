import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { CardContentText, CardPokemonContainer } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { goToDetalhesPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";

export const CardPokemon = (props) => {
  const { url, name } = props;

  const data = useRequestData({}, url);
  const pokeDescription = useRequestData({}, `${BASE_URL}/pokemon-species/${name}`);

  const navigate = useNavigate();

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
        image={data.sprites ? data.sprites.front_default : ""}
        alt="green iguana"
        sx={{ borderRaidus: "5px" }}
      />
      <CardContentText>
        <Typography gutterBottom variant="h5" component="div" color="black">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pokeDescription.flavor_text_entries && pokeDescription.flavor_text_entries[0].flavor_text}
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
        <Button size="medium" variant="contained" color="secundary" onClick={() => goToDetalhesPage(navigate, name)}>
          ver detalhe
        </Button>
      </CardActions>
    </CardPokemonContainer>
  );
};
