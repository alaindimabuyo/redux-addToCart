import {DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT} from "./types"
import cartItems from "./cart-items";

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0
}

const thisfunction = (state = initialStore, action) => {
    switch(action.type){
        case CLEAR_CART:
            return {...state, cart: [], total: 0, amount: 0}
              /* falls through */
        case INCREASE:
            const tempCart = state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id){
                    cartItem = {...cartItem, amount: cartItem.amount + 1}
                }
                return cartItem
            })
            return {
                ...state,
                cart: tempCart
            }
              /* falls through */
        case DECREASE:
            let  tempCart2 = state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id){
                    cartItem = {...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem
            })
               
            return {
                ...state,
                cart: tempCart2
            }
              /* falls through */
        case REMOVE:
           
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)}
              /* falls through */

        case GET_TOTALS:
            let {total , amount} = state.cart.reduce(
                (cartTotal, cartItem) => {
               
                const {price, amount} = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount

                return cartTotal
            }, 
            {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2))
            return {...state, total, amount}
        case TOGGLE_AMOUNT:
            return {...state, 
                cart: state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id){
                    if(action.payload.toggle === "increase"){
                       return (cartItem = {...cartItem, amount: cartItem.amount + 1})
                    } 
                    if(action.payload.toggle === "decrease"){
                       return (cartItem = {...cartItem, amount: cartItem.amount - 1})
                    }
                }
                    return cartItem
                
            })}
        default:
            return state
    }
    

    // if(action.type === CLEAR_CART){
    //     return {...state, cart: [], total: 0 , amount: 0}
    // }
    // if(action.type === DECREASE){
    //   return {...state,count: state.count - 1}
    // }
    // if(action.type === INCREASE){
    //   return {...state, count: state.count + 1}
    // }
  
    // return state
  }

export default thisfunction;