import React, { Component } from 'react';

class BackToTop extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<i 
				id="page-top"
				onClick={this.props.backToTop}
				className="far fa-caret-square-up">
				</i>
		);
	}
}

export default BackToTop;