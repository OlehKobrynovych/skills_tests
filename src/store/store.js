import { configureStore } from '@reduxjs/toolkit';
import CustomizerReducer from './customizer/CustomizerSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    userSlice: userSlice,
  },
});

export default store;
