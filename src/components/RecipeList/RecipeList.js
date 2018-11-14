import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import { Consumer } from '../context';

class RecipeList extends Component {
    render() {
        return (
            <Consumer>         
            { props => {   
                return (
                    <PanelGroup accordion id='main-accordian'>             
                    {
                        props.state.recipes.map((recipe, idx) => 
                            <ListItem key={idx} {...recipe} 
                                deleteRecipe={props.deleteRecipe} 
                            />
                        )
                    }               
                    </PanelGroup>
                );
            }}      
          </Consumer>
            
        );
    }
}

export default RecipeList;