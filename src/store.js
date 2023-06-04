import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from 'features/filter/filter-slice';
import { positionsReducer } from 'features/positions/position-slice';

export const store = configureStore({
  devTools: true,
  reducer: { filters: filterReducer, positions: positionsReducer },
});
