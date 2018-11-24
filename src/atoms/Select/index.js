import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  appearance: none;
  border-radius: 0;
  background-color: transparent;
  outline: none;
  line-height: 1.5;
  font-family: Open Sans, sans-serif;
  text-transform: uppercase;
  border: none;
  padding: 5px 25px 5px 12px;
`

const Main = styled.div`
  position: relative;
  border: 1px solid #000;
  border-right: none;
  box-sizing: border-box;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: 10px;
    width: 6px;
    height: 6px;
    border-right: 2px solid #000;
    border-bottom: 2px solid #000;
    margin-top: -1px;
    transform: translateY(-50%) rotate(45deg);
    pointer-events: none;
    box-sizing: border-box;
  }
`

export default ({children, ...props}) => (
  <Main>
    <Select {...props}>
      {children}
    </Select>
  </Main>
)