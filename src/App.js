import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {

	componentDidMount() {
		document.title = 'Portfolio'
	}	

	render() {
		
		return (
			<BrowserRouter basename='/projects/portfolio/'>
				<Layout/>
			</BrowserRouter>
		);
	}
}

export default App;
