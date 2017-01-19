import React from 'react'
import { IndexLink, Link } from 'react-router'

import 'stylesheets/components/footer'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__copy">&copy;2017 J.Parré Apparel Co.</p>
      </footer>
    );
  }
}
