import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import reducerCombiner from './reducerCombiner';
import {composeWithDevTools} from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const persistConfig = {
  key: 'javalis-store',
  storage: storage,
  stateReconciler: autoMergeLevel2,
  whitList: ['voters'],
  blackList: []
};

const pReducer = persistReducer(persistConfig, reducerCombiner);

export const store = createStore(
  pReducer,
  initialState,
  (!process.env.NODE_ENV || process.env.NODE_ENV === "development1") ?
    composeWithDevTools(
      compose(
        applyMiddleware(...middleware)
      )) : applyMiddleware(...middleware)
);

export const persistor = persistStore(store);
