import React from 'react';
import { SubtractiveSynthesisComponent } from './subtractive-component';

const alpha = 0.00674585476;

export class SubtractiveSynthesis extends React.Component<any, any> {
    private osc: OscillatorNode;
    private env: GainNode;
    private filter: BiquadFilterNode;
    private ctx: AudioContext;
    private interval: any;
    private AnalisisInterval: any;
    private analyser: AnalyserNode;

    constructor(props) {
        super(props);

        this.state = {
            frequency: 1000,
            filterResponse: [],
            outputResponse: []
        }
        this.ctx = props.ctx;
        this.analyser = new AnalyserNode(this.ctx);
        this.analyser.fftSize = 2048

        this.osc = new OscillatorNode(props.ctx);
        this.osc.type = "square"

        this.env = new GainNode(props.ctx);
        this.env.gain.value = 0;

        this.filter = new BiquadFilterNode(props.ctx);
        this.filter.frequency.value = this.state.frequency;
        this.filter.Q.value = 3;


        this.osc.connect(this.filter);
        this.filter.connect(this.env);
        this.env.connect(this.analyser);
        this.analyser.connect(this.ctx.destination);
    }

    componentDidMount() {
        this.osc.start();
        this.getFilterFrequencyResponse();
    }

    render() {
        return <SubtractiveSynthesisComponent
            onFrequencyChange={this.handleFrequencyChange}
            frequency={this.state.frequency}
            onFilterTypeChange={this.handleFilterTypeChange}
            onStart={this.handleStart}
            onStop={this.handleStop}
            filterResponse={this.state.filterResponse}
            outputResponse={this.state.outputResponse}
        />
    }

    handleFrequencyChange = frequency => {
        this.filter.frequency.value = frequency;
        this.getFilterFrequencyResponse();
        this.setState({ frequency })
    }

    handleFilterTypeChange = name => {
        this.filter.type = name;
        this.getFilterFrequencyResponse();
    }
    handleStart = () => {
        if (this.ctx.state !== 'running') this.ctx.resume();

        this.playSequence()
        this.interval = setInterval(() => {
            this.playSequence()
        }, 4000)

        this.AnalisisInterval = setInterval(() => {
            const outputResponse = new Float32Array(1024);
            this.analyser.getFloatFrequencyData(outputResponse)
            this.setState({ outputResponse });

        }, 2);
    }

    handleStop = () => {
        clearInterval(this.interval)
    }

    playNote = (time, frequency) => {
        this.osc.frequency.setValueAtTime(frequency, time)
        this.env.gain.linearRampToValueAtTime(1, time + 0.01);
        this.env.gain.exponentialRampToValueAtTime(0.01, time + 0.23);
        this.env.gain.linearRampToValueAtTime(0, time + 0.24)
    }

    playSequence = () => {
        const now = this.ctx.currentTime;
        this.playNote(now, 440);
        this.playNote(now + 0.250, 440);

        this.playNote(now + 0.5, 523);
        this.playNote(now + 0.75, 440);

        this.playNote(now + 1, 440);
        this.playNote(now + 1.25, 630);
        this.playNote(now + 1.5, 391);

        this.playNote(now + 2, 880);
        this.playNote(now + 2.250, 880);

        this.playNote(now + 2.5, 1046);
        this.playNote(now + 2.75, 880);

        this.playNote(now + 3, 880);
        this.playNote(now + 3.25, 1260);
        this.playNote(now + 3.5, 782);
    }

    getFilterFrequencyResponse = () => {
        const frequencies = new Float32Array(1024);
        const filterResponse = new Float32Array(1024);
        const phaseResponse = new Float32Array(1024);
        for (let i = 0; i < 1024; i++) {
            frequencies[i] = 20 * Math.exp(alpha * i)
        }
        this.filter.getFrequencyResponse(frequencies, filterResponse, phaseResponse);
        this.setState({ filterResponse });
    }
}