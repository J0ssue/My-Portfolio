import React, { Component } from 'react';

// About component
class About extends React.Component {
	render() {
		return (
			<section id="about">
				<h1>About</h1>
				<div className="about-img">
					<img src="" alt=""/>
				</div>
				<div classsName="intro-p">
					<p>
						<b>Hi. I'm Josue Diaz, a Front End Software Developer from Guatemala, based in Portugal. Please take a look around!</b>
					</p>
				</div>
					<p className="bio-p">
						I am passionate about building excellent software that improves the lives of those around me. I specialize in JavaScript, HTML, CSS, and React, I have over 1 year experience building projects on my own and have been teaching myself how to program on my free time.
					</p>
					<p className="bio-p">
						I've worked in varied projects which showcase in github in which I've had the chance to experiment with different technologies that enable front end development to be more proficient.All of my work is produced from Portugal. 
					</p>
					<p className="bio-p">
						What would you do if you had a software expert available at your fingertips?
					</p>
			</section>
		);
	}
};

export default About;