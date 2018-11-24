import React from 'react'
import {Link} from 'react-router-dom'

import Button from '../../atoms/Button'

export default () => (
  <React.Fragment>
    <h1>Home</h1>
    <Button Component={Link} to="/products">Shop the collection &rarr;</Button>
  </React.Fragment>
)