import {ADD_TO_CART} from "./constraints"
import { REMOVE_FROM_CART } from "./constraints";
const initialstate=[];

export const cartReducer=(state=initialstate,action)=>{
    switch(action.type){
        case ADD_TO_CART : {
            return [
                ...state,
                action.data
            ]
        }
        case REMOVE_FROM_CART : {
                let result = state.filter((item)=>{
                    if(item.name!==action.data){
                        return true
                    }
                })
                return [...result]
            }
        default :
            return state
    }
}
