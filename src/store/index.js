import { createStore } from 'redux';
import { rootReducer } from './rootReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // browser local storage

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['filters', 'positions'], // keys (enable: local storage)
  // blacklist: ['forbiddenKey'],
};

// reducer wrapper
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persitor = persistStore(store);
