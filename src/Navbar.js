import React, { Component } from 'react';

class Navbar extends Component  {
	constructor() {
		super();

		this.state = {
			showMenu: false,
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	showMenu(event) {
		event.preventDefault();
		this.setState({showMenu: true,}, () => {
			document.addEventListener('click', this.closeMenu);
		});

		if (this.state.showMenu === true) {
			this.setState({
				showMenu: false,
			});
		}
	}

	closeMenu(event) {
		this.setState({showMenu: false}, () => {
				document.removeEventListener('click', this.closeMenu);
			});
	}
	render() {
		return (
			<nav id="navbar">
				<div className="nav-container">
					<div id="nav-brand">
						<a href="#header">Josue</a>	
					</div>
					<div id="menu-btn">
						<button onClick={this.showMenu}>
							Menu
							<i className="fas fa-bars"></i>
						</button>
					</div>
				</div>
				{
				this.state.showMenu ? (
				<div id="dropdown">
					<ul>
						<li>
							<a href="">About</a>
						</li>	
						<li>
							<a href="">Portfolio</a>
						</li>
						<li>
							<a href="">Contact</a>
						</li>
					</ul>
				</div>
				) : ( null )
				}
				<div id="menu">
					<a href="">About</a>
					<a href="">Portfolio</a>
					<a href="">Contact</a>
				</div>
			</nav>
		);
	}
};

export default Navbar;