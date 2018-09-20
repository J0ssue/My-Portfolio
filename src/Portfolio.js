import React, {PropTypes} from 'react';
import './index.css';

import Navbar from './Navbar';
import Header from './Header';
import Projects from './Projects';
import Footer from './Footer';



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
				<Footer />
			</div>
		);
	}
};

export default Portfolio;