import React, { Component } from 'react';
import './App.css';
import Accordion from 'react-bootstrap/lib/Accordion'
import Panel from 'react-bootstrap/lib/Panel'
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
        id: 'Mon Nov 12 2018 11:36:27 GMT-0600 (Central Standard Time)',
        title: 'Sushi',
        description: 'Everyone loves sushi. Even people who are allergic to it.',
        ingredients: ['Crab', 'Lobster', 'Seaweed', 'Rice'],
        steps:[]
      }
    ],
    showAdd: false,
    latestRecipe: {id: '', title: '', description:'', ingredients: [], steps:[]}
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('recipes');
      const recipes = JSON.parse(json);

      if (recipes) {
        this.setState(() => ({ recipes }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.recipes.length !== this.state.recipes.length) {
      const json = JSON.stringify(this.state.recipes);
      localStorage.setItem('recipes', json);
    }
  }

  getValidationState() {
    let result;
    let validTitle = this.state.latestRecipe.title;
    let validIngredients = this.state.latestRecipe.ingredients;
    // Note if an empty space is added to the valid ingredients doesnt work :/.
    validTitle.trim() !== "" && validIngredients.length > 0 ? result = 'success': result = 'error';
     
    return result;
  }
  
  timeStamp() {
    let today = new Date();
    return today;
  }

  // TODO Add Validation Here
  saveNewRecipe(latestRecipe){
    let recipes = this.state.recipes.slice();
    recipes.push(latestRecipe);
    this.setState({recipes})
    this.setState({latestRecipe: {id: '', title: '', ingredients: []}});
    this.close();
  }

  updateLatestRecipe = (title, ingredients) => {
    this.setState({latestRecipe: {id: this.timeStamp(), title: title, ingredients: ingredients}});
  }

  close = () => {
    if(this.state.showAdd){
      this.setState({showAdd: false});
    }
  }

  open = (state) => {
    this.setState({[state]: true});
  }

  deleteRecipe = title => {
    let recipes = this.state.recipes.slice();
    recipes = recipes.filter((recipe) => recipe.title != title);
    this.setState({recipes});
  }

  handleListItemClick = recipe => {
      alert(`The list item for ${recipe.title} was just clicked`);
  }

  render() {
    const {recipes, latestRecipe} = this.state;
    console.log(latestRecipe);
    return (
        <div className="App container">
          <RecipeList {...this.state} deleteRecipe={this.deleteRecipe} handleListItemClick={this.handleListItemClick} />
          
          <Modal show={this.state.showAdd} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId='formBasicText'
            validationState={this.getValidationState()}
            >
              <ControlLabel>Recipe Title</ControlLabel>
              <FormControl 
                type='text'
                value={latestRecipe.title}
                placeholder='Enter Recipe Name'
                onChange = {(event) => this.updateLatestRecipe(event.target.value, latestRecipe.ingredients)}
              >
              </FormControl>
              <FormGroup controlId='formControlsTextarea'>
              <ControlLabel>Recipe Ingredients</ControlLabel>
              
              <FormControl 
                type='textarea'
                placeholder='Enter Recipe Ingredients (Separate with Commas)'
                onChange = {(event) => this.updateLatestRecipe(latestRecipe.title, event.target.value.split(','))}
                value={latestRecipe.ingredients}
              >
              </FormControl>
            </FormGroup>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
              <Button bsStyle='success' onClick={(event)=> this.saveNewRecipe(latestRecipe)}>Save</Button>
          </Modal.Footer>
          </Modal>
          <Button bsStyle='success' onClick={(event)=> this.open('showAdd')}>Add Recipe</Button>
        </div>
        ); 
    }
}

export default App;
