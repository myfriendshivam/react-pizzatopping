import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';

// Configure Redux store with pizzaSlice reducer
const store = configureStore({
  reducer: {
    pizza: pizzaReducer
  }
});
export default store;