import React, { Component } from 'react';
import './index.css';

// Milligram CSS framework
import 'milligram';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Portfolio Stateful component
class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMenu: false,
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	// opens barnav menu
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

	// Closes barnav menu
	closeMenu(event) {
		this.setState({showMenu: false}, () => {
				document.removeEventListener('click', this.closeMenu);
			});
	}

	render() {
		return (
			<div>
				<Navbar 
					showMenu={this.showMenu}
					closeMenu={this.closeMenu}
					getMenuState={this.state.showMenu}
				/>
				<Header />
				<Projects />
				<About />
				<Contact />
				<Footer />
			</div>
		);
	}
};

export default Portfolio;