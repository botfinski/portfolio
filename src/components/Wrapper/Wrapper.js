import React from 'react';
import './Wrapper.css';
import propTypes from 'prop-types';

const wrapper = (props) => (
	<div className={'wrapper ' + props.className}>
		{props.children}
	</div>
);

wrapper.propTypes = {
	className: propTypes.string,
	children: propTypes.array
}


export default wrapper;