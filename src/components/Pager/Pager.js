import React from 'react';
import {Link} from 'react-router-dom';
import './Pager.css';
import propTypes from 'prop-types';

const pager = (props) => {
	return(
		<div className='Pager'>
			<Link to={props.id === 0 ? props.urlList[props.urlList.length-1] : props.urlList[props.id-1]}>previous</Link>
			<Link to={props.id === props.urlList.length-1 ? props.urlList[0] : props.urlList[props.id+1]}>next</Link>
		</div>
	)
}

pager.propTypes = {
	id: propTypes.number,
	urlList: propTypes.array
}

export default pager;