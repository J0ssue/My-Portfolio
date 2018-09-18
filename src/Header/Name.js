import React from 'react';

const Name = () => { 
	return (
		<div>
			<h1 className="animated flipInY">Josue Diaz</h1>
			<div className="email">
				<a href="">jdiaz66@icloud.com</a>
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
	);
};

export default Name;
