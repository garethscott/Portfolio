import React from 'react';
import './DrumKitPage.css';
import WorkPageLight from './WorkPageLight';
import DrumkitImg from '../images/Picture-Project-Drumkit.jpg';

class DrumKitPage extends React.Component {
    state = {}
    render() {
        const DrumKitCopy = "The drum kit app, when any of the listed keys are pressed plays sound effects of the associated drum or cymbal. This was built using HTML, CSS and vanilla Javascript."
        return (
            <div className="drum-kit">
                <WorkPageLight
                    url="/projects"
                    workImage={DrumkitImg}
                    heading="Drumkit" copy={DrumKitCopy}
                    previous="/keycode"
                    next="/dicegame"
                    urlwork="https://garethscott.github.io/Drumkit-Project/" />
            </div>
        )
    }
}

export default DrumKitPage;