import React from 'react'

import Footer from '../../components/footer'

import 'images/headcase.jpg'

export default class StockistsIndex extends React.Component {
  render (){
    return (
      <div>
        <section className="wrapper wrapper--slim">
          <article className="article">
            <img src="/assets/images/headcase.jpg" />
            <header className="article__header">
              <h1>Headcase Barbers Wokingham</h1>
              <p>41 Denmark Street<br />
              Wokingham<br />
              Berkshire<br />
              RG40 2AY</p>
              <a href="http://headcase-barbers.com/wokingham.html" target="_blank">headcase-barbers.com/wokingham.html</a>
            </header>
          </article>
        </section>
        <Footer />
      </div>
    )
  }
}