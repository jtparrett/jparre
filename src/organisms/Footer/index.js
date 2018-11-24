import React from 'react'
import styled from 'styled-components'

import Typography from '../../atoms/Typography'
import Spacer from '../../atoms/Spacer'

const Main = styled(Spacer)`
  padding-bottom: 100px;
`

export default () => (
  <Main>
    <Typography>&copy;2018 J.Parré Apparel Co.</Typography>
  </Main>
)