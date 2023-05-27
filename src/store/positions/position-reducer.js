import { ADD_POSITIONS } from './constants';

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.payload.positions;
    }
    default: {
      return state;
    }
  }
};
