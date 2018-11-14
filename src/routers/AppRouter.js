import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../components/Home/HomePage';
import AddRecipePage from '../components/AddRecipe/AddRecipePage';
import EditRecipePage from '../components/EditRecipe/EditRecipePage';
import NotFoundPage from '../components/NotFound/NotFoundPage';
import './index.css';
import {Provider} from '../components/context';

const AppRouter = () => (
    <Provider>
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true}/>
                <Route path='/create' component={AddRecipePage}/>
                <Route path='/update/:id' component={EditRecipePage}/>
                <Route component={NotFoundPage}/>
            </Switch>   
        </div>
    </BrowserRouter>
    </Provider>
);

export default AppRouter;