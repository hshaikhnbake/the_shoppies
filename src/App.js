
import './App.css';
import './search.css';
import './normalize.css'
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


class App extends Component {
  render() {
    return (
        <div className="App">
          <header>
            <h1>Hackflix</h1>
          </header>
          <SearchBar />
          <SearchResults />
        </div>
    
    );
  }
}

export default App;
