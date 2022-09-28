import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import optionsReducer from './optionsSlice';
import reviewsReducer from './reviewsSlice';

export default configureStore({
  reducer: {
    productData: productReducer,
    optionsData: optionsReducer,
    reviewsData: reviewsReducer,
  },
});
