import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import honey from './slices/honeySlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    honey,
  },
});
