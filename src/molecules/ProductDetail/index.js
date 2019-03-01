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

export default (product) => {
  const { title, descriptionHtml, variants, availableForSale } = product
  return (
    <>
      <Main>
        <Title heading Component={'h1'}>{title}</Title>
        <HTMLRenderer>{descriptionHtml}</HTMLRenderer>
        <Typography>&pound;{variants.edges[0].node.price}</Typography>
        {!availableForSale &&
          <Typography marginTop error>Sold Out</Typography>
        }
      </Main>

      {availableForSale &&
        <ProductForm {...product} />
      }
    </>
  )
}