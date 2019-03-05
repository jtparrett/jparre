import React from 'react'

import Meta from '../../atoms/Meta'
import Container from '../../atoms/Container'
import Typography from '../../atoms/Typography'

export default () => (
  <Container slim padding="0 20px">
    <Meta>
      <title>Contact Us</title>
    </Meta>
    <Typography textAlign="center" heading>Contact Us</Typography>
    <Typography textAlign="center" marginTop>
      Require a refund or wish to be a stockist? <br />
      Email us at: <a href="mailto:business@jparre.com">Business@jparre.com</a>
    </Typography>
  </Container>
)