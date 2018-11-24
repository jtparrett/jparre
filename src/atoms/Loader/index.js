import styled,{keyframes} from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export default styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 5px solid #fafafa;
  border-top: 5px solid #000;
  margin: 60px auto;
  animation: ${rotate} 0.5s linear infinite;
`