import { FILTER_POKEMON } from '../constants';

export function filter(payload) {
  return {
    type: FILTER_POKEMON,
    payload,
  }
}
