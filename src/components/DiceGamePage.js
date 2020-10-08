import React from 'react';
import './DiceGamePage.css';
import WorkPageLight from './WorkPageLight';
import DiceGameImg from '../images/Picture-Project-DiceGame.jpg';

class DiceGamePage extends React.Component {
    state = {}
    render() {
        const DiceGameCopy = "The Dice game is a two player app that allows each player five roles of a dice. In order for a participant to win they must score over twenty-one within their allocated five rolls, if they roll a score of one at anytime they loose immediately! This app was built using HTML, CSS and vanilla Javascript. "
        return (
            <div className="dice-game">
                <WorkPageLight
                    url="/projects"
                    workImage={DiceGameImg}
                    heading="Dice Game"
                    copy={DiceGameCopy}
                    previous="/drumkit"
                    next="/travelapp"
                    urlwork="https://garethscott.github.io/Dice-Multiplayer-Project-/" />
            </div>
        )
    }
}

export default DiceGamePage;