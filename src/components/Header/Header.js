import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => (
    <header>
            <img alt='rokkin cat logo' className='logo' src='favicon.ico' />
            <h1>Rokkin Recipes</h1>
            <NavLink to='/create' activeClassName='is-active'>Add Recipe</NavLink>    
            <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>   
    </header>
);

export default Header;