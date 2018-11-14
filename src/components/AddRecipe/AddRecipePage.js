import React, {Component} from 'react';
import { Consumer } from '../context';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class AddRecipePage extends Component {

    state = {
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

message() {
    alert('Added!');
    console.log(this.state);
}

buildRecipeState = (title, description, ingredients, ingredientQtyAndUnit, steps) => {
    this.setState({recipe: {id: this.timeStamp().toString(), title: title, description: description, ingredients: ingredients, ingredientQtyAndUnit: ingredientQtyAndUnit, steps: steps}});
}

render() {     
    return (
        <Consumer> 
        { props => {
            return (
            <div className='container'>
                <FormGroup controlId='formAddRecipeText'>
                    <ControlLabel>Recipe Title</ControlLabel>
                    <FormControl 
                        type="text"
                        placeholder="Enter a clever title"
                        autoFocus
                        value={this.state.recipe.title}
                        onChange={(event) => this.buildRecipeState(event.target.value, this.state.recipe.description)}
                    >
                    </FormControl>

                    <ControlLabel>Description</ControlLabel>
                    <FormControl 
                        type='text'
                        placeholder='Enter a brief description'
                        value={this.state.recipe.description}
                        onChange={(event) => this.buildRecipeState(this.state.recipe.title, event.target.value, this.state.recipe.ingredients)}
                    >
                    </FormControl>

                    <ControlLabel>Ingredients</ControlLabel>
                    <FormControl 
                        type='text'
                        placeholder='Enter Recipe Ingredients (Separate with Commas)'
                        value={this.state.recipe.ingredients}
                        onChange={(event) => this.buildRecipeState(this.state.recipe.title, this.state.recipe.description, event.target.value.split(','))}
                    >
                    </FormControl>

                    <ControlLabel>Ingredient Quantitys</ControlLabel>
                    <FormControl 
                        type='text'
                        placeholder='Enter ingredient quantity with unit of measure ex.) lb, oz, gram, etc. Separate each entry with a comma'
                        value={this.state.recipe.ingredientQtyAndUnit}
                        onChange={(event) => this.buildRecipeState(this.state.recipe.title, this.state.recipe.description, this.state.recipe.ingredients, event.target.value.split(','))}
                    >
                    </FormControl>

                    <ControlLabel>Step by Step Instructions</ControlLabel>
                    <FormControl 
                        type='text'
                        placeholder='Enter steps for the Recipe (Separate with Commas)'
                        value={this.state.recipe.steps}
                        onChange={(event) => this.buildRecipeState(this.state.recipe.title, this.state.recipe.description, this.state.recipe.ingredients, this.state.recipe.ingredientQtyAndUnit, event.target.value.split(','))}
                    >
                    </FormControl>
            </FormGroup>     
            
            <Button bsStyle='success' onClick={() => { this.message(); props.saveNewRecipe(this.state.recipe); }}>Add</Button>        
            </div>
            );
        }}
        </Consumer>
        );
    }   
}

export default AddRecipePage;