import dispatcher from '../dispatcher'
import * as ShopifyBuy from './shopify-client'
import * as Actions from '../actions/products'

export function getProducts() {
  ShopifyBuy.Client.fetchQueryProducts({ collection_id: 361117895, sort_by: 'collection-default' }).then((response) => {
    Actions.receivedProducts(response)
  })
}

export function getProduct(handle) {
  ShopifyBuy.Client.fetchQueryProducts({ handle: handle }).then((response) => {
    Actions.receivedProducts(response)
  })
}