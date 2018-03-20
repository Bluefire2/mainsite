import React, {Component} from 'react';
import githubIcon from '../images/icon-github.svg';
import mailIcon from '../images/icon-mail.svg';
import linkedinIcon from '../images/icon-linkedin.svg';
import facebookIcon from '../images/icon-facebook.svg';
import Constants from '../constants';
import SocialMediaButton from './social_media_button';

class Contact extends Component {
    render() {
        const smButtons = [
            {
                icon: mailIcon,
                username: Constants.email,
                link: `mailto:${Constants.email}`
            },
            {
                icon: githubIcon,
                username: 'Bluefire2',
                link: 'https://github.com/Bluefire2'
            },
            {
                icon: linkedinIcon,
                username: Constants.name,
                link: 'https://www.linkedin.com/in/kirill-chernyshov-52125b119/'
            },
            {
                icon: facebookIcon,
                username: 'Kirill Chernyshov',
                link: 'https://www.facebook.com/kc875'
            }
        ];
        return (
            <div id="contact" className="wrap">
                <div className="left">
                    Contact me for work opportunities!
                </div>
                <div className="right">
                    {smButtons.map((elem, index) => {
                        return <SocialMediaButton key={index} {...elem}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Contact;