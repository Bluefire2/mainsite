import React from 'react';

export default ({icon, username, link}) => {
    return (
        <a href={link} className="sm-button-link">
            <div className="sm-button">
                <img src={icon} alt=""/>
                <span className="username">{username}</span>
            </div>
        </a>
    );
};