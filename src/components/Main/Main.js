import React, { Component } from 'react';
import ProjectItemPage from '../ProjectItemPage/ProjectItemPage';
import {Route, Switch} from 'react-router-dom';
import './Main.css';
import Projects from '../../data/ProjectsData';
import ProjectList from '../ProjectList/ProjectList';
import propTypes from 'prop-types';

class projectList extends Component {
    state = {
		projects: Projects,
		urlList: Projects.map(project => project.url),
		activePage: Projects.map(project => project.id)
	}

    render() {

        return(
            <main onClick={this.props.clicked} onTouchStart={this.props.clicked} >         
                <Switch>
                    {
                        this.state.projects.map(project => {
                            return(
                                <Route
                                    key={project.id} 
                                    path={'/' + project.url} 
									component={
											() => <ProjectItemPage 
											id={project.id}
											title={project.title}
											url={project.url}
											content={project.content}
											link={project.link}
											urlList={this.state.urlList}
										/>
									}
								/>
                            )
                        })
                    }
					<Route component={() => <ProjectList projects={this.state.projects}/>} />
                </Switch>
            </main>  
        );
    }
}

projectList.propTypes = {
	clicked: propTypes.func
}

export default projectList;