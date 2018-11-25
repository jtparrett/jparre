import React from 'react'
import styled from 'styled-components'

import Logo from '../../atoms/Logo'

const Header = styled.header`
  padding: 100px 0 60px;

  @media all and (max-width: 568px){
    padding: 60px 0 30px;
  }
`

export default () => (
  <Header>
    <Logo />
  </Header>
)