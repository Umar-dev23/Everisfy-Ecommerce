import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    updateProduct: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index] = action.payload;
      }
    },
    clearAll: (state) => {
      state.cart = [];
    },
  },
});

export const { addProduct, removeProduct, updateProduct, clearAll } =
  productsSlice.actions;

export default productsSlice.reducer;
