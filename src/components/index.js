import React, {Component} from 'react';
import loremIpsum from 'lorem-ipsum';

class Index extends Component {
    render() {
        return (
            <div id="index">
                {loremIpsum({count: 5, units: 'paragraphs'})}
            </div>
        );
    }
}

export default Index;