import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './constants';

export const addFilter = (filter) => {
  return {
    type: ADD_FILTER,
    payload: { filter },
  };
};

export const removeFilter = (filter) => {
  return {
    type: REMOVE_FILTER,
    payload: { filter },
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER,
  };
};
