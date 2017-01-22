import dispatcher from '../dispatcher'
import * as ShopifyBuy from './shopify-client'
import * as Actions from '../actions/products'

export function getProducts() {
  ShopifyBuy.Client.fetchAllProducts().then((response) => {
    Actions.receivedProducts(response)
  })
}

export function getProduct(handle) {
  ShopifyBuy.Client.fetchQueryProducts({ handle: handle }).then((response) => {
    Actions.receivedProducts(response)
  })
}