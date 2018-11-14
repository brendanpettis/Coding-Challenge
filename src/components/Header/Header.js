import React from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import '../Header/Header.css'
const Header = () => (
    <header>
            <h1>Rokkin Recipes</h1>
            <NavLink to='/create' activeClassName='is-active'>Add Recipe</NavLink>    
            <NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>   
    </header>
);

export default Header;