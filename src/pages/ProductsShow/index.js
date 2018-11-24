import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

import Loader from '../../atoms/Loader'
import Container from '../../atoms/Container'
import ProductImage from '../../molecules/ProductImage'
import ProductDetail from '../../molecules/ProductDetail'

const GET_PRODUCT = gql`
  query ($handle:String!){
    shop {
      productByHandle(handle:$handle){
        title
        descriptionHtml
        images(first:1) {
          edges {
            node {
              transformedSrc(maxWidth:900)
            }
          }
        }
      }
    }
  }
`

export default ({match}) => (
  <Query query={GET_PRODUCT} variables={{ handle: match.params.handle }}>
    {({error, data, loading}) => {
      if(error) return (<p>Error Loading Product</p>)

      if(loading) return (<Loader />)

      const product = data.shop.productByHandle

      return (
        <Container slim={true}>
          <ProductImage product={product} />
          <ProductDetail product={product} />
        </Container>
      )
    }}
  </Query>
)