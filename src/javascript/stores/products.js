// Imports
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class ProductsStore extends EventEmitter {
  constructor(props) {
    super(props)
    this.products = false
    this.product = false
  }

  getProducts() {
    return this.products
  }

  getProduct() {
    return this.product
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVED_PRODUCTS': {
        this.products = action.products
        this.emit('change')
        break
      }
      case 'RECEIVED_PRODUCT': {
        this.product = action.products[0]
        this.emit('change')
        break
      }
    }
  }
}

// Register with dispatcher
const store = new ProductsStore;
dispatcher.register(store.handleActions.bind(store))

// Export Store
export default store;
