import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './RecipeCard.css';
import { Link } from 'react-router-dom';

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
constructor(props){
  super(props);
    this.state = { expanded: false };
}
  
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        
        <CardContent>
          <Typography component='h5' variant='h5'>
            {`${this.props.title}`}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            {`Added: ${this.props.id}`}
            </Typography>
        </CardContent>

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
          {this.props.ingredients.map((ingredient) => 
            <Typography paragraph>
              <li key={ingredient}>{`${ingredient}`}</li>
            </Typography> )}
          </ul> 

          <Typography paragraph>Steps To Make:</Typography>
          <ol>
          {this.props.steps.map((step) => 
            <Typography paragraph>
              <li key={step}>{`${step}`}</li>
            </Typography> )}
          </ol>

          <ButtonToolbar>
              <Button bsStyle='danger' onClick={(e) => 
                {if (window.confirm('Are you sure you want to delete this recipe?')) 
                this.props.deleteRecipe(this.props.title)}}>Delete Recipe</Button>
              <Button><Link to={`update/${this.props.id}`}>Edit Recipe</Link></Button>
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