import React, { Component } from 'react';
import './Main.css';

import Results from './Results/Results';

// This is simply a wrapper for the main content
// This exists solely so I can easily add more functionality later
class Main extends Component {

	render() {
		return (
			<div
				className="main-wrapper"
			>
				<Results 
					books={this.props.results}
				/>
			</div>
		)
	}
}

export default Main;