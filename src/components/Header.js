import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header id="header">
					<Name />
			</header>
		);
	}
};

const Name = () => { 
	return (
		<div className="row">
			<div className="column">
				<h1 className="animated flipInY">Josue Diaz</h1>
			</div>
			<div className="column">
				<div className="email">
					<em><a href="">jdiaz66@icloud.com</a></em>
				</div>
				<div className="cv">
					Here's my <a href="https://j0ssue.github.io/frontend-nanodegree-resume/" target="_blank">cv</a>
				</div>
				<div>
					<ul className="links">
						<li>
							<a href="https://www.freecodecamp.org/j0ssue" target="_blank" className="fab fa-free-code-camp"></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/josue-diaz-67648a159/" target="_blank" className="fab fa-linkedin-in"></a>
						</li>
						<li>
							<a href="https://github.com/J0ssue" target="_blank" className="fab fa-github"></a>
						</li>
					</ul>
				</div>
				<div className="job-title">
					<p>Web Developer</p>
				</div>
			</div>
		</div>
	);
};


export default Header;