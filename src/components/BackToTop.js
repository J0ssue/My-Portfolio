import React, { Component } from 'react';

class BackToTop extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<button 
				id="page-top"
				onClick={this.props.backToTop}
			>up</button>	
		);
	}
}

export default BackToTop;