import React from 'react';
import { Knob } from '../components/knob';
import { DisplayComponent } from '../components/display';

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
            playing: false
        }
    }
    render() {
        let outputSpectrum = [];
        for (let i = 0; i < this.props.outputSpectrum.length; i++) {
            outputSpectrum.push({ x: Math.log(i + 1), y: this.props.outputSpectrum[i] });
        }
        return (
            <div style={{ width: '100vw', backgroundColor: 'orange', position: 'relative', marginLeft: -200, padding: 20, display: 'flex', justifyContent: 'center', height: 250 }}>
                <div>
                    <div style={{ display: 'flex' }}>
                        <Knob min={0.1} max={1000} logarithmic onChange={this.props.onF1Change} value={this.props.f1} />
                        <div style={{ width: 10, height: 10, backgroundColor: 'white' }} onClick={this.props.onMod1Click}/>
                        <Knob min={0.1} max={1000} logarithmic onChange={this.props.onF2Change} value={this.props.f2} />
                        <div style={{ width: 10, height: 10, backgroundColor: 'white' }} onClick={this.props.onMod2Click}/>
                        <Knob min={0.1} max={1000} logarithmic onChange={this.props.onF3Change} value={this.props.f3} />
                    </div>
                    <div style={{ width: 20, height: 20, backgroundColor: 'green' }} onClick={this.onPlayClick} />
                </div>
                <div style={{ border: '1px solid black' }}>
                    <DisplayComponent data={outputSpectrum} id="completelooney" />
                </div>
            </div>
        )
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