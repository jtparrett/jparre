import React from 'react'

import Footer from '../../components/footer'

export default class ContactIndex extends React.Component {
  render() {
    return (
      <div>
        <section className="wrapper wrapper--slim">
          <article className="article">
            <header className="article__header">
              <h1>Contact Us</h1>
              <p>Require a refund or wish to be a stockist?<br />
              Email us at: <a href="mailto:business@jparre.com">Business@jparre.com</a></p>
            </header>
          </article>
        </section>
        <Footer />
      </div>
    )
  }
}