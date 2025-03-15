/** @format */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CARTITEM {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface CARTSTATE {
  items: CARTITEM[];
}

const initialState: CARTSTATE = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<{ id: string; title: string; price: number }>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
