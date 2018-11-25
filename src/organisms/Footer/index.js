import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Typography from '../../atoms/Typography'
import Spacer from '../../atoms/Spacer'

const Main = styled(Spacer)`
  padding-bottom: 100px;
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
    <Typography marginBottom>&copy;2018 J.Parré Apparel Co.</Typography>
    <Links>
      <Typography Component={Link} to="/products">Products</Typography>
      <Typography Component={Link} to="/contact">Contact</Typography>
      <Typography Component={Link} to="/privacy-policy">Privacy Policy</Typography>
    </Links>
  </Main>
)