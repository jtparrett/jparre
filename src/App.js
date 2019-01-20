import React, {Fragment} from 'react'
import {ApolloProvider} from 'react-apollo'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {ApolloClient} from 'apollo-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {createHttpLink} from 'apollo-link-http'

import Header from './organisms/Header'
import Footer from './organisms/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductsShow from './pages/ProductsShow'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Contact from './pages/Contact'
import ErrorPage from './pages/404'

const history = createBrowserHistory()

const httpLink = createHttpLink({
  uri: 'https://j-parre.myshopify.com/api/graphql',
  headers: {
    'X-Shopify-Storefront-Access-Token': '51db6b42c6c889530de646c4b281ddcd'
  }
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

history.listen((location) => {
  window.gtag('config', 'UA-99705061-1', {
    page_path: location.pathname
  })  
})

export default () => (
  <ApolloProvider client={client}>
    <Router history={history}>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products/:handle" component={ProductsShow} />
          <Route path="/products" component={Products} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/contact" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  </ApolloProvider>
)