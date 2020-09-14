import React from 'react';
import './KeyCodePage.css';
import WorkPage from './WorkPage';
import KeyCodeImage from '../images/Picture-Project-Keycode.png'

class KeyCodePage extends React.Component {
    state = {}
    render() {
        const keyCodeCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="keycode-background">
                <WorkPage url="/projects" heading="Keycode" workImage={KeyCodeImage} copy={keyCodeCopy} previous="/todoapp" next="/drumkit" />
            </div>
        )
    }
}

export default KeyCodePage;