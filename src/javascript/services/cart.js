import dispatcher from '../dispatcher'
import * as ShopifyBuy from './shopify-client'
import * as Actions from '../actions/cart'


export function addToCart(varient){
  ShopifyBuy.Client.createCart().then((cart) => {
    cart.createLineItemsFromVariants({variant: varient, quantity: 1}).then((cart) => {
      console.log(cart)
      Actions.itemAddedToCart(cart)
    })
  })
}