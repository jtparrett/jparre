import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

// HTML
import '../../index'

// Stylesheets
import 'stylesheets/imports'

// Layout
import Layout from '../views/layouts/application'

// Views
import NotFoundView from '../views/404'
import HomeIndex from '../views/home/index'
import ProductIndex from '../views/products/index'
import ProductShow from '../views/products/show'

// App container
const app = document.getElementById('app')

// Define Routes, Render App
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Layout }>
      <IndexRoute name="Home" component={ HomeIndex }></IndexRoute>
      <Route path="products" component={ ProductIndex }></Route>
      <Route path="products/:handle" component={ ProductShow }></Route>
      <Route path="*" component={ NotFoundView }></Route>
    </Route>
  </Router>,
app)
