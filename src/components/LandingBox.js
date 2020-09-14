import React from 'react';
import './LandingBox.css';

const LandingBox = () => {
    return (
        <div className="land-div">
            <div className="greeting-frame">
                <div className="greeting">
                    <h1 className="greet-type greet-1">Hello! I'm </h1>
                    <h1 className="greet-type greet-2">Gareth, and I'm a</h1>
                    <h1 className="greet-type greet-3">junior dev</h1>
                    <div className="full-stop"></div>
                    <h1 className="scroll-type">Please scroll</h1>
                </div>
            </div>
        </div>
    );
};

export default LandingBox;