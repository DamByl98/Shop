import { combineReducers } from "redux";
import { productReducer, selectProductReducer,  } from "./ProductReducer";
import { categoryReducer } from "./CategoryReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer,
    allCategories: categoryReducer,
});

export default reducers;

