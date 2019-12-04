import React, { Component } from 'react'
import './home.css'

export class home extends Component {
  render() {
    return (
      <div>
        <body
          data-spy="scroll"
          data-target=".main-navigation"
          data-offset="150"
        >
          <section id="MainContainer">
            <header id="Header">
              <nav class="main-navigation">
                <div class="container clearfix">
                  <div class="container clearfix">
                    <div class="site-logo-wrap">
                      <a class="logo" href="#"></a>
                    </div>
                    <a
                      href="javascript:void(0)"
                      class="menu-trigger hidden-lg-up"
                    >
                      <span>&nbsp;</span>
                    </a>
                    <div class="main-menu hidden-md-down">
                      <ul class="menu-list">
                        <li>
                          <a
                            class="nav-link"
                            href="javascript:void(0)"
                            data-target="#HeroBanner"
                          >
                            Home
                          </a>
                        </li>

                        <li>
                          <a
                            class="nav-link"
                            href="javascript:void(0)"
                            data-target="#ContactUs"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="mobile-menu hidden-lg-up">
                    <ul class="mobile-menu-list">
                      <li>
                        <a
                          class="nav-link"
                          href="javascript:void(0)"
                          data-target="#HeroBanner"
                        >
                          Home
                        </a>
                      </li>

                      <li>
                        <a
                          class="nav-link"
                          href="javascript:void(0)"
                          data-target="#ContactUs"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            <section id="HeroBanner">
              <div class="hero-content">
                <h1>Welcome to GUC parking spots</h1>
                <p>Reserver your parking spot</p>
                <a href="/spots" class="hero-cta">
                  C6
                </a>
                <a href="/spots" class="hero-cta">
                  C7
                </a>
                <a href="/spots" class="hero-cta">
                  C8
                </a>
              </div>
            </section>
          </section>
        </body>
      </div>
    )
  }
}

export default home
