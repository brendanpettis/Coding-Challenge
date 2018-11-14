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

message(props) {
    alert('Added!');
}

onTitleChange = (e) => {
    const title = e.target.value;
    this.setState({ recipe: { id: this.timeStamp().toString(), title: title }});
}

onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({description});
}

onIngredientChange = (e) => {
    const ingredients = e.target.value.split(',');
    this.setState({ingredients});
}

onIngredientQtyAndUnitChange = (e) => {
    const ingredientQtyAndUnit = e.target.value.split(',');
    this.setState({ingredientQtyAndUnit});
}

onStepChange = (e) => {
    const steps = e.target.value.split(',');
    this.setState({steps});
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
                        onChange={this.onTitleChange}
                    >
                    </FormControl>

                    <ControlLabel>Description</ControlLabel>
                    <FormControl 
                        type='text'
                        placeholder='Enter a brief description'
                        value={this.state.recipe.description}
                        onChange={this.onDescriptionChange}
                    >
                    </FormControl>

                    <ControlLabel>Ingredients</ControlLabel>
                    <FormControl 
                        type='text'
                        placeholder='Enter Recipe Ingredients (Separate with Commas)'
                        value={this.state.recipe.ingredients}
                        onChange={this.onIngredientChange}
                    >
                    </FormControl>

                    <ControlLabel>Ingredient Quantitys</ControlLabel>
                    <FormControl 
                        type='text'
                        placeholder='Enter ingredient quantity with unit of measure ex.) lb, oz, gram, etc. Separate each entry with a comma'
                        value={this.state.recipe.ingredientQtyAndUnit}
                        onChange={this.onIngredientQtyAndUnitChange}
                    >
                    </FormControl>

                    <ControlLabel>Step by Step Instructions</ControlLabel>
                    <FormControl 
                        type='text'
                        placeholder='Enter steps for the Recipe (Separate with Commas)'
                        value={this.state.recipe.steps}
                        onChange={this.onStepChange}
                    >
                    </FormControl>
            </FormGroup>     
            
            <Button bsStyle='success' onClick={() => { this.message(props); props.saveNewRecipe(this.state.recipe); }}>Add</Button>        
            </div>
            );
        }}
        </Consumer>
        );
    }   
}

export default AddRecipePage;