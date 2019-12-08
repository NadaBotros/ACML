import React, { Component } from 'react'
import './home.css'

export class home extends Component {
	//   handleClick(e) {
	//     console.log(+'ID : ' + e.target.id)
	//   }

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
							<nav className='main-navigation'>
								<div className='container clearfix'>
									<div className='container clearfix'>
										<div className='site-logo-wrap'>
											<a className='logo' href='#'></a>
										</div>
										<a
											href='javascript:void(0)'
											className='menu-trigger hidden-lg-up'
										>
											<span>&nbsp;</span>
										</a>
										<div className='main-menu hidden-md-down'>
											<ul className='menu-list'>
												<li>
													<a
														className='nav-link'
														href='javascript:void(0)'
														data-target='#HeroBanner'
													>
														Home
													</a>
												</li>

												<li>
													<a
														className='nav-link'
														href='javascript:void(0)'
														data-target='#ContactUs'
													>
														Contact
													</a>
												</li>
											</ul>
										</div>
									</div>

									<div className='mobile-menu hidden-lg-up'>
										<ul className='mobile-menu-list'>
											<li>
												<a
													className='nav-link'
													href='javascript:void(0)'
													data-target='#HeroBanner'
												>
													Home
												</a>
											</li>

											<li>
												<a
													className='nav-link'
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
							<div className='hero-content'>
								<h1>Welcome to GUC parking spots</h1>
								<p>Reserve your parking spot</p>
								<a
									id='P1'
									href='/spots'
									className='hero-cta'
									onClick={localStorage.setItem('parking', 1)}
								>
									P1
								</a>
								<a
									id='P5'
									href='/spots'
									className='hero-cta'
									onClick={localStorage.setItem('parking', 5)}
								>
									P5
								</a>
								<a
									id='P6'
									href='/spots'
									className='hero-cta'
									onClick={localStorage.setItem('parking', 6)}
								>
									P6
								</a>
								<a
									id='p7'
									href='/spots'
									class='hero-cta'
									onClick={localStorage.setItem('parking', 7)}
								>
									P7
								</a>
								<a
									id='p8'
									href='/spots'
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
