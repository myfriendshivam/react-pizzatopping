import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toppings: []   // // default empty topping
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    // Action to add a new topping
    addTopping: (state, action) => {
      if (!state.toppings.includes(action.payload)) {
        state.toppings.push(action.payload);
      }
    },
    // Action to remove a topping
    removeTopping: (state, action) => {
      state.toppings = state.toppings.filter(t => t !== action.payload);
    }
  }
});

export const { addTopping, removeTopping } = pizzaSlice.actions;
export default pizzaSlice.reducer;
