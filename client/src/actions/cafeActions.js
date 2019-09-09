import { GET_CAFES, POST_CAFE } from './types.js';

export const getCafes = () => {
  return {
    type: GET_CAFES
  }
}

export const postCafe = cafe => {
  return {
    type: POST_CAFE,
    payload: cafe
  }
}
