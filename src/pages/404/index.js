import React from 'react'
import { Link } from 'react-router-dom'

import Meta from '../../atoms/Meta'
import Container from '../../atoms/Container'
import Typography from '../../atoms/Typography'
import Spacer from '../../atoms/Spacer'

export default () => (
  <Container>
    <Meta>
      <title>Page Not Found</title>
    </Meta>
    <Typography textAlign="center" heading>404 Page Not Found.</Typography>
    <Spacer>
      <Typography Component={Link} to="/" textAlign="center" marginTop>&larr; Go back home</Typography>
    </Spacer>
  </Container>
)