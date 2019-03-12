import React from 'react';
import { DisplayComponent } from '../components/display';
import { Knob } from '../components/knob';

export interface SubtractiveSynthesisComponentProps {
    onFrequencyChange: (value: number) => void;
    frequency: number;
    onFilterTypeChange: (type: String) => void;
    onStart: () => void;
    onStop: () => void;
    filterResponse: Float32Array
    outputResponse: Float32Array
}

export class SubtractiveSynthesisComponent extends React.Component<SubtractiveSynthesisComponentProps, any> {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false
        }
    }
    render() {
        const filterResponse = [];
        for (let i = 0; i < this.props.filterResponse.length; i++) {
            filterResponse.push({ x: i, y: this.props.filterResponse[i] })
        }
        const outputResponse = [];
        for (let i = 0; i < this.props.outputResponse.length; i++) {
            outputResponse.push({ x:i, y: 20*Math.exp(this.props.outputResponse[i]/100) })
        }
        return (
            <div style={{ width: '100vw', backgroundColor: 'orange', position: 'relative', marginLeft: -200, padding: 20, display: 'flex', justifyContent: 'center', height: 250 }}>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div style={{ border: '1px solid black' }}>
                        <div style={{ height: 150 }}>
                            <DisplayComponent data={filterResponse} id="asdasdasd" min={0} max={1.8} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Knob
                                min={20}
                                max={20000}
                                value={this.props.frequency}
                                onChange={this.props.onFrequencyChange}
                                label={'Frequência'}
                                logarithmic
                            />
                            <div
                                style={{ width: 20, height: 20, backgroundColor: 'white', margin: 5 }}
                                onClick={this.handleFilterTypeClick('lowpass')} />
                            <div
                                style={{ width: 20, height: 20, backgroundColor: 'white', margin: 5 }}
                                onClick={this.handleFilterTypeClick('bandpass')} />
                            <div
                                style={{ width: 20, height: 20, backgroundColor: 'white', margin: 5 }}
                                onClick={this.handleFilterTypeClick('highpass')} />
                        </div>
                    </div>
                    <div style={{ border: '1px solid blue', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <div style={{ height: 150 }}>
                            <DisplayComponent data={outputResponse} id="asdadfsdg" max={20} min={0} />

                        </div>
                        <div style={{ backgroundColor: 'green', width: 20, height: 20 }} onClick={this.handlePlayClick} />
                    </div>
                </div>
            </div>
        )
    }

    handleFilterTypeClick = type => () => {
        this.props.onFilterTypeChange(type);
    }

    handlePlayClick = () => {
        if (this.state.isPlaying) {
            this.props.onStop()
            this.setState({ isPlaying: false });
        } else {
            this.props.onStart();
            this.setState({ isPlaying: true });
        }
    }
}