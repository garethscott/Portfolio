import React from 'react';
import { Link } from 'react-router-dom';
import './WorkPage.css';
import ExitBtn from '../images/exit-btn-white.png'

const WorkPage = (props) => {
    return (
        <div className="background-box">
            <div className="exit-btn">
                <Link to={props.url}><img src={ExitBtn} alt="Button to exit project and return to the projects page" /></Link>
            </div>
            <div className="work-content-box">
                <div className="project-img-box">
                    <img className="project-img" src={props.workImage} alt={props.alt} />
                </div>
                <div className="work-copy">
                    <h1 className="work-heading">{props.heading}</h1>
                    <p className="work-copy-box">{props.copy}</p>
                    <h1><a className="see-online" target="_blank" href={props.urlwork}>See online</a></h1>
                </div>
            </div>
            <div>
                <h1 class="project-flick-btn"><Link class="previous-link" to={props.previous}>
                    <span className="previous">previous</span></Link>
                    <span>/</span><Link className="next-link" to={props.next}>
                        <span className="next">next </span></Link>
                    <span className="project">project</span></h1>
            </div>
        </div >
    )
}

export default WorkPage;