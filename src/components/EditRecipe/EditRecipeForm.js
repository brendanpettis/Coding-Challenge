import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { FormValid } from '../HelperFunctions/FormValid';
import { FindRecipe } from '../HelperFunctions/FindRecipe';
import '../AddRecipe/AddRecipe.css';

class EditRecipeForm extends Component {
constructor(props){
    super(props);

    this.state = {
            id: '',
            title: null,
            description: null,
            ingredients: null,
            ingredientQtyAndUnit: null,
            steps: null, 
        formErrors: {
            title: '',
            description: '',
            ingredients: '',
            ingredientQtyAndUnit: '',
            steps: ''
        }
    }
}


message() {
    alert('Edit was Successful!');
}

// Pre Populating the Form
componentDidMount() {
 
  let tempRecipe = FindRecipe(this.props.context.state.recipes, this.props.params);
  this.setState({id: tempRecipe.id, title: tempRecipe.title, description: tempRecipe.description, ingredients: tempRecipe.ingredients, ingredientQtyAndUnit: tempRecipe.ingredientQtyAndUnit, steps: tempRecipe.steps});
}

finalValidation() {

  // If everything from the form was valid, it's safe to complete the recipe and pass it on
  if (FormValid(this.state)) {

      // Fill out a recipe object
      let recipe = {
          id: this.state.id,
          title: this.state.title,
          description: this.state.description,
          ingredients: Array.isArray(this.state.ingredients) ? this.state.ingredients : this.state.ingredients.split(','),
          ingredientQtyAndUnit: Array.isArray(this.state.ingredientQtyAndUnit) ? this.state.ingredientQtyAndUnit : this.state.ingredientQtyAndUnit.split(','),
          steps: Array.isArray(this.state.steps) ? this.state.steps : this.state.steps.split(',')
      }
      
      // Alert that it worked
      this.message();

      // return the recipe object
      return recipe;
    } else {
        // otherwise if the form wasn't valid show a cryptic error message to the console
      console.error("FORM INVALID - DISPLAY CRYPTIC ERROR MESSAGE");
      alert('Finish filling out that form!');
      return false;
    }
}

handleChange = e => {
    e.preventDefault();
    // take in the name and value of the field coming in
    const {name, value} = e.target;
    
    let formErrors = this.state.formErrors; 
    let valSplit;

    // if the value has a , in it and the name is related to a property that should be an array
    if(value.includes(',')){
        if(name === 'ingredients' || name === 'ingredientQtyAndUnit' || name === 'steps'){
            // split it up and store the actual array in the valSplit variable
            valSplit = value.split(',');

            // then go through the switch and make sure minimum reqs are met
            switch(name){
                case 'ingredients':
                formErrors.ingredients = valSplit.length < 3 && valSplit.length > 0 ? 'minimum 3 ingredient required' : '';
                break;
                case 'ingredientQtyAndUnit':
                formErrors.ingredientQtyAndUnit = valSplit.length < 3 && valSplit.length > 0 ? 'minimum 3 ingredient qty required' : '';
                break;
                case 'steps':
                formErrors.steps = valSplit.length < 3 && valSplit.length > 0 ? 'minimum 3 steps required' : '';
                break;
                default:
                // should probably log something but eh time
                break;
            }
        }
    } else {

        // otherwise run name through this switch statement to make sure minimum lengths are met
        switch(name){
            case 'title':
            formErrors.title = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : '';
            break;
            case 'description':
            formErrors.description = value.length < 10 && value.length > 0 ? 'minimum 10 characters required' : '';
            break;
            case 'ingredients':
            formErrors.ingredients = value.length < 5 && value.length > 0 ? 'minimum 5 characters required' : '';
            break;
            case 'ingredientQtyAndUnit':
            formErrors.ingredientQtyAndUnit = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : '';
            break;
            case 'steps':
            formErrors.steps = value.length < 20 && value.length > 0 ? 'minimum 20 characters required' : '';
            break;
            default:
            break;
        }
    }

    this.setState({ formErrors, [name]: value });
}

render() {     

    const { formErrors } = this.state;

    return (
              <div className='wrapper'>
                <div className='form-wrapper'>
                  <h3>Edit Recipe</h3>
                  <form noValidate>
                    <div className='title'>
                      <label htmlFor="title">Title</label>
                      <input
                        className={formErrors.title.length > 0 ? "error" : null}
                        placeholder='Enter a clever title'
                        type="text"
                        name="title"
                        noValidate
                        value={this.state.title}
                        onChange={this.handleChange}
                      />
                      {formErrors.title.length > 0 && (
                        <span className="errorMessage">{formErrors.title}</span>
                      )}
                    </div>

                    <div className="description">
                      <label htmlFor="discription">Description</label>
                      <input
                        className={formErrors.description.length > 0 ? "error" : null}
                        placeholder='Enter a brief description'
                        type='text'
                        name='description'
                        noValidate
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                      {formErrors.description.length > 0 && (
                        <span className="errorMessage">{formErrors.description}</span>
                      )}
                    </div>

                    <div className="ingredients">
                      <label htmlFor="ingredients">Ingredients</label>
                      <input
                        className={formErrors.ingredients.length > 0 ? "error" : null}
                        placeholder='Enter Recipe Ingredients (Separate with Commas)'
                        type='text'
                        name='ingredients'
                        noValidate
                        value={this.state.ingredients}
                        onChange={this.handleChange}
                      />
                      {formErrors.ingredients.length > 0 && (
                        <span className="errorMessage">{formErrors.ingredients}</span>
                      )}
                    </div>

                    <div className="ingredients">
                    <label htmlFor="ingredients">Ingredients Qty and Units</label>
                    <input
                      className={formErrors.ingredientQtyAndUnit.length > 0 ? "error" : null}
                      placeholder='Enter ingredient quantity with unit of measure'
                      type='text'
                      name='ingredientQtyAndUnit'
                      noValidate
                      value={this.state.ingredientQtyAndUnit}
                      onChange={this.handleChange}
                    />
                    {formErrors.ingredientQtyAndUnit.length > 0 && (
                      <span className="errorMessage">{formErrors.ingredientQtyAndUnit}</span>
                    )}
                  </div>

                    <div className="steps">
                      <label htmlFor="steps">Steps</label>
                      <input
                        className={formErrors.steps.length > 0 ? "error" : null}
                        placeholder='Enter steps for the Recipe (Separate with Commas)'
                        type='text'
                        name='steps'
                        noValidate
                        value={this.state.steps}
                        onChange={this.handleChange}
                      />
                      {formErrors.steps.length > 0 && (
                        <span className="errorMessage">{formErrors.steps}</span>
                      )}
                    </div>
                    <div className="addRecipe">
                      <Button onClick={() => {
                          // Perform a final validation and return a recipe or do nothing
                          let valid = this.finalValidation();
                          if(valid){
                            // Use Edit Recipe 
                              this.props.context.editRecipe(valid);
                          }
                        }}>Update</Button> 
                    </div>
                  </form>
                </div>
              </div>
        );
    }   
}

export default EditRecipeForm;