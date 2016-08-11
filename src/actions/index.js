import { FILTER_POKEMON } from '../constants';

export function filter(query) {
  return {
    type: FILTER_POKEMON,
    payload: query,
  }
}
