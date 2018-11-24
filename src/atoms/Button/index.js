import React from 'react'
import styled from 'styled-components'

import Typography from '../../atoms/Typography'

const Button = ({Component = 'button', children, className, ...props}) => (
  <Component className={className} {...props}>
    <Typography bold={true}>{children}</Typography>
  </Component>
)

export default styled(Button)`
  background-color: #000;
  color: #fff;
  outline: none;
  padding: 5px 12px;
  border-radius: 0;
  text-transform: uppercase;
  border: 1px solid #000;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;

  :hover {
    color: #000;
    background-color: #fff;
  }
`