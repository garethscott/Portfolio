import React, { Component } from 'react';
import './CalcPage.css';
import WorkPageLight from './WorkPageLight';
import CalcImg from '../images/Picture-Project-Calc.jpg';

class CalcPage extends Component {
    state = {}
    render() {
        const CalcCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="calc">
                <WorkPageLight url="/projects" workImage={CalcImg} heading="Calculator" copy={CalcCopy} previous="/pokemonapp" next="/addressbook" />
            </div>
        )
    }
}

export default CalcPage;