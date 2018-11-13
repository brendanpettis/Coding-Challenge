import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'

class ListItem extends Component {
    render() {
        return (
            <Panel onClick={() => this.props.handleListItemClick(this.props)}> 
                <Panel.Heading>                
                    <Panel.Title componentClass='h3'>{this.props.title}</Panel.Title>
                </Panel.Heading>
                <ButtonToolbar>
                    <Button bsStyle='primary'>Edit Recipe</Button>
                    <Button bsStyle='danger' onClick={() => this.props.deleteRecipe(this.props.title)}>Delete Recipe</Button>
                </ButtonToolbar>
            </Panel>
        );
    }
}

export default ListItem;