import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from '../containers/navbar';
import Index from './index';
import About from './about';
import Work from './work';
import Contact from './contact';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    {/*This div wrapper is needed so BrowserRouter doesn't complain*/}
                    <div>
                        <Navbar/>
                        <div id="content">
                            <Route exact path="/" component={Index}/>
                            <Route path="/about" component={About}/>
                            <Route path="/work" component={Work}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
