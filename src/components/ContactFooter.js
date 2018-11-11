import React from 'react'

const ContactFooter = () => {
	const date = new Date();

	return (
		<section id="contact">
			<div>
				<h1>Contact Me</h1>
					<p>Would you like to hire me? Feel free to send me an email to <a href="mailto:jdiaz66@icloud.com"><em>jdiaz66@icloud.com</em></a></p>
			</div>
			<div className="row">
				<div className="column">
					<h3>location</h3>	
					<address>
						Carregado, Portugal
					</address>
				</div>	
				<div className="column">
					<h3>about developer</h3>	
					<p>
						Please feel free to contact me for any freelancing work, or hiring purposes. Here's a copy of my <a href="#">CV</a> and <a href="">github</a>. 
					</p>
				</div>
				<div className="column">
					<h3>social</h3>	
					<ul>
						<li>
							<a href="https://www.freecodecamp.org/j0ssue" target="_blank" className="fab fa-free-code-camp" rel="noopener noreferrer"></a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/josue-diaz-67648a159/" target="_blank" className="fab fa-linkedin-in" rel="noopener noreferrer"></a>
						</li>
						<li>
							<a href="https://github.com/J0ssue" target="_blank" className="fab fa-github" rel="noopener noreferrer"></a>
						</li>
					</ul>
				</div>	
			</div>
			<footer className="copyright">Copyright &copy; Josue Diaz, {date.getUTCFullYear()}</footer>
		</section>
	);
};

export default ContactFooter;