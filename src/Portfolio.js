import React, {PropTypes} from 'react';
import './index.css';

import 'milligram';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

// Portfolio Stateful component
class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div>
				<Navbar />
				<Header />
				<Projects />
				<About />
				<Footer />
			</div>
		);
	}
};

export default Portfolio;