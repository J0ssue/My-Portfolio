import React, {PropTypes} from 'react';
import './index.css';

import Header from './Header';
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
				<Header />
				<Footer />
			</div>
		);
	}
};

export default Portfolio;