import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import LogoSVG from '../../assets/logo.svg'

const Logo = styled.img`
  display: block;
  width: 100%;
`

const Main = styled(Link)`
  display: block;
  width: 140px;
  margin: 0 auto;
  max-width: 30%;
`

export default () => (
  <Main to="/">
    <Logo src={LogoSVG} />
  </Main>
)