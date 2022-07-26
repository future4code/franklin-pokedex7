import React, { useContext } from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { CardContentText, CardPokemonContainer } from "./styled";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { goToDetalhesPage, goToPokedexPage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { ContextPokedex } from "../../contexts/ContextPokedex";

export const CardPokemon = (props) => {
  const { url, name } = props;
  const { pokedex, setPokedex } = useContext(ContextPokedex)

  const data = useRequestData({}, url);
  const pokeDescription = useRequestData(
    {},
    `${BASE_URL}/pokemon-species/${name}`
  );

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
          {pokeDescription.flavor_text_entries &&
            pokeDescription.flavor_text_entries[0].flavor_text}
        </Typography>
      </CardContentText>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {pokedex.indexOf(name) === -1 ? <Button
          onClick={() => setPokedex([...pokedex, name])}
          color="secundary"
          variant="contained"
          size="medium"
        >
          adicionar
        </Button>
        :
        <Button
          onClick={() => setPokedex(pokedex.filter((pokemon) => pokemon !== name))}
          color="secundary"
          variant="contained"
          size="medium"
        >
          remover
        </Button>}
        <Button
          size="medium"
          variant="contained"
          color="secundary"
          onClick={() => goToDetalhesPage(navigate, name)}
        >
          ver detalhe
        </Button>
      </CardActions>
    </CardPokemonContainer>
  );
};
