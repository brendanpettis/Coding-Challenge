import React from 'react';
import { Link } from 'react-router-dom';
import '../NotFound/NotFound.css';

const NotFoundPage = () => (
    <div className='box-layout-no-pic'>
    <h1 className='huge'>404</h1>
        <Link to='/'>Go Home</Link>
        <iframe title='Rick-rolled' width="560" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
);

export default NotFoundPage;