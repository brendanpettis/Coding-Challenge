import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Consumer } from '../context';
import '../RecipeList/RecipeList.css';

class RecipeList extends Component {
    render() {
        return (
            <Consumer>         
            { props => {   
                return (
                    <div className='overflow'>          
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