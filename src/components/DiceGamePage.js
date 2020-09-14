import React from 'react';
import './DiceGamePage.css';
import WorkPageLight from './WorkPageLight';
import DiceGameImg from '../images/Picture-Project-DiceGame.jpg';

class DiceGamePage extends React.Component {
    state = {}
    render() {
        const DiceGameCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="dice-game">
                <WorkPageLight url="/projects" workImage={DiceGameImg} heading="Dice Game" copy={DiceGameCopy} previous="/drumkit" next="/travelapp" />
            </div>
        )
    }
}

export default DiceGamePage;