import React, { lazy, Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

import Header from './organisms/Header'
import Footer from './organisms/Footer'
import Loader from './atoms/Loader'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const ProductsShow = lazy(() => import('./pages/ProductsShow'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Contact = lazy(() => import('./pages/Contact'))
const ErrorPage = lazy(() => import('./pages/404'))

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
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/:handle" component={ProductsShow} />
            <Route path="/products" component={Products} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/contact" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
        <Footer />
      </>
    </Router>
  </ApolloProvider>
)