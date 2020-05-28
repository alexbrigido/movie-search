import React from 'react';

class SearchMovies extends React.Component {

	searchMovies = async () => {
		console.log("searching movies...")
	}

	render(){
		return (
			<form className="form" onSubmit={this.searchMovies}>
				<label className="label" htmlFor="query">Movie Name</label>
				<input className="input" type="text" name="query"
						placeholder="i.e. Jurassic Park"/>
				<button className="button" type="submit">Search</button>
			</form>

		)
	}

}


export default SearchMovies;