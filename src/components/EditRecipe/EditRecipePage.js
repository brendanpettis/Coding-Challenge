import React from 'react';
import { Consumer } from '../context';
import EditRecipeForm from '../EditRecipe/EditRecipeForm';

const EditRecipePage = (props) => {

    return (
        <div>
        {props.match.params.id}
        <Consumer> 
        { context => 
            <EditRecipeForm params={props.match.params.id} context={context} />
        }
        </Consumer>
        
        </div>
    );

}


export default EditRecipePage;