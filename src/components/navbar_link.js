import React from 'react';
import {Link} from 'react-router-dom';

export default ({title, path}) => {
    return (
        <Link to={path} style={{textDecoration: 'none'}}>
            <div className="navbar-link">
                {title}
            </div>
        </Link>
    );
}