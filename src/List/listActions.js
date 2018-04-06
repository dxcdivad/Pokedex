import axios from 'axios';

export function getPokemon() {
  const request = axios.get('https://pokeapi.co/api/v2/pokemon')
  console.log(request);

  return {
    type: 'GET_POKEMON',
    payload: request
  }
}