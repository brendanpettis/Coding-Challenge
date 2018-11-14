import React, {Component} from 'react';
import { Consumer } from '../context';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class AddRecipePage extends Component {
  state={
      recipe: { 
        id: '',
        title: '',
        description: '',
        ingredients: [],
        ingredientQtyAndUnit: [],
        steps:[]
      }
  }

timeStamp() {
    let today = new Date();
    return today;
}   

buildRecipeState = (title, description, ingredients, ingredientQtyAndUnit, steps) => {
    this.setState({recipe: {id: this.timeStamp().toString(), title: title, description: description, ingredients: ingredients, ingredientQtyAndUnit: ingredientQtyAndUnit, steps: steps}});
}

message(props) {
    console.log(this.state.recipe);
    console.log(props.state.recipes);
    alert('Saved!');
}

render() {     
    return (
        <Consumer> 
        { props => {
            return (
            <div className='container'>
                <form>
                    <FormGroup controlId='formRecipeTitleAndDescriptionText'>
                        <ControlLabel>Recipe Title</ControlLabel>
                        <FormControl 
                            type='text'
                            value={this.state.recipe.title}
                            placeholder='Enter a clever title'
                            onChange = {(event) => this.buildRecipeState(event.target.value, this.state.recipe.description)}
                        >
                        </FormControl>

                        <ControlLabel>Recipe Description</ControlLabel>
                        <FormControl 
                            type='text'
                            value={this.state.recipe.description}
                            placeholder='Enter a brief description'
                            onChange = {(event) => this.buildRecipeState(this.state.recipe.title, event.target.value, this.state.recipe.ingredients)}
                        >
                        </FormControl>
                    </FormGroup>
                    
                    <FormGroup controlId='formRecipeIngredientsAndQtyText'>
                        <ControlLabel>Recipe Ingredients</ControlLabel>
                            
                        <FormControl 
                                type='textarea'
                                placeholder='Enter Recipe Ingredients (Separate with Commas)'
                                onChange = {(event) => this.buildRecipeState(this.state.recipe.title, this.state.recipe.description, event.target.value.split(','))}
                                value={this.state.recipe.ingredients}
                        >
                        </FormControl>

                        <ControlLabel>Ingredient Quantity and Units</ControlLabel>
                        <FormControl 
                                type='textarea'
                                placeholder='Enter ingredient quantity with unit of measure ex.) lb, oz, gram, etc. Separate each entry with a comma'
                                onChange = {(event) => this.buildRecipeState(this.state.recipe.title, this.state.recipe.description, this.state.recipe.ingredients, event.target.value.split(','))}
                                value={this.state.recipe.ingredientQtyAndUnit}
                        >
                        </FormControl>
                    </FormGroup>

                    <FormGroup controlId='formRecipeStepsText'>
                        <ControlLabel>Recipe Steps</ControlLabel>
                        <FormControl 
                                type='textarea'
                                placeholder='Enter steps for the Recipe (Separate with Commas)'
                                onChange = {(event) => this.buildRecipeState(this.state.recipe.title, this.state.recipe.description, this.state.recipe.ingredients, this.state.recipe.ingredientQtyAndUnit, event.target.value.split(','))}
                                value={this.state.recipe.steps}
                            >
                        </FormControl>
                    </FormGroup>
                            
                    <Button bsStyle='success' onClick={() => { this.message(props); props.saveNewRecipe(this.state.recipe)}}>Save</Button>
                </form>
            </div>
            );
        }}
        </Consumer>
        );
    }   
}

export default AddRecipePage;