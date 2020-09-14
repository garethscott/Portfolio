import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPageLight.css';
import ExitBtn from '../images/exit-btn.png'

const WorkPageLight = (props) => {
    return (
        <div className="background-box-light">
            <div className="exit-btn-light">
                <Link to={props.url}><img src={ExitBtn} alt="Button to exit project and return to the projects page" /></Link>
            </div>
            <div className="work-content-box-light">
                <div className="project-img-box-light">
                    <img className="project-img-light" src={props.workImage} alt={props.alt} />
                </div>
                <div className="work-copy-light">
                    <h1 className="work-heading-light">{props.heading}</h1>
                    <p className="work-copy-box-light">{props.copy}</p>
                    <h1 className="see-online-light">See online</h1>
                </div>
            </div>
            <div>
                <h1 class="project-flick-btn-light">
                    <Link class="previous-light" to={props.previous}><span>previous</span></Link>
                    <span className="/">/</span><Link class="next-light" to={props.next}><span>next </span></Link>
                    <span className="project">project</span></h1>
            </div>
        </div>
    )
}

export default WorkPageLight;