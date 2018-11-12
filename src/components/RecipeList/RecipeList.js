import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class RecipeList extends Component {
    render() {
        return (
            <ol className="list-group">
                {
                    this.props.recipes.map((recipe,idx) => 
                    <ListItem key={idx} {...recipe} handleListItemClick={this.props.handleListItemClick}/>)
                }
            </ol>
        );
    }
}

export default RecipeList;