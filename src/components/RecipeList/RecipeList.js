import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Consumer } from '../Context/context';

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