import React, {Component} from 'react';
import Constants from '../constants';
import NavbarLink from '../components/navbar_link';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <div id="navbar-name">
                    {Constants.name}
                    <span id="navbar-source-link">
                        <a href={Constants.sourceRepoUrl}>source</a>
                    </span>
                </div>
                {Object.entries(Constants.navbarLinks).map(kv => {
                    const [title, path] = kv;
                    return <NavbarLink key={title} path={path} title={title}/>
                })}
            </div>
        );
    }
}

export default Navbar;
