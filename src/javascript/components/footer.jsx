import React from 'react'
import { Link } from 'react-router'

import 'stylesheets/components/footer'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer__list">
          <li className="footer__item">
            <Link to="/products" className="footer__link">Products</Link>
          </li>
          <li className="footer__item">
            <Link to="/stockists" className="footer__link">Stockists</Link>
          </li>
        </ul>
      </footer>
    );
  }
}
