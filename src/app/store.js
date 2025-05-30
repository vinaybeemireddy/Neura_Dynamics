import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';

 const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
  
});
export default store;

