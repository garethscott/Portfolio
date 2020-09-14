import React, { Component } from 'react';
import './PokePage.css';
import WorkPageLight from './WorkPageLight';
import PokeImg from '../images/Picture-Project-Poke.jpg';

class PokePage extends Component {
    state = {}
    render() {
        const PokeCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="pokemon">
                <WorkPageLight url="/projects" workImage={PokeImg} heading="Pokemon App" copy={PokeCopy} previous="/weatherapp" next="/calculator" />
            </div>
        )
    }
}

export default PokePage;