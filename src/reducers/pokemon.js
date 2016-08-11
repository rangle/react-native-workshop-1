import { fromJS } from 'immutable';
import { FILTER_POKEMON } from '../constants';
import pokemonData from '../utils/pokemon-data.json';

const initialState = fromJS({
  all: pokemonData.results,
  query: '',
});

function pokemon(state = initialState, action = {}) {
  switch (action.type) {
    case FILTER_POKEMON:
      return state.set('query', fromJS(action.payload));
    default:
      return state;
  }
}

export default pokemon;
