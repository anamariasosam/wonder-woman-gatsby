import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section className="hero is-fullheight is-default is-bold">
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="image is-4by3">
              <img src="https://static01.nyt.com/images/2017/06/02/arts/02WONDER/02WONDER-master1050.jpg" alt="Mujer Maravilla" />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            <h1 className="title is-2">
              Mujer Maravilla
            </h1>
            <h2 className="subtitle is-4">
              Princesa guerrera de las Amazonas
            </h2>
            <br />
            <p className="has-text-centered">
              <Link to="/features/" className="button is-medium is-info is-outlined">Ver más</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default IndexPage
