import dispatcher from '../dispatcher'
import * as API from '../services/products'

export function getProducts() {
  API.getProducts()
}

export function receivedProducts(response){
  dispatcher.dispatch({ 
    type: 'RECEIVED_PRODUCTS', 
    products: response
  })
}

export function getProduct(handle){
  API.getProduct(handle)
}

export function receivedProduct(response){
  dispatcher.dispatch({ 
    type: 'RECEIVED_PRODUCT', 
    products: response
  }) 
}