import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterReducer } from 'features/filter/filter-slice';
import { positionsReducer } from 'features/positions/position-slice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  filters: filterReducer,
  positions: positionsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: true,
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
