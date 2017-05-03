import React from 'react'
import PouchDB from 'pouchdb'

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
    this.state.database.changes({live: true, since: 'now'}).on('change', this.getProducts)
  }

  componentWillUnmount() {
    this.state.database.removeListener('change', this.getProducts)
  }

  componentDidMount() {
    this.getProducts()
    ProductsActions.getProducts()
  }

  getProducts = () => {
    this.state.database.allDocs({ include_docs: true }).then((response) => {
      this.setState({
        products: response.rows.map((row) => {
          return row.doc
        })
      })
    })
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
                <Product product={ product } imageSize={6} />
              </li>
            )
          }) }
        </ul>
        <Footer />
      </div>
    )
  }
}
