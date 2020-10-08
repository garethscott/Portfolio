import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBox.css';
import AboutImg from '../images/About-blob.png';

const AboutBox = () => {
    return (
        <div className="about-div">
            <div className="about-blob-box">
                <img className="about-blob-img" src={AboutImg} alt="About heading blob" />


                <div className="about-copy-box">


                    <div className="red-dot-box">
                        <h1 className="about-title title-margin">A <span className="little">little</span> bit</h1>
                        <h1 className="about-title"> about myself</h1>
                        <div className="red-dot-about"></div>
                    </div>


                    <p className="about-copy">Hello, I’m Gareth. I am junior web developer based in the North West with a passion for front-end development and design.  </p>
                    <p className="about-copy">Having worked as a freelance illustrator for a number of years, I have now transferred my love for drawing to building websites and applications. I’m excited to embark on this new career in coding, and start working with technology whilst maintaining my eye for the creative.</p>
                    <p className="about-copy">I have a degree in Graphic Design as well as other qualifications in Art & Design. </p>
                    <p className="about-copy">I have recently graduated from the Coding school Code Nation and I am now proficient in a number of different tools and technologies. This business led course also developed my skills in communication and collaboration, skills which are vital for a career in coding. </p>
                    <p className="about-copy">Please follow the link below to see a selection of the work I completed at Code Nation. </p>
                    <h1><Link className="projects-link" to="/projects">My Projects</Link></h1>


                </div>



            </div>
        </div >
    );
};

export default AboutBox;