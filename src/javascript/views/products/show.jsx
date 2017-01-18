import React from 'react'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import NotFoundView from '../404'

export default class ProductShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      handle: props.params.handle,
      product: false
    }
  }

  componentWillMount() {
    ProductsStore.on('change', this.getResource)
  }

  componentWillUnmount() {
    ProductsStore.removeListener('change', this.getResource) 
  }

  componentDidMount() {
    ProductsActions.getProduct(this.state.handle)
  }

  getResource = () => {
    this.setState({
      product: ProductsStore.getProduct()
    })
  }

  render() {
    if(this.state.product){
      let { product } = this.state
      return (
        <div>
          { product.title }
          <div dangerouslySetInnerHTML={{ __html: product.body_html }}></div>
          { product.variants[0].price }
          <select>
            { product.variants.map((varient, index) => {
              return (<option key={ index }>{ varient.title }</option>)
            }) }
          </select>
        </div>
      )
    } else {
      return (<NotFoundView />)
    }
  }
}
