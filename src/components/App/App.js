import React, { Component } from 'react';
import './App.css';
import RecipeList from '../RecipeList/RecipeList'

class App extends Component {

  render() {

    return (
        <div className="App container">
          <RecipeList />
        </div>
      ); 
    }
}

export default App;