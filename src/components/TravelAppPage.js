import React, { Component } from 'react';
import './TravelAppPage.css';
import WorkPageLight from './WorkPageLight';
import TravelAppImg from '../images/Picture-Project-TravelApp.jpg';

class TravelAppPage extends Component {
    state = {}
    render() {
        const TravelAppCopy = "Vacation detective is full-stacked application that allows the user to discover their ideal holiday destination based on their holiday needs and requirements. A group project, we adopted a contributor workflow using git. The front-end was built using React and the back-end was built using Node.js and Express, connected to a MongoDB database."
        return (
            <div className="travel-app">
                <WorkPageLight
                    url="/projects"
                    workImage={TravelAppImg}
                    heading="Travel App"
                    copy={TravelAppCopy}
                    previous="/dicegame"
                    next="/weatherapp"
                    urlwork="https://thevacationdetective.herokuapp.com/" />
            </div>
        )
    }
}

export default TravelAppPage;