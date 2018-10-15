import React from 'react';
import memoryImg from '../img/project1.png';
import landingImg from '../img/landing-pg.png';
import techDocsImg from '../img/tech-docs.png';
import surveyImg from '../img/survey-form.png';
import githubProf from '../img/github-profile.png';

// Projects Model
const projects = {

	cardGame: {
		title: 'Memory Card Game',
		desc: 'The goal is to match every card with it\'s corresponding match. Click thorugh each card on the deck and find its match by clicking on another card.',
		url: 'https://github.com/J0ssue/Memory-Card-Game',
		live: 'https://j0ssue.github.io/Memory-Card-Game/'
	},

	techDocs: {
		title: 'ES6 Technical Documentation',
		desc: 'This technical documentation project holds JavaScript ES6 documentation. HTML rendered with JavaScript using MVC.',
		url: 'https://github.com/J0ssue/fcc-technical-docs-page',
		live: 'https://j0ssue.github.io/fcc-technical-docs-page/'
	},

	landing: {
		title: 'Landing Page',
		desc: 'This landing page displays a programming course business landing page. To render the information on each section I used the most basic idea of MVC to practice this technique of organizing code.',
		url: 'https://github.com/J0ssue/fcc-product-landing-page',
		live: 'https://j0ssue.github.io/fcc-product-landing-page/'
	},

	githubProf: {
		title: 'Github Profile',
		desc: 'In this small project I use the github API to fetch information about my personal profile and display it onto the DOM.',
		url: 'https://github.com/J0ssue/github_profile',
		live: ' https://j0ssue.github.io/github_profile/'
	},

	survey: {
		title: 'Survey Form',
		desc: 'This is FreeCodeCamp\'s survey form project for the Responsive Web Design Projects.It includes index.html, style.css, background.jpg, app.js, helper.js.',
		url: 'https://github.com/J0ssue/fcc-survey-form',
		live: 'https://j0ssue.github.io/fcc-survey-form/'
	},	

};

class Projects extends React.Component {
	render() {
		return (
			<section id="portfolio">
				<h1>Projects</h1>
				<ProjectContainer />
			</section>
		);
	}
}

const ProjectContainer = () => {
	return (
		<div id="project-container">
				<Project 
					title={projects.cardGame.title} 
					desc={projects.cardGame.desc} 
					live={projects.cardGame.live} 
					url={projects.cardGame.url} 
					img={memoryImg}
				/>

				<Project 
					title={projects.techDocs.title} 
					desc={projects.techDocs.desc} 
					live={projects.techDocs.live} 
					url={projects.techDocs.url} 
					img={techDocsImg}
				/>
				<Project 
					title={projects.landing.title} 
					desc={projects.landing.desc} 
					live={projects.landing.live} 
					url={projects.landing.url} 
					img={landingImg}
				/>
				<Project 
					title={projects.githubProf.title} 
					desc={projects.githubProf.desc} 
					live={projects.githubProf.live} 
					url={projects.githubProf.url} 
					img={githubProf}
				/>
				<Project 
					title={projects.survey.title} 
					desc={projects.survey.desc} 
					live={projects.survey.live} 
					url={projects.survey.url} 
					img={surveyImg}
				/>
		</div>	
	);
};

const Project = (props) => {
	return (
		<div className="project">
			<h3>{props.title}</h3>
			<img src={props.img} />
			<p>{props.desc}</p>
			<div className="btns">
				<em><a href={props.url} target="_blank" className="button">github</a> <a href={props.live} className="button" target="_blank">live</a></em>
			</div>
		</div>
	);
};

export default Projects;