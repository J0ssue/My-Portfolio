import React, { Component } from 'react';
import memoryImg from '../img/project1.png';
import landingImg from '../img/landing-pg.png';
import techDocsImg from '../img/tech-docs.png';
import surveyImg from '../img/survey-form.png';
import githubProf from '../img/github-profile.png';

// Projects Model
const projects = {

	cardGame: {
		title: 'Memory Card Game',
		url: 'https://github.com/J0ssue/Memory-Card-Game',
		live: 'https://j0ssue.github.io/Memory-Card-Game/',
		icons: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt']
	},

	techDocs: {
		title: 'ES6 Technical Documentation',
		url: 'https://github.com/J0ssue/fcc-technical-docs-page',
		live: 'https://j0ssue.github.io/fcc-technical-docs-page/',
		icons: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt'],
	},

	landing: {
		title: 'Landing Page',
		url: 'https://github.com/J0ssue/fcc-product-landing-page',
		live: 'https://j0ssue.github.io/fcc-product-landing-page/',
		icons: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt'],
	},

	githubProf: {
		title: 'Github Profile',
		url: 'https://github.com/J0ssue/github_profile',
		live: ' https://j0ssue.github.io/github_profile/',
		icons: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt'],
	},

	survey: {
		title: 'Survey Form',
		url: 'https://github.com/J0ssue/fcc-survey-form',
		live: 'https://j0ssue.github.io/fcc-survey-form/',
		icons: ['fab fa-js', 'fab fa-html5', 'fab fa-css3-alt'],
	},	

};

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {hidden: true};
		this.handleClick = this.handleClick.bind(this);
		this.toggleProjects = this.toggleProjects.bind(this);
	}
	
	handleClick() {
		this.state.hidden ? this.setState({hidden: false}) : this.setState({hidden: true});
		this.toggleProjects();
	}

	toggleProjects() {
		const hiddenProjects = document.querySelector('#hidden-projects');
		if (this.state.hidden) {
			hiddenProjects.className = 'show-more-projects';
		} else {
			hiddenProjects.className = 'hide-more-projects';
		}
	}

	render() {
		return (
			<section id="portfolio">
				<h1>Projects</h1>
				<ProjectContainer onClick={this.handleClick} />
			</section>
		);
	}
}

const ProjectContainer = (props) => {
	const cardGameIcons = projects.cardGame.icons;
	const techDocsIcons = projects.techDocs.icons;
	const landingIcons = projects.landing.icons;
	const githubProfIcons = projects.githubProf.icons;
	const surveyIcons = projects.survey.icons;
	
	return (
		<div id="projects-content">
			<div id="project-container">
					<Project 
						title={projects.cardGame.title} 
						desc={projects.cardGame.desc} 
						live={projects.cardGame.live} 
						url={projects.cardGame.url} 
						img={memoryImg}
						icons={cardGameIcons}
					/>

					<Project 
						title={projects.techDocs.title} 
						desc={projects.techDocs.desc} 
						live={projects.techDocs.live} 
						url={projects.techDocs.url} 
						img={techDocsImg}
						icons={techDocsIcons}
					/>
					<Project 
						title={projects.landing.title} 
						desc={projects.landing.desc} 
						live={projects.landing.live} 
						url={projects.landing.url} 
						img={landingImg}
						icons={landingIcons}
					/>

			</div>	
			<div className="container show-more-container">
				<button id="btn-show" className="button-glow" onClick={props.onClick}>[ + ] show more</button>
			</div>
			<div id="hidden-projects" className="hide-more-projects">
				<Project 
					title={projects.githubProf.title} 
					desc={projects.githubProf.desc} 
					live={projects.githubProf.live} 
					url={projects.githubProf.url} 
					img={githubProf}
					icons={githubProfIcons}
				/>
				<Project 
					title={projects.survey.title} 
					desc={projects.survey.desc} 
					live={projects.survey.live} 
					url={projects.survey.url} 
					img={surveyImg}
					icons={surveyIcons}
				/>	
			</div>
		</div>
	);
};

const Project = (props) => {
	return (
		<div className="project">
			<h3>{props.title}</h3>
			<img src={props.img} alt="project-img" />
			<div className="icons-container">
				{props.icons.map((icon, index) => {
					return (
						<i className={icon} key={index}></i>
					);
				})}	
			</div>
			<div className="btns">
				<em><a href={props.url} target="_blank" className="button">github</a> <a href={props.live} className="button" target="_blank">live</a></em>
			</div>
		</div>
	);
};

export default Projects;