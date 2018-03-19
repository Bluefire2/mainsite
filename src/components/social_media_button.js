import React from 'react';

export default ({icon, username, link}) => {
    return (
        <div id="sm-button">
            <a href={link}>
                <img src={icon} alt=""/>
                {username}
            </a>
        </div>
    );
};