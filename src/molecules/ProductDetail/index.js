import React from 'react'
import styled from 'styled-components'

import Typography from '../../atoms/Typography'
import HTMLRenderer from '../../atoms/HTMLRenderer'
import ProductForm from '../ProductForm'

const Main = styled.div`
  padding: 30px 20px;
`

const Title = styled(Typography)`
  margin-bottom: 10px;
`

export default ({product}) => (
  <React.Fragment>
    <Main>
      <Title heading Component={'h1'}>{product.title}</Title>
      <HTMLRenderer>{product.descriptionHtml}</HTMLRenderer>
      <Typography>&pound;{product.variants.edges[0].node.price}</Typography>
      {!product.availableForSale &&
        <Typography marginTop error>Sold Out</Typography>
      }
    </Main>

    {product.availableForSale &&
      <ProductForm product={product} />
    }
  </React.Fragment>
)