import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Consumer } from '../context';

/* Basic Recipe List that provides context to each recipe card for display
Also reverses the info to meet the requirement */

class RecipeList extends Component {
    render() {
        return (
            <Consumer>         
            { props => {   
                return (
                    <div>          
                    {
                        [...props.state.recipes].reverse().map((recipe, idx) => 
                            <RecipeCard key={idx} {...recipe} 
                                deleteRecipe={props.deleteRecipe} 
                                handleListItemClick={props.handleListItemClick}
                            />
                        )
                    }               
                    </div>   
                );
            }}      
          </Consumer>           
        );
    }
}

export default RecipeList;