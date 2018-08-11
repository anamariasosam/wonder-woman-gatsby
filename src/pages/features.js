import React from 'react'
import Link from 'gatsby-link'

import Card from '../components/card.js'

const featuresList = [
  [
    {
      title: "Alias",
      description: "Princesa Diana, Diosa de la Guerra, Marvila",
      imageUrl: "https://media.fromthegrapevine.com/assets/images/2017/5/Wonder-Woman-34-Gal-Gadot-and-Danny-Huston.jpg.824x0_q71.jpg"
    },
    {
      title: "Armas favoritas",
      description: "El Lazo de la Verdad, un par de brazaletes mágicos, su tiara",
      imageUrl: "https://prod.media.wapa.pe/670x376/wapa/imagen/2018/01/04/noticia-mujer-maravilla-wonder-woman-pelicula-2.png"
    },
    {
      title: "Comunidades",
      description: "La trinidad, Liga de la justicia",
      imageUrl: "https://cdn.images.express.co.uk/img/dynamic/36/590x/Justice-League-Batman-V-Superman-got-Wonder-Woman-WRONG-Gal-Gadot-872812.jpg"
    }
  ],
  [
    {
      title: "Ocupación",
      description: "Princesa Amazonas",
      imageUrl: "https://static2.srcdn.com/wordpress/wp-content/uploads/2017/05/Wonder-Woman-Movie-Spoilers-Ending.jpg"
    },
    {
      title: "Enemigos",
      description: "Ares, Cronos, Circe, Chita",
      imageUrl: "https://s.aficionados.com.br/imagens/conheca-todos-os-viloes-do-filme-solo-da-mulher-maravilha_t.png"
    },
    {
      title: "Objetivo",
      description: "La justicia, la paz y la igualdad sexualå",
      imageUrl: "https://cdn.vox-cdn.com/thumbor/-K4Ku6vyz6q6BeX3yWllSbuhm6k=/0x0:7952x5304/1200x800/filters:focal(3340x2016:4612x3288)/cdn.vox-cdn.com/uploads/chorus_image/image/55528497/WonderWomanTrenches.0.jpg"
    }
  ]
]

const Features = () => (
  <section className="container is-fullheight features-container">
    <div className="columns">
      { featuresList[0].map(
          (feature) =>
            <Card
              feature={feature}
              key={feature.title}
            />
      )}
    </div>
    <div className="columns">
      { featuresList[1].map(
          (feature) =>
            <Card
              feature={feature}
              key={feature.title}
            />
      )}
    </div>
  </section>
)

export default Features
