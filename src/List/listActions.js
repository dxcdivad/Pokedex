import axios from 'axios';

export function getPokemon() {
  const request = axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    
  return {
    type: 'GET_POKEMON',
    payload: request
  }
}

export function getImage() {
  const imgRequest = axios.get(`http://pokeapi.salestock.net/api/v2/pokemon/1`)
  console.log(imgRequest);
  
  return {
    type: 'GET_IMAGE',
    payload: imgRequest
  }
}