import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import './listItem.css';

class ListItem extends Component {
    render() {
        return (
            <Panel onClick={() => this.props.handleListItemClick(this.props)}> 
                <Panel.Heading>                
                    <Panel.Title componentClass='h3'>{this.props.title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <Panel.Title componentClass='h4'>Ingredients</Panel.Title>
                    <ol>
                        {
                            this.props.ingredients.map((item) => <li key={item}>{item}</li>)
                        }
                    </ol>
                </Panel.Body>
                <Panel.Footer>
                    <ButtonToolbar>
                        <Button bsStyle='primary'>Edit Recipe</Button>
                        <Button bsStyle='danger' onClick={() => this.props.deleteRecipe(this.props.title)}>Delete Recipe</Button>
                    </ButtonToolbar>
                </Panel.Footer>      
            </Panel>
        );
    }
}

export default ListItem;