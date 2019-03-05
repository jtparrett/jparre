import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ children }) => (
  <Helmet titleTemplate="J.Parré Apparel Co | %s">
    {children}
  </Helmet>
)

export default Meta