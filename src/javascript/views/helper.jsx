import React from 'react'
import PouchDB from 'pouchdb'

import ProductsStore from '../stores/products'

import * as ProductsActions from '../actions/products'

export default class PageHelper extends React.Component{
  constructor(props) {
    super(props)
    this.database = new PouchDB('jparre')
  }

  componentWillMount() {
    this.database.changes({live: true, since: 'now'}).on('change', this.getDatabase)
    ProductsStore.on('change', this.getProducts)
  }

  componentWillUnmount() {
    this.database.changes().removeListener('change', this.getDatabase)
    ProductsStore.removeListener('change', this.getProducts) 
  }

  loadProducts() {
    this.getDatabase()
    ProductsActions.getProducts()
  }

  getDatabase = () => {
    this.database.allDocs({include_docs: true}).then((docs) => {
      this.setState({
        products: docs.rows.map((row) => {
          return row.doc
        })
      })
    })
  }

  getProducts = () => {
    this.database.bulkDocs(ProductsStore.getProducts().map((product) => {
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
    }))
  }
}