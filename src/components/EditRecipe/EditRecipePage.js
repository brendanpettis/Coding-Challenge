import React, {Component} from 'react';
import { Consumer } from '../context';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const getValidationState = (props) => {
    let result;
    let validTitle = props.state.latestRecipe.title;
    let validIngredients = props.state.latestRecipe.ingredients;
    // Note if an empty space is added to the valid ingredients doesnt work properly :/.
    validTitle.trim() !== "" && validIngredients.length > 0 ? result = 'success': result = 'error';
     
    return result;
  }

class EditRecipePage extends Component {
  state={
      recipe: { 
        id: '',
        title: '',
        description: '',
        ingredients: [],
        ingredientQty: [],
        ingredientUnitsOfMeasure: [],
        steps:[]
      }
  }

timeStamp() {
    let today = new Date();
    return today;
}   


addRecipe = (title, ingredients) => {
this.setState({recipe: {id: this.timeStamp(), title: title, ingredients: ingredients}});
}
render() {     
        return (
            <Consumer> 
            { props => {
                return (
                <div className='container'>

                <FormGroup controlId='formBasicText'
                validationState={getValidationState(props)}
                >
                <ControlLabel>Recipe Title</ControlLabel>
                <FormControl 
                    type='text'
                    value={props.state.latestRecipe.title}
                    placeholder='Enter Recipe Name'
                    onChange = {(event) => props.updateLatestRecipe(event.target.value, props.state.latestRecipe.ingredients)}
                >
                </FormControl>
                <FormGroup controlId='formControlsTextarea'>
                <ControlLabel>Recipe Ingredients</ControlLabel>
                
                <FormControl 
                    type='textarea'
                    placeholder='Enter Recipe Ingredients (Separate with Commas)'
                    onChange = {(event) => props.updateLatestRecipe(props.state.latestRecipe.title, event.target.value.split(','))}
                    value={props.state.latestRecipe.ingredients}
                >
                </FormControl>
                </FormGroup>
                </FormGroup>
            
            <Button bsStyle='success' onClick={()=> props.saveNewRecipe(props.state.latestRecipe)}>Save</Button>
            </div>
            );
        }}
        </Consumer>
    );

}
      
}

export default EditRecipePage;