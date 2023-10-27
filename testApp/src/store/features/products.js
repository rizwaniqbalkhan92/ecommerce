import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
};

export const productSlicer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    allProducts: (state, action) => {
      console.log('response==>>all products ', state, action);
      state.products = action.payload;
    },
    ADD_TO_CART: (state, action) => {
      console.log("actionactionaction",action?.payload)
       state.cart= [...state?.cart, action?.payload];
    },
    REMOVE_TO_CART: (state, action) => {
      console.log("remove==>>>",action?.payload,state.cart.filter(val=>val.id !==action?.payload))
      state.cart=state.cart.filter(val=>val.id !== action?.payload)
       
    }

  },
});

export const {allProducts,ADD_TO_CART,REMOVE_TO_CART} = productSlicer.actions;

export default productSlicer.reducer;
