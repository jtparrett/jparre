import React from 'react'
import { browserHistory, Link } from 'react-router'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import NotFoundView from '../404'
import Loading from '../../components/loading'
import Product from '../../components/product'
import Brand from '../../components/brand'
import PurchaseForm from './form'

export default class ProductShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      handle: props.params.handle,
      products: false,
      modal: false,
      currentModal: 0
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
      currentModal: 0
    })
  }

  next = () => {
    this.setState({
      currentModal: ++this.state.currentModal % this.state.products[0].images.length
    })
  }

  change = (index) => {
    this.setState({
      currentModal: index
    }) 
  }

  render() {
    if(!this.state.products){
      return (<Loading />)
    }

    if(this.state.products.length <= 0){
      return (<NotFoundView />)
    }

    let { products } = this.state

    if(this.state.modal){
      return (
        <div className="page__main">
          <section className="modal" onClick={ this.next }>
            <img src={ products[0].images[this.state.currentModal].src } className="modal__image" />
          </section>

          <section className="actions">
            <ul className="nav">
              { products[0].images.map((item, index) => {
                let classes = ['nav__button', index === this.state.currentModal && 'active'].join(' nav__button--')
                return (
                  <li className="nav__item" key={ index }>
                    <button className={ classes } onClick={ () => { this.change(index) } }>{ index }</button>
                  </li>
                )
              }) }
            </ul>
            <button className="button" onClick={ this.closeModal }>Close</button>
          </section>
        </div>
      )
    }

    return (
      <div>
        <section className="wrapper wrapper--slim">
          <Product product={ products[0] } imageSize={7} onClick={ this.openModal }/>
          <article className="detail">
            <h1 className="detail__title">{ products[0].title }</h1>
            <div dangerouslySetInnerHTML={{ __html: products[0].attrs.body_html }} className="wysiwyg"></div>
            <p className="detail__price">&pound;{ products[0].variants[0].price }</p>
            <PurchaseForm product={ products[0] } />
          </article>
        </section>

        <section className="actions">
          <Link to="/products" className="actions__link">&larr; Back to Products</Link>
        </section>
        <Brand />
      </div>
    )
  }
}
