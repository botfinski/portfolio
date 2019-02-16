import React from 'react';
import './MenuButton.css';
import propTypes from 'prop-types';

const menuButton = (props) => {
    let menuClassName = props.opened ? 'Menu_button Menu_button--opened' : 'Menu_button';

    return(
        <button onClick={props.clicked} className={menuClassName} type='button'>
            <span></span>
            <span></span>
            <span></span>
        </button>    
    )
};

menuButton.propTypes = {
	opened: propTypes.bool,
	clicked: propTypes.func
}

export default menuButton;