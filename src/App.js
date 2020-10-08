import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Border from './components/Border';
import HomePage from './components/HomePage';
import ProjectsPage from './components/ProjectsPage';
import PokePage from './components/PokePage';
import WeatherAppPage from './components/WeatherAppPage';
import TravelAppPage from './components/TravelAppPage';
import TodoPage from './components/TodoPage';
import CalcPage from './components/CalcPage';
import AddressBookPage from './components/AddressBookPage';
import DiceGamePage from './components/DiceGamePage';
import DrumKitPage from './components/DrumKitPage';
import KeyCodePage from './components/KeyCodePage';



class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Border />
          <Route exact path="/" render={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/pokemonapp" component={PokePage} />
          <Route path="/weatherapp" component={WeatherAppPage} />
          <Route path="/travelapp" component={TravelAppPage} />
          <Route path="/todoapp" component={TodoPage} />
          <Route path="/calculator" component={CalcPage} />
          <Route path="/addressbook" component={AddressBookPage} />
          <Route path="/dicegame" component={DiceGamePage} />
          <Route path="/drumkit" component={DrumKitPage} />
          <Route path="/keycode" component={KeyCodePage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
