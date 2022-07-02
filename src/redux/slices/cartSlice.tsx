import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getHoneyFromLS } from '../../utils/getHoneyFromLS';
import { RootState } from '../store';

 export type CartItem = {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  size: number;
  count: number,
}

interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const {items, totalPrice}= getHoneyFromLS();

const initialState: CartSliceState = {
  items,
  totalPrice,
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id == action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartSelector = (state: RootState) => state.cart;

export const { addItem, removeItem, clearItem, minusItem } = cart.actions;

export default cart.reducer;
