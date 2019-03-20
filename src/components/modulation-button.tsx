import React from 'react';
import { Colors } from '../utils/constants';

export interface ModulationButtonProps {
    active: boolean;
    onClick: () => void;
}

export class ModulationButton extends React.PureComponent<ModulationButtonProps> {
    render() {
        return (
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <polygon points="0,0 86.6,50 0,100" fill={this.props.active ? 'white' : Colors.raisinBack} stroke="white"
                 onClick={this.props.onClick} strokeWidth={1}/>
            </svg>
        )
    }
}