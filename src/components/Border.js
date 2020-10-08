import React from 'react';
import { Link } from 'react-router-dom'
import './Border.css';
import TopNav from './TopNav';
import Logo from '../images/NewLogo2.png';
import SideNav from './SideNav';

class Border extends React.Component {
    state = {}
    render() {
        return (
            <div className="border">
                <Link to="/"><img className="logo active" src={Logo} alt="Gareth's Logo" /></Link>
                <div className="top-side">
                </div>
                <div className="right-side">
                    <SideNav />
                </div>
                <div className="bottom-side"></div>
                <div className="left-side"></div>
            </div>
        );
    };
};

export default Border