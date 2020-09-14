import React from 'react';
import './DrumKitPage.css';
import WorkPageLight from './WorkPageLight';
import DrumkitImg from '../images/Picture-Project-Drumkit.jpg';

class DrumKitPage extends React.Component {
    state = {}
    render() {
        const DrumKitCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="drum-kit">
                <WorkPageLight url="/projects" workImage={DrumkitImg} heading="Drumkit" copy={DrumKitCopy} previous="/keycode" next="/dicegame" />
            </div>
        )
    }
}

export default DrumKitPage;