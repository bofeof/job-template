import { ADD_POSITIONS } from './constants';

export const addPositions = (positions) => {
  return {
    type: ADD_POSITIONS,
    payload: {positions},
  };
};
