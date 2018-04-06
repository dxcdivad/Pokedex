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

    case 'GET_IMAGE_FULFILLED': {
      return {
        ...state,
        image: payload.data.sprites
      }
    }

    default: {
      return state
    }
  }
}