import { GET_CAFES, POST_CAFE } from '../actions/types.js'

const initialState = {
  cafes: [
    { name: '8th & Roast' },
    { name: 'Dose' },
  ],
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CAFES:
      return {
        ...state,
      };
    case POST_CAFE:
      return {
        ...state,
        cafes: [action.payload, ...state.cafes]

      };
    default:
      return state;
  }
}
