import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";

import videos from '../slice/VideoSlice';
import Users from '../slice/UserSlice';
import UserActions from '../slice/UserActionsSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['videos']
}

const rootReducer = combineReducers({
  videos,
  Users,
  UserActions
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});


export default store;
