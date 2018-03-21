import React, {Component, Children} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {TransitionGroup} from 'react-transition-group';
import './App.css';
import Navbar from '../containers/navbar';
import Index from './index';
import About from './about';
import Work from './work';
import Contact from './contact';

const firstChild = props => {
    const childrenArray = Children.toArray(props.children);
    return childrenArray[0] || null;
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    {/*This div wrapper is needed so BrowserRouter doesn't complain*/}
                    <div>
                        <Navbar/>
                        <div id="content">
                            <Route
                                exact path="/"
                                children={({ match, ...rest }) => (
                                    <TransitionGroup component={firstChild}>
                                        {match && <Index {...rest} />}
                                    </TransitionGroup>
                                )}/>
                            <Route
                                path="/about"
                                children={({ match, ...rest }) => (
                                    <TransitionGroup component={firstChild}>
                                        {match && <About {...rest} />}
                                    </TransitionGroup>
                                )}/>
                            <Route
                                path="/work"
                                children={({ match, ...rest }) => (
                                    <TransitionGroup component={firstChild}>
                                        {match && <Work {...rest} />}
                                    </TransitionGroup>
                                )}/>
                            <Route
                                path="/contact"
                                children={({ match, ...rest }) => (
                                    <TransitionGroup component={firstChild}>
                                        {match && <Contact {...rest} />}
                                    </TransitionGroup>
                                )}/>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
