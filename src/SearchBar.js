import React, { Component } from 'react';
import axios from 'axios';
import { BiSearchAlt } from 'react-icons/bi'
import SearchResults from './SearchResults';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      movieData: [],
      searchInput: '',
      poster: '',
      nominatedFilms: [],
    }
  }

  componentDidMount() {}
    
    getMovie = () => {
      axios({
        url: 'http://www.omdbapi.com/',
        params: {
          apikey: '4a9419c3',
          type: 'movie',
          t: this.state.query,
        },
      }).then((response) => {
        console.log(response.data)
        this.setState({
          movieData: response.data,
        })
      });
    }
  
  handleMovieSearch = (event) => {
    const searchInput = event.target.value;
    this.setState({ 
      searchInput,
    });
  }
  
  handleGetMovie = () => {
    this.setState(
      {
        query: this.state.searchInput
      },
      () => {
        this.getMovie();
      }
    );
  }

  render() {

    const { movieData, searchInput } = this.state

    return (
      <>
        <h2>Search Your Nomination!</h2>

        <div className="search-container">
          <label className="search-label" htmlFor="search-input">
            <input type="text"
              value={searchInput}
              name="query"
              id="search-input"
              placeholder="Search Movies"
              onChange={this.handleMovieSearch}></input>

            <BiSearchAlt className="icons search-icon" onClick={() => this.handleGetMovie()}/>
          </label>
        </div>
        <SearchResults 
        title={movieData.Title}
        poster={movieData.Poster}
        movieData={movieData}
        />   
      </>
    );
  }
}

export default SearchBar;