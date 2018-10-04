import React, { Component } from 'react';

import memoryImg from '../img/project1.png';
import techDocsImg from '../img/landing-pg.png';
import landingImg from '../img/tech-docs.png';

const projects = {
	cardGame: {
		title: 'Memory Card Game',
		desc: 'The goal is to match every card with it\'s corresponding match. Click thorugh each card on the deck and find its match by clicking on another card.',
		url: 'https://github.com/J0ssue/Memory-Card-Game',
	},
	techDocs: {
		title: 'ES6 Technical Documentation',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ipsum.',
		url: 'https://j0ssue.github.io/fcc-technical-docs-page/',
	},
	landing: {
		title: 'Landing Page',
		desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, doloribus.',
		url: 'https://j0ssue.github.io/fcc-product-landing-page/',
	}
};

class Projects extends React.Component {
	render() {
		return (
			<section id="projects">
				<h1>Projects</h1>
				<ProjectContainer />
			</section>
		);
	}
}

const ProjectContainer = () => {
	return (
		<div>
			<Project 
				title={projects.cardGame.title} 
				desc={projects.cardGame.desc} 
				url={projects.cardGame.url} 
				img={memoryImg}
			/>

			<Project 
				title={projects.techDocs.title} 
				desc={projects.techDocs.desc} 
				url={projects.techDocs.url} 
				img={techDocsImg}
			/>
			<Project 
				title={projects.landing.title} 
				desc={projects.landing.desc} 
				url={projects.landing.url} 
				img={landingImg}
			/>
		</div>
	);
};

const Project = (props) => {
	return (
		<div className="project">
			<h3>{props.title}</h3>
			<img src={props.img} />
			<p>{props.desc} here's also a link to my project on github <br/> <em><a href={props.url} target="_blank" className="button">github code</a></em></p>
		</div>
	);
};

export default Projects;