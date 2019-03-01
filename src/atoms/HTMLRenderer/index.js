import React from 'react'
import styled from 'styled-components'

const Renderer = styled.div`
  p {
    font-family: Open Sans, sans-serif;
    line-height: 1.2;
    font-size: 12px;
    margin: 0 0 5px;
    font-weight: 400;
  }

  span {
    font-size: inherit;
    font-family: inherit;
  }
`

export default ({ children, className }) => (
  <Renderer className={className} dangerouslySetInnerHTML={{ __html: children }} />
)