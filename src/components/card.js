import React from 'react'
import Link from 'gatsby-link'
import '../styles/card.scss'

const Card = ({ siteTitle }) => (
  <div className="column is-4">
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" className="modal-button" data-target="modal-image2" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h4>Click on image above</h4>
          <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Card
