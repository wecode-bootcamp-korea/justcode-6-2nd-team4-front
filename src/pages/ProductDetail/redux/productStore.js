import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import optionsReducer from './optionsSlice';

export default configureStore({
  reducer: {
    productData: productReducer,
    optionsData: optionsReducer,
  },
});
