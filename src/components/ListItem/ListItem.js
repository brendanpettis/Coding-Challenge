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
            <Panel> 
                <Panel.Heading>                
                    <Panel.Title componentClass='h3' toggle>Title: {this.props.title}</Panel.Title>
                </Panel.Heading>

                    <Panel.Body collapsible>

                        <Panel.Title componentClass='h4'>Description: {this.props.description}</Panel.Title>
                        <Panel.Title componentClass='h4'>Ingredients: </Panel.Title>
                        <ol>
                            {
                                this.props.ingredients.map((item) => <li key={item}>{item}</li>)
                            }
                        </ol>
                        <Panel.Title componentClass='h4'>Ingredients And Units: </Panel.Title>
                        <ol>
                        {
                            this.props.ingredientQtyAndUnit.map((unit) => <li key={unit}>{unit}</li>)
                        }
                        </ol>
                        <Panel.Title componentClass='h4'>Recipe Steps: </Panel.Title>
                        <ol>
                        {
                            this.props.steps.map((step) => <li key={step}>{step}</li>)                     
                        }
                        </ol>
                        <ButtonToolbar>
                        <Button bsStyle='danger' onClick={() => this.props.deleteRecipe(this.props.title)}>Delete Recipe</Button>
                    </ButtonToolbar>
                    </Panel.Body>            
            </Panel>
        );
    }
}

export default ListItem;