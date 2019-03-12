import React from 'react';
import { FMComponent } from './fm-component';

export interface FMSynthesisState {
    freq1: number;
    freq2: number;
    freq3: number;
    outputSpectrum: Float32Array| number[]
}

export class FMSynthesis extends React.Component<any, FMSynthesisState>{
    private ctx: AudioContext;
    private osc1: OscillatorNode;
    private osc2: OscillatorNode;
    private osc3: OscillatorNode;
    private amp1: GainNode;
    private amp2: GainNode;
    private env: GainNode
    private interval: any;
    private analyser: AnalyserNode;
    private AnalisisInterval: any;

    constructor(props) {
        super(props);

        this.state = {
            freq1: 20,
            freq2: 333,
            freq3: 440,
            outputSpectrum: []
        }

        this.ctx = props.ctx;

        this.osc1 = new OscillatorNode(this.ctx);
        this.osc1.frequency.value = this.state.freq1;

        this.osc2 = new OscillatorNode(this.ctx);
        this.osc2.frequency.value = this.state.freq2;

        this.osc3 = new OscillatorNode(this.ctx);
        this.osc3.frequency.value = this.state.freq3;

        this.amp1 = new GainNode(this.ctx);
        this.amp1.gain.value = this.state.freq2;
        this.amp2 = new GainNode(this.ctx);
        this.amp2.gain.value = this.state.freq3;

        this.env = new GainNode(this.ctx);
        this.env.gain.value = 0;

        this.analyser = new AnalyserNode(this.ctx);

        this.osc1.connect(this.amp1);
        this.amp1.connect(this.osc2.frequency);
        this.osc2.connect(this.amp2);
        this.amp2.connect(this.osc3.frequency);
        this.osc3.connect(this.env);
        this.env.connect(this.analyser);
        this.analyser.connect(this.ctx.destination);

    }

componentDidMount() {
    this.osc1.start();
    this.osc2.start();
    this.osc3.start();
}
    render() {
        return (
            <FMComponent 
                onStart={this.handleStart}
                onStop={this.handleStop}
                onF1Change={this.handleF1Change}
                onF2Change={this.handleF2Change}
                onF3Change={this.handleF3Change}
                f1={this.state.freq1}
                f2={this.state.freq2}
                f3={this.state.freq3}
                outputSpectrum={this.state.outputSpectrum}
                onMod1Click={this.handleMod1Click}
                onMod2Click={this.handleMod2Click}
            />
        )
    }

    handleF1Change = freq1 => {
        this.osc1.frequency.value = freq1;
        this.setState({freq1})
    }

    handleF2Change = freq2 => {
        this.osc2.frequency.value = freq2;
        this.amp1.gain.value = freq2;
        this.setState({freq2})
    }

    handleF3Change = freq3 => {
        this.osc3.frequency.value = freq3;
        this.amp2.gain.value = freq3;
        this.setState({freq3})
    }

    handleMod1Click = () => {
        if(this.amp1.gain.value != 0){
            this.amp1.gain.value = 0;
        }else {
            this.amp1.gain.value = this.state.freq2
        }
    }

    handleMod2Click = () => {
        if(this.amp2.gain.value != 0){
            this.amp2.gain.value = 0;
        }else {
            this.amp2.gain.value = this.state.freq3
        }
    }

    handleStart = () => {
        if (this.ctx.state !== 'running') this.ctx.resume();

        this.playSequence()
        this.interval = setInterval(() => {
            this.playSequence()
        }, 4000)

        this.AnalisisInterval = setInterval(() => {
            const outputSpectrum = new Float32Array(1024);
            this.analyser.getFloatFrequencyData(outputSpectrum)
            this.setState({ outputSpectrum });
        }, 2);
    }

    handleStop = () => {
        console.log('start');
        clearInterval(this.interval)
    }

    playNote = (time, frequency) => {
        this.osc3.frequency.setValueAtTime(frequency, time)
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
}