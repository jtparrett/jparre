import React from 'react'
import { Link } from 'react-router'

import 'images/box-logo.svg'

import 'stylesheets/components/header'

export default class Header extends React.Component {
  render() {
    return (
      <header role="banner" className="header">
        <Link to="/" class="header__logo">
          <img src='/assets/images/box-logo.svg' />
        </Link>
      </header>
    );
  }
}
