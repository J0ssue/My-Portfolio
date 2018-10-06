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
	}
	render() {
		return (
			<div>
				<Navbar />
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