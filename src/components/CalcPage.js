import React, { Component } from 'react';
import './CalcPage.css';
import WorkPageLight from './WorkPageLight';
import CalcImg from '../images/Picture-Project-Calc.jpg';

class CalcPage extends Component {
    state = {}
    render() {
        const CalcCopy = "The calculator project required me to build a fully functioning calculator using React."
        return (
            <div className="calc">
                <WorkPageLight
                    url="/projects"
                    workImage={CalcImg}
                    heading="Calculator"
                    copy={CalcCopy}
                    previous="/pokemonapp"
                    next="/addressbook"
                    urlwork="https://garethscott.github.io/Calculator-Project/" />
            </div>
        )
    }
}

export default CalcPage;