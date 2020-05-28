import React from 'react';

class SearchMovies extends React.Component {

	searchMovies = async (e) => {
		e.preventDefault();
		console.log("searching movies...")
		const apiKey = '5dcf7f28a88be0edc01bbbde06f024ab'
		const query = 'Jurassic Park'

		const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url)
			const data = await res.json()
			console.log(data)
		} catch (err) {
			console.error(err)
		}
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