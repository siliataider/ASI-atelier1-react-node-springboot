import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './slices/shopSlice';

export default configureStore({
  reducer: {
	shopReducer: shopReducer ,
    },
})