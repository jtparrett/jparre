import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export default styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 4px solid #fafafa;
  border-top: 4px solid #000;
  margin: 60px auto;
  animation: ${rotate} 0.5s linear infinite;
`