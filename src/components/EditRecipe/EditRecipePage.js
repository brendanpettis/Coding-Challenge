import React from 'react';
import { Consumer } from '../Context/Context';
import EditRecipeForm from '../EditRecipe/EditRecipeForm';
import '../EditRecipe/EditRecipePage.css';


const EditRecipePage = (props) => {

    return (
        <div className='wrapper'>
            <Consumer> 
            { context =>               
                <EditRecipeForm params={props.match.params.id} context={context} />
            }
            </Consumer>  
        </div>
    );

}


export default EditRecipePage;