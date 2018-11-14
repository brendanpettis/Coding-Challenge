import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import { Consumer } from '../context';

class RecipeList extends Component {
    render() {
        return (
            <Consumer>         
            { props => {   
                return (
                    <ListGroup>          
                    {
                        props.state.recipes.map((recipe, idx) => 
                            <RecipeCard key={idx} {...recipe} 
                                deleteRecipe={props.deleteRecipe} 
                                handleListItemClick={props.handleListItemClick}
                            />
                        )
                    }               
                    </ListGroup>   
                );
            }}      
          </Consumer>           
        );
    }
}

export default RecipeList;