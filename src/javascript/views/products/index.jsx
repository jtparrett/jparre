import React from 'react'
import PouchDB from 'pouchdb'

import ProductsStore from '../../stores/products'

import * as ProductsActions from '../../actions/products'

import Loading from '../../components/loading'
import Product from '../../components/product'
import Footer from '../../components/footer'

export default class ProductIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      database: new PouchDB('jparre'),
      products: false
    }
  }

  componentWillMount() {
    this.state.database.changes({live: true, since: 'now'}).on('change', this.getDatabase)
    ProductsStore.on('change', this.getProducts)
  }

  componentWillUnmount() {
    this.state.database.changes().removeListener('change', this.getDatabase)
    ProductsStore.removeListener('change', this.getProducts) 
  }

  componentDidMount() {
    this.getDatabase()
    ProductsActions.getProducts()
  }

  getDatabase = () => {
    this.state.database.allDocs({include_docs: true}).then((docs) => {
      this.setState({
        products: docs.rows.map((row) => {
          return row.doc
        })
      })
    })
  }

  getProducts = () => {
    this.state.database.bulkDocs(ProductsStore.getProducts().map((product) => {
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
    })).then(this.getDatabase)
  }

  render() {
    if(!this.state.products){
      return (<Loading />)
    }

    return (
      <div className="wrapper">
        <ul className="list">
          { this.state.products.map((product, index) => {
            return (
              <li className="list__item" key={ index }>
                <Product product={ product } />
              </li>
            )
          }) }
        </ul>
        <Footer />
      </div>
    )
  }
}
