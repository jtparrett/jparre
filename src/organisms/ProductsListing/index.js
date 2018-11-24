import React from 'react'
import {Link} from 'react-router-dom'

import Container from '../../atoms/Container'
import {Grid, GridItem} from '../../atoms/Grid'
import ProductImage from '../../molecules/ProductImage'

export default ({products}) => (
  <Container>
    <Grid>
      {products.map(({node}) => (
        <GridItem key={node.id}>
          <Link to={`/products/${node.handle}`}>
            <ProductImage product={node} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  </Container>
)