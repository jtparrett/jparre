// Imports
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'

class CartStore extends EventEmitter {
  constructor(props) {
    super(props)
  }

  handleActions(action) {
    switch(action.type) {
      case 'ITEM_ADDED_TO_CART': {
        this.emit('change')
        break
      }
    }
  }
}

// Register with dispatcher
const store = new CartStore;
dispatcher.register(store.handleActions.bind(store))

// Export Store
export default store;
