import React from 'react';

const BackToTop = props => {
	return (
			<i 
				id="page-top"
				onClick={props.backToTop}
				className="far fa-caret-square-up">
			</i>
	);
}

export default BackToTop;