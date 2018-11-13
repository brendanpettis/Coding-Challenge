import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import Accordion from 'react-bootstrap/lib/Accordion';

class RecipeList extends Component {
    render() {
        return (
            <Accordion id='main-accordian'> 
                <ol>
                    {
                        this.props.recipes.map((recipe, idx) => 
                            <ListItem key={idx} {...recipe} 
                                deleteRecipe={this.props.deleteRecipe} 
                                handleListItemClick={this.props.handleListItemClick}
                            />
                        )
                    }
                </ol>
            </Accordion>
        );
    }
}

export default RecipeList;