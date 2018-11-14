import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
constructor(props){
    super(props);
    this.state = {
        recipes:[
            {
              id: 'Mon Nov 12 2018 11:36:27 GMT-0600 (Central Standard Time)',
              title: 'Not Sushi',
              description: 'Everyone loves sushi. Even people who are allergic to it.',
              ingredients: ['Crab', 'Lobster', 'Seaweed', 'Rice'],
              ingredientQtyAndUnit: ['0.5 lb', '1 lb', '3 rolls', '2 cups'],
              steps:['First Cut', 'Then Eat', 'Afterwards Profit']
            }
          ]
      }
    this.saveNewRecipe = this.saveNewRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
}
   
componentDidMount() {
  try {
    const json = localStorage.getItem('recipes');
    const recipes = JSON.parse(json);

    if (recipes) {
      this.setState(() => ({ recipes }));
    }
  } catch (e) {
    // Do nothing at all
  }
} 

componentDidUpdate(){
  localStorage.removeItem('recipes');
  this.updateLocalStorage();
}

updateLocalStorage() {
  const json = JSON.stringify(this.state.recipes);
  localStorage.setItem('recipes', json);
}

saveNewRecipe(newRecipe){
  let recipes = this.state.recipes.slice();
  recipes.push(newRecipe);
  this.setState({recipes});
}
  
deleteRecipe = title => {
  let recipes = this.state.recipes.slice();
  recipes = recipes.filter((recipe) => recipe.title !== title);
  this.setState({recipes});
}

render() {
    return (
            <Context.Provider value={{state: this.state, saveNewRecipe: this.saveNewRecipe, deleteRecipe: this.deleteRecipe}}>
             { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;