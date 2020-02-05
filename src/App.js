import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      error: null
    }
  }

  updateBooks = (books) => {
    this.setState({
      results: books
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header 
          updateBooks={this.updateBooks}
        />
        <Main 
          results={this.state.results}
        />
      </div>
    );    
  }
}

export default App;