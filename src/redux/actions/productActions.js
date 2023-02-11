import { ActionTypes } from "../contains/Actions"
export const setProducts=(products)=>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    }
};

export const selectProduct=(product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
};
