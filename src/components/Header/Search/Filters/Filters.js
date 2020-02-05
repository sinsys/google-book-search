import React, {Component} from 'react';
import './Filters.css';

class Filters extends Component {
	
	// Simply creates the options for max results
	createResultCountOpts(min, max) {
		const options = [];
		for (let i=min; i<=max; i++){
			options.push(
				<option
					value={i}
					key={"count-" + i}
					id={"count-" + i}
				>
					{i}
				</option>
			)
		}		
		return options;
	}

	render() {

		const options = this.createResultCountOpts(3,10);

		return (
			<div
				className="search-filters"
			>
				<label
					htmlFor="search-cost"
				>
					Cost:
				</label>
				<select
					id="search-cost"
					name="search-cost"
					defaultValue="ebooks"
					onChange={e => this.props.costChanged(e.target.value)}
				>
					<option
						value="ebooks"
						key="cost-all"
						id="cost-all"
					>
						All
					</option>
					<option
						value="free-ebooks"
						key="cost-free"
						id="cost-free"
					>
						Free
					</option>
					<option
						value="paid-ebooks"
						key="cost-paid"
						id="cost-paid"
					>
						Paid
					</option>		
				</select>		
				<label
					htmlFor="search-method"
				>
					Search Method:
				</label>	
				<select
					id="search-method"
					name="search-method"
					defaultValue="relevance"
					onChange={e => this.props.methodChanged(e.target.value)}
				>
					<option
						value="relevance"
						key="input-relevance"
						id="input-relevance"
					>
						Relevant
					</option>
					<option
						value="newest"
						key="input-newest"
						id="input-newest"
					>
						Newest
					</option>	
				</select>	
				<label
					htmlFor="search-count"
				>
					Max Results:
				</label>	
				<select
					id="search-count"
					name="search-count"
					defaultValue=""
					onChange={e => this.props.maxResultsChanged(e.target.value)}
				>
					<option
						value={0}
						key="count-null"
						id="count-null"
					>
						Any
					</option>
					{options}
				</select>									
			</div>
		)
	}
}

export default Filters;