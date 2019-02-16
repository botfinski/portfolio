import React from 'react';
import './ProjectItem.css';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

const projectItem = (props) => {
    return(
        <div className='main__columns__item'>
            <Link to={props.url} className='main__columns__item__link'>
                <img className='main__columns__item__image' src={require('../../data/_miniatures/' + props.image)} alt={props.title}/>
                <div className='main__columns__item__info'>
                    <p className='main__columns__item__info__title'>{props.title}</p>
                    <p className='main__columns__item__info__category'>{props.category}</p>
                </div>
            </Link>    
        </div>
    )
};

projectItem.propTypes = {
	url: propTypes.string,
	image:propTypes.string,
	title:propTypes.string,
	category: propTypes.string
}

export default projectItem;