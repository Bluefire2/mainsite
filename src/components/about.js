import React, {Component} from 'react';
import loremIpsum from 'lorem-ipsum';

class About extends Component {
    render() {
        return (
            <div id="about">
                {loremIpsum({count: 5, units: 'paragraphs'})}
            </div>
        );
    }
}

export default About;