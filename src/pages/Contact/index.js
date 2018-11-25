import React from 'react'

import Container from '../../atoms/Container'
import Typography from '../../atoms/Typography'

export default () => (
  <Container slim padding="0 20px">
    <Typography textAlign="center" heading>Contact Us</Typography>
    <Typography textAlign="center" marginTop>
      Require a refund or wish to be a stockist? <br />
      Email us at: <a href="mailto:business@jparre.com">Business@jparre.com</a>
    </Typography>
  </Container>
)