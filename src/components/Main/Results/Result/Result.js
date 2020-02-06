import React, { Component } from 'react';
import './Result.css';

class Result extends Component {

	// Prevents massive descriptions being listed
	reduceDescLength(str, maxChars) {
		if(str !== undefined){
			return (
				str.length > maxChars
					? str.substring(0, maxChars - 3) + "..." 
					: str.substring(0, maxChars)
			);
		}	else {
			return "This book currently has no description listed.";
		}
	}

	// Displays price and currency unless book is free
	displayPrice(book) {
		if(book.saleInfo.saleability === "FOR_SALE" && 
			book.saleInfo.listPrice.amount !== 0) {
			return(
				"$" + 
				book.saleInfo.listPrice.amount + 
				" " +
				book.saleInfo.listPrice.currencyCode
			)
		} else {
			return(
				"FREE"
			)
		}
	}

	// Handles blank or nonexistent authors
	displayAuthor(authors){
		if(authors === undefined || authors.length === 0){
			return(
				"No author listed"
			)
		} else {
			return(
				authors[0]
			)
		}
	}

	displayThumbnail(src) {
		console.log(src);
		if(typeof(src.imageLinks.thumbnail) === undefined){
			return(
				"https://dummyimage.com/128x206/CCCCCC/333333.jpg&text=No+thumbnail+found"
			)
		} else {
			return src.imageLinks.thumbnail;
		}
	}
	render() {
		return (
			<div
				className="book-wrapper"
			>
				<h3
					className="book-title"
				>
					{this.props.bookDetails.volumeInfo.title}
					<span
						className="book-author"
					>
						{this.displayAuthor(this.props.bookDetails.volumeInfo.authors)}
					</span>
				</h3>
				<div
					className="book-details-wrapper"
				>
					<img
					  src={this.displayThumbnail(this.props.bookDetails.volumeInfo)}
					  alt={this.props.bookDetails.volumeInfo.title + " thumbnail"}
					  className="book-thumbnail"
					/>

					<p
						className="book-description"
					>
						{this.reduceDescLength(
							this.props.bookDetails.volumeInfo.description,
							256
						)}
					</p>
					<div
						className="book-buy-wrapper"
					>
						<p
							className="book-cost"
						>
							{this.displayPrice(this.props.bookDetails)}
						</p>
						<p>
							<a
								href={this.props.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								View on Web
							</a>
						</p>
					</div>
				</div>
				<hr />
			</div>
		)
	}
}

export default Result;