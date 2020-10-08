import React from 'react';
import MessageLogo from '../images/Message-logo.png';
import GitHubLogo from '../images/Github-logo.png';
import LinkedInLogo from '../images/Linked-In-logo.png';
import InstagramLogo from '../images/Instagram-logo.png';
import './SideNav.css'

const SideNav = () => {
    return (
        <div className="side-nav">
            {/* <img className="message-logo side-logo" src={MessageLogo} alt="Link to maessage Gareth" /> */}
            <a target="_blank" href="https://github.com/garethscott?tab=repositories"><img className="git-logo" src={GitHubLogo} alt="Link to Gareth's Github " /></a>
            <a target="_blank" href="https://www.linkedin.com/in/gareth-scott-70bba354/"><img className="side-logo" src={LinkedInLogo} alt="Link to Gareth's Linked-in" /></a>
            <a target="_blank" href="https://www.instagram.com/garethscott1986/?hl=en"><img className="side-logo" src={InstagramLogo} alt="Link to Gareth's Instagram" /></a>
        </div>
    )
}

export default SideNav;