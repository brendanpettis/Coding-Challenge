import React from 'react';
import { Link } from 'react-router-dom';
import '../NotFound/NotFound.css';

/* Simple error page incase user tries to go somewhere they're not supposed to 
    not a requirement but felt appropriate.
*/

const NotFoundPage = () => (
    <div className='box-layout-no-pic'>
    <h1>404</h1>
        <Link to='/'>Go Home</Link>
        <iframe title='get-rolled' width="560" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
);

export default NotFoundPage;