import React from 'react';
import { Knob } from '../components/knob';
import { DisplayComponent } from '../components/display';
import { PlayButton } from '../components/play-button';
import { Colors } from '../utils/constants';
import { ModulationButton } from '../components/modulation-button';

export interface FMComponentProps {
    onStart: () => void;
    onStop: () => void;
    onF1Change: (v: number) => void;
    onF2Change: (v: number) => void;
    onF3Change: (v: number) => void;
    onMod1Click: () => void;
    onMod2Click: () => void;
    f1: number;
    f2: number;
    f3: number;
    outputSpectrum: Float32Array | number[]
}

export class FMComponent extends React.Component<FMComponentProps, any> {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            mod1: false,
            mod2: true
        }
    }
    render() {
        let outputSpectrum = [];
        for (let i = 0; i < this.props.outputSpectrum.length; i++) {
            outputSpectrum.push({ x: Math.log(i + 1), y: this.props.outputSpectrum[i] });
        }
        return (
            <div className="interaction-container">
                <h1 className="interaction-text">FM</h1>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', width: 400, justifyContent: 'space-evenly' }}>
                        <Knob min={0.1}
                            max={1000}
                            logarithmic
                            onChange={this.props.onF1Change}
                            value={this.props.f1}
                            color={Colors.coral} />
                        <div style={{ width: 20, height: 20 }}>
                            <ModulationButton active={this.state.mod1} onClick={this.handleMod1Click} />
                        </div>
                        <Knob min={0.1} max={1000} logarithmic onChange={this.props.onF2Change} value={this.props.f2} color={Colors.coral} />
                        <div style={{ width: 20, height: 20 }}>
                            <ModulationButton active={this.state.mod2} onClick={this.handleMod2Click} />
                        </div>
                        <Knob min={0.1} max={1000} logarithmic onChange={this.props.onF3Change} value={this.props.f3} color={Colors.coral} />
                    </div>
                    <div style={{ width: 10, height: 40 }} />
                    <PlayButton onClick={this.onPlayClick} playing={this.state.playing} />
                </div>
                <div style={{ width: 60, height: 10 }} />
                <div style={{ width: 400, height: 300 }}>
                    <DisplayComponent data={outputSpectrum} id="completelooney" hasAxis="end" color={Colors.blue} />
                </div>
            </div>
        )
    }

    handleMod1Click = () => {
        this.setState({ mod1: !this.state.mod1 });
        this.props.onMod1Click()
    }

    handleMod2Click = () => {
        this.setState({ mod2: !this.state.mod2 });
        this.props.onMod2Click();
    }

    onPlayClick = () => {
        if (this.state.playing) {
            this.props.onStop()
            this.setState({ playing: false });
        } else {
            this.props.onStart();
            this.setState({ playing: true });
        }
    }
}