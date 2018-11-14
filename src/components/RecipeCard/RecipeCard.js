import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './RecipeCard.css';

// Simple Helper function to Combine Ingredients and Details to be Displayed
const combineIngredientsAndQty = (ingredients, ingredientDetails) => {
    let combo = [];
    
    for(let i = 0; i < ingredients.length; i++){
      combo[i] = ingredients[i] + ingredientDetails[i];
    }
    return combo;
};

const styles = theme => ({
  card: {
      background: 'fade-out(white, .15)',
      borderRadius: '3px',
      padding: '$l-size $m-size',
      margin: '1%',
      textAlign: 'center',
      width: '50rem'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});


/* Most of this was jacked from Material UI. It creates a gutted card element for each recipe
I pass additional props into it from context to display details of each recipe. */

class RecipeCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={`Title: ${this.props.title}`}
          subheader={`Added: ${this.props.id}`}
        />
        <CardContent>
          <Typography component="p">
            {this.props.description}
          </Typography>
        </CardContent>
        <IconButton
        className={classnames(classes.expand, {
          [classes.expandOpen]: this.state.expanded,
        })}
        onClick={this.handleExpandClick}
        aria-expanded={this.state.expanded}
        aria-label="Show more"
      >
        <ExpandMoreIcon />
      </IconButton>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>  
        <Typography paragraph>Ingredients:</Typography>
        <ul>

        {combineIngredientsAndQty(this.props.ingredients, this.props.ingredientQtyAndUnit)
          .map((comboItem) => (
          <Typography paragraph>
            <li key={comboItem}>{`${comboItem}`}</li>
          </Typography> ))}
        
        </ul>

          <Typography paragraph>Steps To Make:</Typography>
          <ol>
          {this.props.steps.map((step) => 
            <Typography paragraph>
              <li key={step}>{`${step}`}</li>
            </Typography> )}
          </ol>

          <ButtonToolbar>
          <Button bsStyle='danger' onClick={(e) => {if (window.confirm('Are you sure you want to delete this recipe?')) this.props.deleteRecipe(this.props.title)}}>Delete Recipe</Button>
          </ButtonToolbar>
        </CardContent>
      </Collapse>
        </Card>
    );
  }
}

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeCard);