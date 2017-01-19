import dispatcher from '../dispatcher'
import * as API from '../services/cart'

export function addToCart(varient) {
  API.addToCart(varient)
}

export function itemAddedToCart(cart){
  dispatcher.dispatch({ 
    type: 'ITEM_ADDED_TO_CART', 
    cart: cart
  })
}