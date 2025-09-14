import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating state over here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log(current(state));
      const id = action.payload;
      state.items = state.items.filter(
        (item) => item.card.info.id !== id.card.info.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
