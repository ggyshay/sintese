import React from 'react';
import { VerticalSlider } from '../components';
import { DisplayComponent } from '../components/display';
import { ifft } from 'fft-js';

export interface AditiveSynthesisComponentProps {
    onStart: () => void;
    onStop: () => void;
    onWaveformChange: (real: Float32Array, imag: Float32Array) => void;
}


export class AditiveSynthesisComponent extends React.Component<AditiveSynthesisComponentProps, any>{
    constructor(props) {
        super(props);

        this.state = {
            values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            transform: [],
            isPlaying: false
        }
    }
    render() {
        return (
            <div style={{ width: '100vw', backgroundColor: 'orange', position: 'relative', marginLeft: -200, padding: 20, display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 500, border: '1px solid white' }}>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            {this.state.values.map((v, idx) => <VerticalSlider onChange={value => this.handleSliderChange(value, idx)} value={v} width={5} />)}
                        </div>
                        <div style={{ backgroundColor: 'green', width: 20, height: 20, marginTop: 20 }} onClick={this.handlePlayClick} />
                    </div>
                    <div style={{ width: 160, height: 160, border: '1px solid black', marginLeft: 20 }}>
                        <DisplayComponent data={this.state.transform} id="chirros" />
                    </div>
                </div>
            </div>
        )
    }

    handleSliderChange = (value, index) => {
        const values = this.state.values;
        values[index] = value;
        this.handleChange(values)
        this.setState({ values });
    }

    handleChange = values => {
        let paddedValues = [0, ...values.map(v => v / 100)];
        paddedValues.splice(paddedValues.length - 1, 1)
        // for (let i = paddedValues.length; i < 1024; i++) {
        //     paddedValues.push(0);
        // }
        const phasors = []
        const imag = new Float32Array(paddedValues.length);
        const real = new Float32Array(paddedValues.length);

        for (let i = 0; i < paddedValues.length; i++) {
            phasors.push([0, -paddedValues[i]])
            real[i] = 0;
            imag[i] = -paddedValues[i];
        }
        const spectrum = ifft(phasors);

        let transform = [];

        spectrum.forEach((element, idx: number) => transform[idx] = { x: idx, y: element[0] });

        this.props.onWaveformChange(real, imag);
        transform = transform.sort((a, b) => a.x - b.x)
        this.setState({ transform })
    }

    handlePlayClick = () => {
        if (this.state.isPlaying) {
            this.props.onStop()
            this.setState({ isPlaying: false });
        } else {
            this.props.onStart()
            this.setState({ isPlaying: true });
        }
    }
}

