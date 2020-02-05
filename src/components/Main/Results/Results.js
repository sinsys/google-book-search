import React, { Component } from 'react';
import './Results.css';

import Result from './Result/Result';

class Results extends Component {

	render() {
		const books = this.props.books
			.map((book, i) => (
				<Result
					bookDetails={{...book}}
					key={"book-" + book.id}
					url={"https://play.google.com/store/books/details?id=" + book.id}
				/>
			));
		return (
			<div
				className="results-wrapper"
			>
				<h2>
					Results
				</h2>
				{books}
			</div>
		)
	}
}

// Required blank prop so page renders with blank search or page load
Results.defaultProps = {
	books: []
}

export default Results;


