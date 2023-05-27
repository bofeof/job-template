export const selectAllPositions = (state) => {
  return state.positions; //from reducer positions: positionReducer, state is a total state of rootReducer
};

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) {
    return state.positions; // rootReducer: positions: positionReducer
  } else {
    // filter all data from json, app.js
    return state.positions.filter((position) => {
      // check every position in list
      const positionFilters = [].concat(position.role, position.level, ...position.languages, ...position.tools);
      return filters.every((filter) => positionFilters.includes(filter));
    });
  }
};
