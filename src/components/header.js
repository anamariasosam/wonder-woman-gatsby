import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div className="hero-head">
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            { siteTitle }
          </a>
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div className="tabs is-right">
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li>
                  <Link to="/features/">Características</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default Header
