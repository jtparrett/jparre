import React from 'react'
import styled from 'styled-components'

import Typography from '../../atoms/Typography'

const Main = styled.div`
  padding: 30px 20px;
`

export default ({product}) => (
  <Main>
    <Typography heading={true} Component={'h1'}>{product.title}</Typography>
    <div dangerouslySetInnerHTML={{__html: product.descriptionHtml}} />
  </Main>
)