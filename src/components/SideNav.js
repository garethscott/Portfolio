import React from 'react';
import MessageLogo from '../images/Message-logo.png';
import GitHubLogo from '../images/Github-logo.png';
import LinkedInLogo from '../images/Linked-In-logo.png';
import InstagramLogo from '../images/Instagram-logo.png';
import './SideNav.css'

const SideNav = () => {
    return (
        <div className="side-nav">
            <img className="message-logo side-logo" src={MessageLogo} alt="Link to maessage Gareth" />
            <img className="git-logo" src={GitHubLogo} alt="Link to Gareth's Github " />
            <img className="side-logo" src={LinkedInLogo} alt="Link to Gareth's Linked-in" />
            <img className="side-logo" src={InstagramLogo} alt="Link to Gareth's Instagram" />
        </div>
    )
}

export default SideNav;