import React, {Component} from 'react';
import Constants from '../constants';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                {Constants.name}
            </div>
        );
    }
}

export default Navbar;
