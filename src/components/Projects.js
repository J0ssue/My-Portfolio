import React, { Component } from 'react';
import ProjectContainer from './ProjectContainer';

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

export default Projects;