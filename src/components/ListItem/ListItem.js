import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
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
            <ListGroupItem className='center' header={this.props.title} href="#">
                <ButtonToolbar>
                    <Button bsStyle='danger' onClick={() => this.props.deleteRecipe(this.props.title)}>Delete Recipe</Button>
                </ButtonToolbar>
            </ListGroupItem>
        );
    }
}

export default ListItem;