import axios from 'axios';

const initialState = {
    pokemon: {}
}

const GET_POKEMON = 'GET_POKEMON';

export function getPokemon(){
    const rand = Math.ceil(Math.random() * 151);
    const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`);

    return {
        type: GET_POKEMON,
        payload: pokemon
    }
}

export default function pokeReducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_POKEMON + '_PENDING':
            return state;
        case GET_POKEMON + '_FULFILLED':
            return {...state, pokemon: payload};
        case GET_POKEMON + '_REJECTED':
            return state;
        default:
            return state;
    }
}