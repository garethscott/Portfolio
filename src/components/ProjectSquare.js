import React from 'react';
import { Link } from 'react-router-dom'
import './ProjectSquare.css';

const ProjectSquare = (props) => {
    return (
        <Link to={props.url}><div className="box box-1">
            <img className="image" src={props.image} alt="Test image" />
            <div className="text">
                <h1 className="project-img-sub">{props.subHeading}</h1>
                <h1 className="project-img-heading">{props.heading}</h1>
            </div>
        </div></Link>
    )
}

export default ProjectSquare;