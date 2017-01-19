import React from 'react'
import { browserHistory, Link } from 'react-router'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import NotFoundView from '../404'
import Product from '../../components/product'
import PurchaseForm from '../../components/purchase-form'
import Footer from '../../components/footer'

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
    if(!this.state.product){
      return (<NotFoundView />)
    }

    let { product } = this.state
    return (
      <div>
        <section className="wrapper wrapper--slim">
          <Product product={ product } />
          <article className="detail">
            <h1 className="detail__title">{ product.title }</h1>
            <div dangerouslySetInnerHTML={{ __html: product.attrs.body_html }} className="wysiwyg"></div>
            <p className="detail__price">&pound;{ product.variants[0].price }</p>
            <PurchaseForm product={ product } />
          </article>
        </section>

        <section className="actions">
          <Link to="/products" className="actions__link">&larr; Back to Products</Link>
        </section>
        <Footer />
      </div>
    )
  }
}
