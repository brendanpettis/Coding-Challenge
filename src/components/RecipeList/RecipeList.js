import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';

class RecipeList extends Component {
    render() {
        return (
            <PanelGroup accordion id='main-accordian'>             
                    {
                        this.props.recipes.map((recipe, idx) => 
                            <ListItem key={idx} {...recipe} 
                                open={this.props.open}
                                deleteRecipe={this.props.deleteRecipe} 
                                handleListItemClick={this.props.handleListItemClick}
                            />
                        )
                    }               
            </PanelGroup>
        );
    }
}

export default RecipeList;