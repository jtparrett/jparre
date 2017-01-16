// Imports
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class ProductsStore extends EventEmitter {
  constructor(props) {
    super(props)
    this.products = []
  }

  getProducts() {
    return this.products
  }

  handleActions(action) {
    switch(action.type) {
      case 'RECEIVED_PRODUCTS': {
        this.products = action.products
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
