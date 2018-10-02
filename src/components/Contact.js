import React, { Component } from 'react';

const Form = () => {
	return (
		<form action="">
			<div>
				<label htmlFor="name">Name</label>
				<input type="text"/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email"/>
			</div>
			<div>
				<label htmlFor="number">Phone Number</label>
				<input type="number"/>
			</div>
			<div>
				<label htmlFor="msg">Message</label>
				<textarea name="msg" id="msg" cols="30" rows="10"></textarea>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

class Contact extends React.Component {
	render() {
		return (
			<section id="contact">
				<h1>Contact Me</h1>
				<Form />	
			</section>
		);
	}
}

export default Contact;