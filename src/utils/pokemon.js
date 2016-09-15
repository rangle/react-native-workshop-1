export function getPokemonImageUrl(pokemon) {
  // Some quick parsing to get a bit of extra information for ourselves
  const re = /^.*pokemon\/(.+)\/$/;
  const matches = re.exec(pokemon.url);
  const pokemonID = matches ? matches[1] : null;
  const imageUrl = (
   pokemonID ? `http://pokeapi.co/media/sprites/pokemon/${ pokemonID }.png` :
               null
  );

  return imageUrl;
}
