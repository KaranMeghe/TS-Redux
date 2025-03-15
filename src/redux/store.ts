/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, addToCart, removeItem } from './cart-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export { store, addToCart, removeItem };

// ✅ Define the RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
