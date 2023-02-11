import { ActionTypes } from "../contains/Actions";

const initialStateCat={
    categories:[]
}

export const categoryReducer=(state=initialStateCat, {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_CATEGORIES:
            return {...state, categories:payload}
    
        default:
            return state;
    }
}

