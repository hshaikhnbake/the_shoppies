import React, { Component } from 'react';

class SearchResults extends Component {


  render () {

    const data = this.props

    return (
      <section className="displayedMovies">
        <h2>{data.title}</h2>
        <ul>
          <img src={data.poster}></img>
        </ul>
        

      {/* Create Button Function to Update Parent State */}
      </section>
    );
  }
}

export default SearchResults;
