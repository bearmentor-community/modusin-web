import React from 'react'

const Navbar_head = () => (
  <div className="hero-head">
    <nav className="navbar is-fixed-top">
      <div className="container is-dekstop">
        <div className="navbar-brand" id="brand_centered">
          <a className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma" />
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <div className="column">
              <a className="button is-primary  is-outlined navbar-item">
              Sign in
              </a>
            </div>
            <div className="column">
           <a className="button is-primary  is-outlined navbar-item">
             Sign up
           </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  </div>

)

export default Navbar_head
