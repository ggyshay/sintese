import React from 'react';
import "./play-button.scss"

export interface PlayButtonProps {
    playing: boolean;
    onClick: () => void;
}

export class PlayButton extends React.PureComponent<PlayButtonProps>{
    render() {
        return (
            <div className={`play-button ${this.props.playing && 'paused'}`} onClick={this.props.onClick}/>
        )
    }
}