import React, { Component } from 'react';
import './PokePage.css';
import WorkPageLight from './WorkPageLight';
import PokeImg from '../images/Picture-Project-Poke.jpg';

class PokePage extends Component {
    state = {}
    render() {
        const PokeCopy = "The Pokemon app was team project working with git using a collaborator workflow. As a team we had to fix bugs and make additions to the existing Pokemon app. The Pokemon app allowed the user to search and research their favourite Pokemon. The app was built using React and the pokemon data was fetched from an external API."
        return (
            <div className="pokemon">
                <WorkPageLight
                    url="/projects"
                    workImage={PokeImg}
                    heading="Pokemon App"
                    copy={PokeCopy}
                    previous="/weatherapp"
                    next="/calculator"
                    urlwork="https://garethscott.github.io/Pokemon-App/" />
            </div>
        )
    }
}

export default PokePage;