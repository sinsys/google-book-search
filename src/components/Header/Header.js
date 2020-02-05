import React, {Component} from 'react';
import './Header.css';

import Search from './Search/Search';

class Header extends Component {
	render() {
		return (
			<div
				className="header"
			>
				<h2
					className="header-title"
				>
					Google Book Search
				</h2>
				<Search 
					updateBooks = {this.props.updateBooks}
				/>
			</div>
		)
	}
}

export default Header;