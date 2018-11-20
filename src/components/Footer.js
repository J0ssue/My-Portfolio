import React, { Component } from 'react';

class Footer extends Component {
	render() {
		const date = new Date();
		return (
			<footer className="copyright">Copyright &copy; Josue Diaz, {date.getUTCFullYear()}</footer>
		);
	}
}

export default Footer;