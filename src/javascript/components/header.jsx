import React from 'react'
import { Link } from 'react-router'

import 'stylesheets/components/header'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/products" className="header__link">Products</Link>
          </li>
          <li className="header__item">
            <Link to="/stockists" className="header__link">Stockists</Link>
          </li>
          <li className="header__item">
            <Link to="/contact" className="header__link">Contact</Link>
          </li>
        </ul>
      </header>
    );
  }
}
