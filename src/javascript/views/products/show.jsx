import React from 'react'
import { browserHistory, Link } from 'react-router'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import NotFoundView from '../404'
import Loading from '../../components/loading'
import Product from '../../components/product'
import Footer from '../../components/footer'
import PurchaseForm from './form'

import CarouselImage from '../../components/carousel-image'
import Carousel from '../../components/carousel'

export default class ProductShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      handle: props.params.handle,
      products: false,
      modal: false
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
      products: ProductsStore.getProducts()
    })
  }

  openModal = () => {
    this.setState({
      modal: true
    })
    return false
  }

  closeModal = () => {
    this.setState({
      modal: false,
      current: 0
    })
  }

  render() {
    if(!this.state.products){
      return (<Loading />)
    }

    if(this.state.products.length <= 0){
      return (<NotFoundView />)
    }

    let { products, current } = this.state

    if(this.state.modal){
      return (
        <div className="page__main">
          <div className="page__inner">
            <Carousel items={ products[0].images.map(item => {
              return () => (<CarouselImage src={ [item.src] } large={true} />)
            }) } />
          </div>
          <section className="actions">
            <button className="button" onClick={ this.closeModal }>&larr; Return to Product</button>
          </section>
        </div>
      )
    }

    return (
      <div>
        <section className="wrapper wrapper--slim">
          <Product product={ products[0] } imageSize={7} onClick={ this.openModal } enlarge={true} />
          <article className="detail">
            <h1 className="detail__title">{ products[0].title }</h1>
            <div dangerouslySetInnerHTML={{ __html: products[0].attrs.body_html }} className="wysiwyg"></div>
            <p className="detail__price">&pound;{ products[0].variants[0].price }</p>
            <PurchaseForm product={ products[0] } />
          </article>
        </section>

        <section className="actions">
          <Link to="/products" className="actions__link">&larr; Return to The Collection</Link>
        </section>
        <Footer />
      </div>
    )
  }
}
