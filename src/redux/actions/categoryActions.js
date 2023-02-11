import { ActionTypes } from "../contains/Actions"
export const setCategories=(categories)=>{
    return{
        type: ActionTypes.SET_CATEGORIES,
        payload: categories,
    }
};
