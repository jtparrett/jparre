import React from 'react'
import styled from 'styled-components'

const Text = ({Component = 'p', children, className}) => (
  <Component className={className}>
    {children}
  </Component>
)

export default styled(Text)`
  font-family: ${props => props.heading ? 'Playfair Display' : 'Open Sans'}, sans-serif;
  margin: 0;
  font-size: ${props => props.heading ? '20px' : '12px'};
  line-height: 1;
  font-weight: ${props => props.bold ? '700' : '400'};
`