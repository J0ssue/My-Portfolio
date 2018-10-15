import React from 'react'

const date = new Date();

const Footer = () => {
	return (
		<footer id="footer">
			<div className="row">
				<div className="address column">
					<h2>LOCATION</h2>	
					<address>
						Carregado, Portugal
					</address>
				</div>	
				<div className="about column">
					<h2>about developer</h2>	
					<p>
						Please feel free to contact me for any freelancing work, or hiring purposes. Here's a copy of my <a href="#">CV</a> and <a href="">github</a>. 
					</p>
				</div>
				<div className="social column">
					<h2>AROUND THE WEB</h2>	
					<ul>
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
			</div>
			<p className="copyright">Copyright &copy; Josue Diaz, {date.getUTCFullYear()}</p>
		</footer>
	);
};

export default Footer;