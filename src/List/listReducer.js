const defaultState = {
  data: []
}

export default function listReducer (state=defaultState, action) {
  const { type, payload } = action


  switch(type) {
    case 'GET_POKEMON_FULFILLED': {
      return {
      ...state,
      data: payload.data.results
      }
    }
    
    default: {
      return state
    }
  }
}