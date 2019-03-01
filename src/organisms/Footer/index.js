import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Typography from '../../atoms/Typography'

const Main = styled.div`
  padding: 60px 0 100px;
  text-align: center;

  @media all and (max-width: 568px){
    padding: 30px 0 60px;
  }
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  color: #a9a9a9;

  > * {
    flex: none;
    margin: 0 5px;
  }
`

export default () => (
  <Main>
    <Typography marginBottom>J.Parré Apparel Co.</Typography>
    <Links>
      <Typography Component={Link} to="/products">Products</Typography>
      <Typography Component={Link} to="/contact">Contact</Typography>
      <Typography Component={Link} to="/privacy-policy">Privacy Policy</Typography>
    </Links>
  </Main>
)