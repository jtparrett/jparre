import React from 'react'
import {Link} from 'react-router-dom'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

import Loader from '../../atoms/Loader'
import Typography from '../../atoms/Typography'
import Container from '../../atoms/Container'
import ProductImage from '../../molecules/ProductImage'
import ProductDetail from '../../molecules/ProductDetail'
import Spacer from '../../atoms/Spacer'

const GET_PRODUCT = gql`
  query ($handle:String!){
    shop {
      productByHandle(handle:$handle){
        title
        descriptionHtml
        availableForSale
        variants(first:20) {
          edges {
            node {
              id
              title
              availableForSale
              price
            }
          }
        }
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
          <Spacer>
            <Typography Component={Link} to="/products">&larr; Return to The Collection</Typography>
          </Spacer>
        </Container>
      )
    }}
  </Query>
)