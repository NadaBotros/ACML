import React, { Component } from 'react'
import './home.css'
import Button from 'react-bootstrap/Button'

export class home extends Component {
	render() {
		return (
			<div>
				<body
					data-spy='scroll'
					data-target='.main-navigation'
					data-offset='150'
				>
					<section id='MainContainer'>
						<header id='Header'>
							<nav class='main-navigation'>
								<div class='container clearfix'>
									<div class='container clearfix'>
										<div class='site-logo-wrap'>
											<a class='logo' href='#'></a>
										</div>
										<a
											href='javascript:void(0)'
											class='menu-trigger hidden-lg-up'
										>
											<span>&nbsp;</span>
										</a>
										<div class='main-menu hidden-md-down'>
											<ul class='menu-list'>
												<li>
													<a
														class='nav-link'
														href='javascript:void(0)'
														data-target='#HeroBanner'
													>
														Home
													</a>
												</li>

												<li>
													<a
														class='nav-link'
														href='javascript:void(0)'
														data-target='#ContactUs'
													>
														Contact
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div class='mobile-menu hidden-lg-up'>
										<ul class='mobile-menu-list'>
											<li>
												<a
													class='nav-link'
													href='javascript:void(0)'
													data-target='#HeroBanner'
												>
													Home
												</a>
											</li>

											<li>
												<a
													class='nav-link'
													href='javascript:void(0)'
													data-target='#ContactUs'
												>
													Contact
												</a>
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</header>
						<section id='HeroBanner'>
							<div class='hero-content'>
								<h1>Welcome to GUC parking spots</h1>
								<p>Reserve your parking spot</p>
								<a
									href='/spots'
									class='hero-cta'
									onClick={localStorage.setItem('parking', 1)}
								>
									P1
								</a>
								<a
									href='/spots'
									class='hero-cta'
									onClick={localStorage.setItem('parking', 5)}
								>
									P5
								</a>
								<a
									href='/spots'
									class='hero-cta'
									onClick={localStorage.setItem('parking', 6)}
								>
									P6
								</a>
								<a
									href='/spots'
									class='hero-cta'
									onClick={localStorage.setItem('parking', 7)}
								>
									P7
								</a>
								<a
									href='/maps'
									class='hero-cta'
									onClick={localStorage.setItem('parking', 8)}
								>
									P8
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
