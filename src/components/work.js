import React, {Component} from 'react';
import loremIpsum from 'lorem-ipsum';

class Work extends Component {
    render() {
        return (
            <div id="work" className="route-component">
                {loremIpsum({count: 5, units: 'paragraphs'})}
            </div>
        );
    }
}

export default Work;