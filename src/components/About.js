import React from 'react';
import me from '../img/me.jpeg';

// About component
const About = () => {
	return (
		<section id="about">
			<h1>About</h1>
			<div className="container">
				<div className="row">
					<div className="column column-40">
							<img src={me} alt="my pic" className="about-pic"/>
							<p>
								<b>
									Web Developer
								 <i className="fas fa-code"></i>
								</b>
							</p>
					</div>
					<div classsname="column">
						<p>
									<em><b>Hi. I'm Josue Diaz, a Front End Software Developer based in Portugal. Please take a look around!</b></em>
						</p>
						<p>
							I am passionate about building excellent software that improves the lives of those around me. I specialize in <em><b>React, Bootstrap, Milligramm, JavaScript, HTML, and CSS.</b></em> I have over 1 year experience building projects on my own and have been teaching myself how to program on my free time.
						</p>
						<p>
							I built this website using React and Milligramm, I've also worked on a website in collaboration with my weekly meet-up group freecodecamp Lisbon in which I made use of the Facebook API, among many other personal projects. All of my work is produced from Portugal and is showcased in github. 
						</p>
					</div>
				</div>	
			</div>
		</section>
	);
};

export default About;