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
import BackToTop from './components/BackToTop';

// Portfolio Stateful component
class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showMenu: false,
		};

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.backToTop = this.backToTop.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
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

	// handles the scroll for the button to go back to top of page
	handleScroll(e) {
		if (window.pageYOffset > 20) {
			document.querySelector('#page-top').style.display = 'block';
		} else {
			document.querySelector('#page-top').style.display = 'none';
		}
	}

	// handles click for button to scroll to top
	backToTop() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
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
				<BackToTop 
					backToTop={this.backToTop}
				/>
			</div>
		);
	}
};

export default Portfolio;