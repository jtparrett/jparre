import React from 'react'
import gql from 'graphql-tag'
import {Query} from 'react-apollo'

import Loader from '../../atoms/Loader'
import ProductsListing from '../../organisms/ProductsListing'

const GET_COLLECTION = gql`
  query ($handle:String!) {
    shop {
      collectionByHandle(handle:$handle){
        products(first:250){
          edges {
            node {
              id
              title
              handle
              images(first:1) {
                edges {
                  node {
                    transformedSrc(maxWidth:400)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default () => (
  <Query query={GET_COLLECTION} variables={{ handle: 'all' }}>
    {({error, loading, data}) => {
      if(error) return (<p>Error Loading Products</p>)

      if(loading) return (<Loader />)

      return (
        <ProductsListing products={data.shop.collectionByHandle.products.edges} />
      )
    }}
  </Query>
)