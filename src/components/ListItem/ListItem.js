import React, { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import './listItem.css';

class ListItem extends Component {
    render() {
        return (
            <ListGroupItem onClick={() => this.props.handleListItemClick(this.props)}>              
                <h4>{this.props.title}</h4>
            </ListGroupItem>
        );
    }
}

export default ListItem;