import React from 'react'
import { IndexLink, Link } from 'react-router'

import BoxLogoSrc from 'images/box-logo.svg'

import 'stylesheets/components/header'

export default class Header extends React.Component {
  render() {
    return (
      <header role="banner" className="header">
        <Link to="/" class="header__logo">
          <img src={ BoxLogoSrc } />
        </Link>
      </header>
    );
  }
}
