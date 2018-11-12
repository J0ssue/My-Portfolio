import React, { Component } from 'react';

class Navbar extends Component  {
	render() {
		return (
			<nav id="navbar">
				<div className="nav-container">
					<div id="nav-brand" className="button-glow">
						 <a href="#header">
						 [ <i className="fab fa-react"></i>
						 	 <i className="fab fa-js-square"></i>
						 	 <i className="fab fa-html5"></i>
						 	 <i className="fab fa-css3"></i>
						 	 <i className="fab fa-github-alt"></i>] JDiaz
						 	 <i className="fas fa-code"></i>
						 </a>	
					</div>
					<div id="menu-btn">
						<button onClick={this.props.showMenu}>
							Menu
							<i className="fas fa-bars"></i>
						</button>
					</div>
				</div>
				{
				this.props.getMenuState ? (
				<div id="dropdown">
					<ul>
						<li>
							<a href="#about" className="animated pulse">About</a>
						</li>	
						<li>
							<a href="#portfolio">Portfolio</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
				) : ( null )
				}
				<div id="menu">
					<a href="#about">About</a>
					<a href="#portfolio">Portfolio</a>
					<a href="#contact">Contact</a>
				</div>
			</nav>
		);
	}
};

export default Navbar;