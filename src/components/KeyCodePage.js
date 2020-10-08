import React from 'react';
import './KeyCodePage.css';
import WorkPage from './WorkPage';
import KeyCodeImage from '../images/Picture-Project-Keycode.png'

class KeyCodePage extends React.Component {
    state = {}
    render() {
        const keyCodeCopy = "The key code project required me to build an app the would listen for a pressed key on the keyboard, and present the relevant keys and codes of that particular key. This app was built using HTML, CSS and vanilla Javascript."
        return (
            <div className="keycode-background">
                <WorkPage
                    url="/projects"
                    heading="Keycode" workImage={KeyCodeImage}
                    copy={keyCodeCopy}
                    previous="/todoapp"
                    next="/drumkit"
                    urlwork="https://garethscott.github.io/Key-Code-Project/" />
            </div>
        )
    }
}

export default KeyCodePage;