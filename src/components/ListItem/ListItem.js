import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import './listItem.css';

class ListItem extends Component {
    constructor(props, context) {
        super(props, context);
    
    this.state = {
          open: true
        }
    }

    render() {
        return (
            <Panel onClick={() => this.props.handleListItemClick(this.props)}> 
                <Panel.Heading>                
                    <Panel.Title componentClass='h3' toggle>{this.props.title}</Panel.Title>
                </Panel.Heading>

                    <Panel.Body collapsible>
                        <Panel.Title componentClass='h4'>Ingredients</Panel.Title>
                        <ol>
                            {
                                this.props.ingredients.map((item) => <li key={item}>{item}</li>)
                            }
                        </ol>
                        <ButtonToolbar>
                        <Button bsStyle='primary' onClick={() => this.props.open("showEdit", this.idx)}>Edit Recipe</Button>
                        <Button bsStyle='danger' onClick={() => this.props.deleteRecipe(this.props.title)}>Delete Recipe</Button>
                    </ButtonToolbar>
                    </Panel.Body>            
            </Panel>
        );
    }
}

export default ListItem;