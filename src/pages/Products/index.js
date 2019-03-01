import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

import Loader from '../../atoms/Loader'
import Container from '../../atoms/Container'
import { Grid, GridItem } from '../../atoms/Grid'
import ProductImage from '../../molecules/ProductImage'

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
    {({ error, loading, data }) => {
      if (error) return (<p>Error Loading Products</p>)

      if (loading) return (<Loader />)

      return (
        <Container>
          <Grid>
            {data.shop.collectionByHandle.products.edges.map(({ node }) => (
              <GridItem key={node.id}>
                <Link to={`/products/${node.handle}`}>
                  <ProductImage {...node} />
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Container>
      )
    }}
  </Query>
)