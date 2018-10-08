import React, { Component } from 'react';

class Navbar extends Component  {
	constructor() {
		super();

	}

	render() {
		return (
			<nav id="navbar">
				<div className="nav-container">
					<div id="nav-brand">
						<a href="#header">Josue</a>	
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
							<a href="#about">About</a>
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