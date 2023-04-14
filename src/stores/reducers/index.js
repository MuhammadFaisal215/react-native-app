import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todoReducer from './todoReducer';
import albumReducer from './albumReducer';
import albumDetailReducer from './albumDetailReducer';
import thunk from 'redux-thunk';

// Configure Redux Persist with the root reducer and storage engine
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

// Combine the reducers using the combineReducers function from Redux Toolkit
const rootReducer = combineReducers({
  todos: todoReducer,
  allAlbums: albumReducer,
  albumDetail: albumDetailReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],

});

// Create the persisted store
export const persistor = persistStore(store);