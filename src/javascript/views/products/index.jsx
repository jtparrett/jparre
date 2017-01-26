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
        products: docs.rows.map((doc) => {
          return doc.doc
        })
      })
    })
  }

  getProducts = () => {
    ProductsStore.getProducts().map((product) => {
      this.loadProduct(product)
    })
  }

  loadProduct(product) {
    let xhr = new XMLHttpRequest()
    xhr.responseType = 'blob'
    xhr.onload = () => {
      let reader = new FileReader()
      reader.onloadend = () => {
        this.state.database.put({
          _id: product.id.toString(),
          image: reader.result,
          ...product.attrs
        })
      }
      reader.readAsDataURL(xhr.response)
    }
    xhr.open('GET', product.attrs.images[0].src)
    xhr.send()
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
