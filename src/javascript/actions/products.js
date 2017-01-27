import dispatcher from '../dispatcher'
import * as API from '../services/products'
import PouchDB from 'pouchdb'

const database = new PouchDB('jparre')

export function getProducts() {
  API.getProducts()
}

export function getProduct(handle){
  API.getProduct(handle)
}

export function receivedProducts(response){
  database.bulkDocs(response.map((product) => {
    return {
      _id: product.id.toString(),
      ...product.attrs,
      variants: product.variants.map((variant) => {
        return {
          title: variant.title,
          available: variant.available,
          price: variant.price,
          checkoutURL: variant.checkoutUrl(1)
        }
      })
    }
  }))
}