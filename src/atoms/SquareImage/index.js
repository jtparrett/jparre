import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  background-color: #fafafa;
  padding-top: 100%;
  position: relative;
`

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 75%;
  max-height: 75%;
`

export default ({src, alt}) => (
  <Main>
    <Image src={src} alt={alt} />
  </Main>
)