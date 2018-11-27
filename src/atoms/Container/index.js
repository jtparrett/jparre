import styled from 'styled-components'

export default styled.div`
  width: ${props => props.slim ? '700px' : '1000px'};
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
  ${props => props.padding && `padding: ${props.padding};`}
`