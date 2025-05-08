import { configureStore } from '@reduxjs/toolkit';
import zu_Reducer_bli from './Components/CartSlice';
const store = configureStore({
  reducer: {
    cart: zu_Reducer_bli,
  },
});

export default store;