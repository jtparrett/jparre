import React from 'react'

// Stores
import ProductsStore from '../../stores/products'

// Actions
import * as ProductsActions from '../../actions/products'

export default class ProductIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    ProductsStore.on('change', this.getProducts)
  }

  componentWillUnmount() {
    ProductsStore.removeListener('change', this.getProducts) 
  }

  componentDidMount() {
    ProductsActions.getProducts()
  }

  getProducts = () => {
    this.setState({
      products: ProductsStore.getProducts()
    })

    console.log(this.state.products)
  }

  render() {
    return (
      <div>
        { this.state.products.map((product, index) => {
          return (
            <div key={ index }>{ product.title }</div>
          )
        }) }
      </div>
    )
  }
}
