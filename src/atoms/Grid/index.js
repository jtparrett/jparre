import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -5px -5px 0 0;
`

export const GridItem = styled.div`
  flex: none;
  margin: 5px 5px 0 0;
  width: calc(33.3333333% - 5px);
`