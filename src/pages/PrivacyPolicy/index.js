import React from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'

import Loader from '../../atoms/Loader'
import Typography from '../../atoms/Typography'
import Container from '../../atoms/Container'

const GET_PRIVACY_POLICY = gql`
  {
    shop {
      privacyPolicy {
        title
        body
      }
    }
  }
`

export default () => (
  <Query query={GET_PRIVACY_POLICY}>
    {({error, loading, data}) => {
      if(error) return (<p>Error loading Privacy Policy</p>)

      if(loading) return (<Loader />)

      const {title, body} = data.shop.privacyPolicy

      return (
        <Container slim>
          <Typography heading>{title}</Typography>
          <Typography marginTop>{body}</Typography>
        </Container>
      )
    }}
  </Query>
)