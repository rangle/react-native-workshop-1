import { NAVIGATION, POKEMON} from '../constants';
import { getPokemon, getAllPokemon } from '../pokemon-api';

export function filter(query) {
  return {
    type: POKEMON.FILTER_POKEMON,
    payload: query,
  }
}

export function viewAllPokemon() {
  // console.log('viewAllPokemon');
  return dispatch => {
    getAllPokemon()
      .then(pokemon => {
        dispatch({
          type: POKEMON.RECEIVED_ALL_POKEMONS,
          payload: pokemon.slice(0,50),
        })
      })
      .catch(error => {
        console.warn(error);
      })
  }
}