import dispatcher from '../dispatcher'
import axios from 'axios'
import * as Actions from '../actions/products'

export function getProducts() {
  axios.get('http://j.parre.co/products.json').then((response) => {
    Actions.receivedProducts(response.data.products)
  })
}

export function getProduct(handle) {
  axios.get(`http://j.parre.co/products/${handle}.json`).then((response) => {
    Actions.receivedProduct(response.data.product)
  })
}