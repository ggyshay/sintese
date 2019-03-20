import React from 'react';
import { DisplayComponent } from '../components/display';
import { Knob } from '../components/knob';
import "./interactions.css"
import { Colors } from '../utils/constants';
import { PlayButton } from '../components/play-button';

export interface SubtractiveSynthesisComponentProps {
    onFrequencyChange: (value: number) => void;
    frequency: number;
    onFilterTypeChange: (type: String) => void;
    selectedFilter: string;
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
            outputResponse.push({ x: i, y: 20 * Math.exp(this.props.outputResponse[i] / 100) })
        }
        const filter = this.props.selectedFilter;
        return (
            <div className="interaction-container">
                <h1 className="interaction-text">Subtrativa</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <div>
                        <div style={{ height: 380, width: 500 }}>
                            <DisplayComponent data={filterResponse} id="asdasdasd" min={0} max={1.8} color={Colors.coral} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Knob
                                min={20}
                                max={20000}
                                value={this.props.frequency}
                                onChange={this.props.onFrequencyChange}
                                label={'Frequência'}
                                logarithmic
                                color={Colors.coral}
                            />
                            <div style={{width: 60, height: 10}}/>
                            <div style={{ maxWidth: 50, marginRight: 10 }}>
                                <div
                                    style={{
                                        backgroundColor: (filter === 'lowpass') ? 'white' : Colors.raisinBack,
                                        margin: 5,
                                        padding: 5,
                                        border: '1px solid white'
                                    }}
                                    onClick={this.handleFilterTypeClick('lowpass')} >

                                    <img src={require('../assets/lpf-icon.svg')} width={30} />
                                </div>
                                <p style={{ color: Colors.white }}>Passa-baixas</p>
                            </div>
                            <div style={{ maxWidth: 50, marginRight: 10 }}>
                                <div
                                    style={{
                                        backgroundColor: (filter === 'bandpass') ? 'white' : Colors.raisinBack,
                                        margin: 5,
                                        padding: 5,
                                        border: '1px solid white'
                                    }}
                                    onClick={this.handleFilterTypeClick('bandpass')} >
                                    <img src={require('../assets/bpf-icon.svg')} width={30} />
                                </div>
                                <p style={{ color: Colors.white }}>Passa-banda</p>
                            </div>

                            <div style={{ maxWidth: 50, marginRight: 10 }}>
                                <div
                                    style={{
                                        backgroundColor: (filter === 'highpass') ? 'white' : Colors.raisinBack,
                                        margin: 5,
                                        padding: 5,
                                        border: '1px solid white'
                                    }}
                                    onClick={this.handleFilterTypeClick('highpass')} >
                                    <img src={require('../assets/hpf-icon.svg')} width={30} />
                                </div>
                                <p style={{ color: Colors.white }}>Passa-altas</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 60, height: 10 }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <div style={{ height: 300, width: 400 }}>
                            <DisplayComponent data={outputResponse} id="asdadfsdg" max={20} min={0} hasAxis="end" color={Colors.blue} />
                        </div>
                        <PlayButton onClick={this.handlePlayClick} playing={this.state.isPlaying} />
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