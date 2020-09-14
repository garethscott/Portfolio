import React, { Component } from 'react';
import './WeatherAppPage.css';
import WorkPage from './WorkPage';
import FillImg from '../images/Fill-img.png';

class WeatherAppPage extends Component {
    state = {}
    render() {
        const WeatherAppCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="weather-app">
                <WorkPage url="projects" workImage={FillImg} heading="Weather App" copy={WeatherAppCopy} previous="/travelapp" next="/pokemonapp" />
            </div>
        )
    }
}

export default WeatherAppPage;