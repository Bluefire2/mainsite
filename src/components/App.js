import React, {Component} from 'react';
import {Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import Navbar from '../containers/navbar';

const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <Navbar/>
                </Router>
            </div>
        );
    }
}

export default App;
