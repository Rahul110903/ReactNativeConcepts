import {ADD_TO_CART} from "./constraints"
import { REMOVE_FROM_CART } from "./constraints"

export function addToCart(item){
    return{
        type:ADD_TO_CART,
        data:item
    }
}
export function removeFromCart(item){
    return{
        type:REMOVE_FROM_CART,
        data:item
    }
}

