import { GET_CAFES } from '../actions/types.js'

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
    default:
      return state;
  }
}
