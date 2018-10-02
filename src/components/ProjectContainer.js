import React, { Component } from 'react';
import './project1.png';

const desc = {
	cardGame: 'The goal is to match every card with it\'s corresponding match. Click thorugh each card on the deck and find its match by clicking on another card.',
	helloWorld: 'Lorem ipsum dolor sit amet, consectetur.',
	cardGameImg: 'project1.png',
};

const ProjectContainer = () => {
	return (
		<div className="container-rows">
			<Project 
				title="Memory Card Game" 
				desc={desc.cardGame}
			/>
			<Project 
				title="Hello World" 
				desc={desc.helloWorld}
			/>
			<Project
				title="Whats Up"
				desc={desc.helloWorld}
			 />
		</div>
	);
};

const Project = (props) => {
	return (
		<div className="project">
			<h3>{props.title}</h3>
			<img src="project1.png" />
			<p>{props.desc} here's also a link to my project on github <br/> <em><a href="https://github.com/J0ssue/Memory-Card-Game">https://github.com/J0ssue/Memory-Card-Game</a></em></p>
		</div>
	);
};

export default ProjectContainer;