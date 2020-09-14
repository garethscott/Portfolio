import React, { Component } from 'react';
import './TravelAppPage.css';
import WorkPageLight from './WorkPageLight';
import TravelAppImg from '../images/Picture-Project-TravelApp.jpg';

class TravelAppPage extends Component {
    state = {}
    render() {
        const TravelAppCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="travel-app">
                <WorkPageLight url="/projects" workImage={TravelAppImg} heading="Travel App" copy={TravelAppCopy} previous="/dicegame" next="/weatherapp" />
            </div>
        )
    }
}

export default TravelAppPage;