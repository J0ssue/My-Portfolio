import React, { Component } from 'react';

const desc = {
	cardGame: 'Lorem ipsum dolor sit amet.',
	helloWorld: 'Lorem ipsum dolor sit amet, consectetur.'
};

const ProjectContainer = (props) => {
	return (
		<div className="container-rows">
			<Project 
				title="Card Game" 
				desc={desc.cardGame}
			/>
			<Project 
				title="Hello World" 
				desc={desc.helloWorld}
			/>
		</div>
	);
};

const Project = (props) => {
	return (
		<div className="project">
			<h3>{props.title}</h3>
			<p>{props.desc}</p>
		</div>
	);
};

export default ProjectContainer;