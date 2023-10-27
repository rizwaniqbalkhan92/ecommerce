import {apiGet} from '../../apis/apiGet';
import {ALL_ProDUCTS, SINGLE_PRODUCT} from '../../config/webservice';
import {ADD_TO_CART, REMOVE_TO_CART, allProducts} from '../features/products';

export const getAllProducts = () => {
  return async function getAllProductThunk(dispatch, getState) {
    const response = await apiGet(ALL_ProDUCTS);
    if (response) {
      const res= await response
     
      dispatch(allProducts(res.data));
    }
  };
};
export const cartADD = (itemId) => {
  return async function addTocardThunk(dispatch, getState) {
    // const response = await apiGet(ALL_ProDUCTS);
    const result= getState()?.products?.products?.filter(val=>val?.id===itemId)
    console.log("GET STATE===>>0 ",itemId)
    console.log("GET STATE===>>1 ",result)
    if (itemId) {
      // const res= await response
     
      dispatch(ADD_TO_CART(result));
    }
  };
};
export const removeCard = (itemId) => {
  return async function addTocardThunk(dispatch, getState) {
 
    if (itemId) {
      // const res= await response
     
      dispatch(REMOVE_TO_CART(itemId));
    }
  };
};
