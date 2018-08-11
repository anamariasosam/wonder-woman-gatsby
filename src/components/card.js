import React from 'react'
import Link from 'gatsby-link'
import '../styles/card.scss'

const Card = ({ feature: { title, description, imageUrl } }) => (
  <div className="column is-4">
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image is-5by3">
          <img src={imageUrl} alt="Placeholder image" className="modal-button" data-target="modal-image2" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Card
