import React, {Component} from 'react';
import './Search.css';

import Filters from './Filters/Filters';

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchTerm: "",
			cost: "ebooks",
			method: "relevance",
			maxResults: 0
		}
	}

	/* The functions below are just to update our state with user input */
	searchTermChanged(searchTerm) {
		this.setState({
			searchTerm
		})
	}

	/* These three get passed to the Filter component to coorespond with this state */
	costChanged = (cost) => {
		this.setState({
			cost
		})
	}

	methodChanged = (method) => {
		this.setState({
			method
		})
	}

	maxResultsChanged = (maxResults) => {
		this.setState({
			maxResults
		})
	}

	// Builds the final search URL based on our state
	constructUrl(params){
		let baseUrl = "https://www.googleapis.com/books/v1/volumes";
		const key = "AIzaSyCqQ4BjzpLpECHPUO9T1WrGlTRJW9W5gfw";
    if(this.state.searchTerm === ""){
    	alert("You need to enter a search term");
    	return;
    } else {
    	baseUrl += ("?q=" + params.searchTerm);
    }

    baseUrl += ("&filter=" + params.cost);
    baseUrl += ("&orderBy=" + params.method);

    if(this.state.maxResults !== 0) {
    	baseUrl += ("&maxResults=" + params.maxResults);
    } 

    baseUrl+= ("&key=" + key);

    return baseUrl;
	}

	// This is the query to the Google Books API
  queryBooks(e) {
    e.preventDefault(e);
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    const endpointUrl = this.constructUrl(this.state);
    
    fetch(endpointUrl, options)
      .then(res => {
        if(!res.ok) {
        	alert("You need a search term");
          throw new Error("Something went wrong")
        }
        return res;
      })
      .then(res => (
        res.json()
      ))
      .then(data => {

      	// Handles when no results are found
      	if(data.totalItems !== 0) {
      		// Empty results to ensure no duplicates sneak in
      		this.props.updateBooks([]);
      		this.props.updateBooks(data.items);
      	} else {
      		alert("We found no books that match your search");
      	}
        
      })
      .catch(err => {
      	console.log(err);
      });
	}

	render() {
		return (
			<div
				className="search-bar"
			>
				<form
					onSubmit={e => this.queryBooks(e)}
				>
					<section
						className="search-wrapper"
					>
						<label
							htmlFor="search-input"
						>
							Search:
						</label>
						<input
							type="text"
							placeholder="Search..."
							id="search-input"
							name="search-input"
							onChange={e => this.searchTermChanged(e.target.value)}
						/>
						<input
							type="submit"
							id="search-submit"
							value="Search"
							className="search-btn"
						/>
					</section>
					<Filters 
						costChanged = {this.costChanged}
						methodChanged = {this.methodChanged}
						maxResultsChanged = {this.maxResultsChanged}
					/>
				</form>
			</div>
		)
	}
}

export default Search;