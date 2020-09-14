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


                    <p className="about-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    , sed do eiusmod tempor incididunt ut labore et dolore mag
              na aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                    <p className="about-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    , sed do eiusmod tempor incididunt ut labore et dolore mag
                    na aliqua. Quis ipsum suspendisse ultrices gravida. Risus co
                    mmodo viverra maecenas accumsan lacus vel facilisis. Risus co
              mmodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <p className="about-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    , sed do eiusmod tempor incididunt ut labore et dolore mag
              na aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida.</p>


                    <h1><Link className="projects-link" to="/projects">My Projects</Link></h1>


                </div>



            </div>
        </div >
    );
};

export default AboutBox;