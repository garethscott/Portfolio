import React from 'react';
import { Link } from 'react-router-dom'
import './ProjectsPage.css';
import ProjectSquare from './ProjectSquare'
import ProjectsTypeBlob from '../images/projects-type-blob.png';
import KeycodeSquare from '../images/Project-Square-Keycode-2.jpg';
import DrumkitSquare from '../images/Project-Square-DrumKit.jpg';
import DiceGameSquare from '../images/Project-Square-DiceGame.jpg';
import CalcSquare from '../images/Project-Square-Calc.jpg';
import AddBookSquare from '../images/Project-Square-AddBook.jpg';
import TodoSquare from '../images/Project-Square-Todo.jpg';
import PokeSquare from '../images/Project-Square-Poke.jpg';
import WeatherApp from '../images/Project-Square-WeatherApp.jpg';
import TravelApp from '../images/Project-Squares-TravelApp.jpg';
import LogoGrey from '../images/NewLogo2.png'
import Arrow from '../images/Arrow.png'

class ProjectsPage extends React.Component {
    state = {}

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const diceGameUrl = "/dicegame"
        return (
            <div>
                <div className="projects-div">
                    <div className="projects-blob-box">
                        <img className="projects-type-blog" src={ProjectsTypeBlob} alt="Projects type illtration" />
                        <div className="projects-copy-box">
                            <div className="red-dot-box">
                                <h1 className="projects-title products-title-margin">A <span className="selection">selection</span> of </h1>
                                <h1 className="projects-title">my recent projects</h1>
                                <div className="red-dot"></div>
                            </div>
                            <p className="projects-copy">Here’s a selection of projects that I have completed whilst studying at Code Nation. They’re built using a range of different technologies, including HTML5 & CSS3, Javascript, React, Node.js, Express and MongoDB. </p>
                        </div>
                    </div>
                </div>
                <div className="main-box-container">
                    <div className="left-spacer"></div>
                    <div className="box-container">
                        <ProjectSquare
                            url="/travelapp"
                            image={TravelApp} subHeading="MERN Stack"
                            heading="Travel App" />
                        <ProjectSquare
                            url="/weatherapp"
                            image={WeatherApp}
                            subHeading="Node.js"
                            heading="Weather App" />
                        <ProjectSquare
                            url="/pokemonapp"
                            image={PokeSquare}
                            subHeading="React"
                            heading="Pokemon App" />
                        <ProjectSquare
                            url="/calculator"
                            image={CalcSquare}
                            subHeading="React"
                            heading="Calculator" />
                        <ProjectSquare
                            url="/addressbook"
                            image={AddBookSquare}
                            subHeading="React"
                            heading="Address Book" />
                        <ProjectSquare
                            url="/todoapp"
                            image={TodoSquare}
                            subHeading="MERN Stack"
                            heading="Todo App" />
                        <ProjectSquare
                            url="/keycode"
                            image={KeycodeSquare}
                            subHeading="Vanilla Javascript"
                            heading="Keycode Project" />
                        <ProjectSquare
                            url="/drumkit"
                            image={DrumkitSquare}
                            subHeading="Vanilla Javascript"
                            heading="Drumkit" />
                        <ProjectSquare
                            url="/dicegame"
                            image={DiceGameSquare}
                            subHeading="Vanilla Javascript"
                            heading="Dice Game" />
                        <div className="bottom-spacer">
                            <div className="arrow-box">
                                <img className="arrow" src={Arrow} alt="Arrow pointing to contact details " />
                            </div>
                            <div className="contact-heading-box">
                                <h1 className="feel-free-heading">Please feel free to</h1>
                                <h1 className="get-in-touch">get in touch</h1>
                                <div className="touch-dot"></div>
                            </div>
                            <div className="contact-details-box">
                                <h1 className="phone">+44 (0) 7947 710 770</h1>
                                <h1 className="email">g.scott1986@gmail.com</h1>
                            </div>
                            <div className="grey-logo">
                                <Link to="/home"><img className="logo-transparent" src={LogoGrey} alt="Gareth's logo" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-spacer"></div>
                </div>
            </div>
        )
    }
}





export default ProjectsPage;