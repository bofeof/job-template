import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './constants';

export const filterReducer = (state = [], action) => {
  switch (action.type) {
    case CLEAR_FILTER: {
      return [];
    }

    case ADD_FILTER: {
      if (!state.includes(action.payload.filter)) {
        return [...state, action.payload.filter];
      }
      return state;
    }

    case REMOVE_FILTER: {
      return state.filter((item) => item !== action.payload.filter);
    }

    default: {
      return state;
    }
  }
};
