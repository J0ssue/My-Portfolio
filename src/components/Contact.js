import React, { Component } from 'react';

const Form = () => {
	return (
		<form action="" id="contact">
			<div className="one-row">
				<div classNam="one-column">
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
				</div>
				<div className="two-column">
					<div>
						<button>Send</button>
					</div>
				</div>
			</div>
		</form>
	);
};

class Contact extends Component {
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