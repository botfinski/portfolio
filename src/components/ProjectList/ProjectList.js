import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import Wrapper from '../Wrapper/Wrapper';
import './ProjectList.css';
import propTypes from 'prop-types';

class ProjectList extends Component {
    componentDidMount() {
		document.title = 'Portfolio';
	}

    render() {
        return(
            <Wrapper className='columns'>
                {
                    this.props.projects.map(project => {
                        return(
                            <ProjectItem 
                                url={project.url} 
                                key={project.id} 
                                title={project.title} 
                                image={project.image} 
                                category={project.category}/>
                        )
                    })
                }
            </Wrapper>
        );
    }
}

ProjectList.propTypes = {
	project: propTypes.object
}

export default ProjectList;