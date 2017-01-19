import React from 'react'
import { IndexLink, Link } from 'react-router'

import Footer from '../components/footer'

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <section className="section">
          <h1 className="section__title">Page Not Found. Soz</h1>
        </section>
        <section class="actions">
          <Link to="/" className="actions__link">&larr; Back Home</Link>
        </section>
        <Footer />
      </div>
    );
  }
}
