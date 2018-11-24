import React from 'react'
import styled from 'styled-components'

import Logo from '../../atoms/Logo'

const Header = styled.header`
  padding: 100px 0 60px
`

export default () => (
  <Header>
    <Logo />
  </Header>
)