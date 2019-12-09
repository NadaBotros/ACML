import React, { Component } from 'react'
import './home.css'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
              <nav className="main-navigation">
                <div className="container clearfix">
                  <div className="container clearfix">
                    <div className="site-logo-wrap">
                      <a className="logo" href="#"></a>
                    </div>
                    <a
                      href="javascript:void(0)"
                      className="menu-trigger hidden-lg-up"
                    >
                      <span>&nbsp;</span>
                    </a>
                    {/* <div className="main-menu hidden-md-down">
                      <ul className="menu-list">
                        <li>
                          <a
                            className="nav-link"
                            href="javascript:void(0)"
                            data-target="#HeroBanner"
                          >
                            Home
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>

                  {/* <div className="mobile-menu hidden-lg-up">
                    <ul className="mobile-menu-list">
                      <li>
                        <a
                          className="nav-link"
                          href="javascript:void(0)"
                          data-target="#HeroBanner"
                        >
                          Home
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </nav>
            </header>
            <section id="HeroBanner">
              <div className="hero-content">
                <h1>Welcome to GUC parking spots</h1>
                <p>Reserve your parking spot</p>
                <Link
                  id="P1"
                  to="/spots/1"
                  className="hero-cta"
                  // onClick={localStorage.setItem('parking', 1)}
                >
                  P1
                </Link>
                <Link
                  id="P5"
                  to="/spots/5"
                  className="hero-cta"
                  // onClick={localStorage.setItem('parking', 5)}
                >
                  P5
                </Link>
                <Link
                  id="P6"
                  to="/spots/6"
                  className="hero-cta"
                  // onClick={localStorage.setItem('parking', 6)}
                >
                  P6
                </Link>
                <Link
                  id="p7"
                  to="/spots/7"
                  class="hero-cta"
                  // onClick={localStorage.setItem('parking', 7)}
                >
                  P7
                </Link>
                <Link
                  id="p8"
                  to="/spots/8"
                  class="hero-cta"
                  // onClick={localStorage.setItem('parking', 8)}
                >
                  P8
                </Link>
              </div>
            </section>
          </section>
        </body>
      </div>
    )
  }
}

export default home
