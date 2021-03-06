import React from 'react'
import styled from 'styled-components'

const Text = ({
  Component = 'p',
  children,
  className,
  heading,
  bold,
  error,
  marginTop,
  marginBottom,
  textAlign,
  ...props
}) => (
    <Component className={className} {...props}>
      {children}
    </Component>
  )

export default styled(Text)`
  font-family: ${props => props.heading ? 'Playfair Display' : 'Open Sans'}, sans-serif;
  margin: 0;
  text-decoration: none;
  font-size: ${props => props.heading ? '20px' : '12px'};
  line-height: 1.2;
  font-weight: ${props => props.bold ? '700' : '400'};
  white-space: pre-line;
  ${props => props.error && 'color: red;'}
  ${props => props.marginBottom && 'margin-bottom: 10px;'}
  ${props => props.marginTop && 'margin-top: 10px;'}
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
`