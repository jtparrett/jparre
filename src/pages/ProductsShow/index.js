import React from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Loader from '../../atoms/Loader'
import Typography from '../../atoms/Typography'
import Container from '../../atoms/Container'
import ProductImage from '../../molecules/ProductImage'
import ProductDetail from '../../molecules/ProductDetail'
import Spacer from '../../atoms/Spacer'
import ErrorPage from '../../pages/404'

const GET_PRODUCT = gql`
  query ($handle:String!){
    shop {
      productByHandle(handle:$handle){
        title
        descriptionHtml
        availableForSale
        tags
        variants(first:8) {
          edges {
            node {
              id
              title
              availableForSale
              price
            }
          }
        }
        images(first:2) {
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

export default ({ match }) => (
  <Query query={GET_PRODUCT} variables={{ handle: match.params.handle }}>
    {({ error, data, loading }) => {
      if (error) return (<p>Error Loading Product</p>)

      if (loading) return (<Loader />)

      const product = data.shop.productByHandle

      if (!product) return (<ErrorPage />)

      return (
        <Container slim>
          <ProductImage {...product} />
          <ProductDetail {...product} />
          <Spacer>
            <Typography Component={Link} to="/products">&larr; Return to The Collection</Typography>
          </Spacer>
        </Container>
      )
    }}
  </Query>
)