import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import carReducer from "../features/car/carSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    car: carReducer
  },
});
