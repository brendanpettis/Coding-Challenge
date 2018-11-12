import React, { Component } from 'react';
import './App.css';
//import Accordion from 'react-bootstrap/lib/Accordion'
//import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Modal from 'react-bootstrap/lib/Modal'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import RecipeList from './components/RecipeList/RecipeList'


class App extends Component {
  state={
    recipes:[
      {
        title: 'Fake1',
        description: 'A fake recipe created for a demo.',
        ingredients: [{
          ingredientName: 'Sugar',
          ingredientQuantity: '2 cubes'
        }],
        steps:[]
      },
      {
        title: 'Fake2',
        description: 'A fake recipe created for a demo.',
        ingredients: [{
          ingredientName: 'Sugar',
          ingredientQuantity: '2 cubes'
        }],
        steps:[]
      },
      {
        title: 'Fake3',
        description: 'A fake recipe created for a demo.',
        ingredients: [{
          ingredientName: 'Sugar',
          ingredientQuantity: '2 cubes'
        }],
        steps:[]
      }
    ]
  }

  handleListItemClick = recipe => {
      alert(`The list item for ${recipe.title} was just clicked`);
  }

  render() {
    return (
        <div className="App container">
          <RecipeList {...this.state} handleListItemClick={this.handleListItemClick} />
        </div>
        ); 
    }
}

export default App;
