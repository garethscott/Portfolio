import React, { Component } from 'react';
import './WeatherAppPage.css';
import WorkPage from './WorkPage';
import FillImg from '../images/Fill-img.png';

class WeatherAppPage extends Component {
    state = {}
    render() {
        const WeatherAppCopy = "The application allows the user to find the forecast of a searched for location. The app was built server-side using Node.js and express, and rendered back-end with the help of template-engine handlebars. The weather forecast data is retrieved from the OpenWeatherMap API."
        return (
            <div className="weather-app">
                <WorkPage url="projects" workImage={FillImg} heading="Weather App" copy={WeatherAppCopy} previous="/travelapp" next="/pokemonapp" />
            </div>
        )
    }
}

export default WeatherAppPage;