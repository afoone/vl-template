import { applyMiddleware } from "redux";
import { createStore } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(persistedReducer, composeEnhancers);
export const persistor = persistStore(store);