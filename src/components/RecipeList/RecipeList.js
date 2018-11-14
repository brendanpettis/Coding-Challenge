import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
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
                            <ListItem key={idx} {...recipe} 
                                deleteRecipe={props.deleteRecipe} 
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