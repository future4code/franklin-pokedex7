export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToDetalhesPage = (navigate, id) => {
  navigate(`/detalhes/${id}`);
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};
