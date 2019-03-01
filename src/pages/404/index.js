import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../../atoms/Container'
import Typography from '../../atoms/Typography'
import Spacer from '../../atoms/Spacer'

export default () => (
  <Container>
    <Typography textAlign="center" heading>404 Page Not Found.</Typography>
    <Spacer>
      <Typography Component={Link} to="/" textAlign="center" marginTop>&larr; Go back home</Typography>
    </Spacer>
  </Container>
)