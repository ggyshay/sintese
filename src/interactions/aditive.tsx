import React from 'react';
import { AditiveSynthesisComponent } from './aditive-component';

export class AditiveSynthesis extends React.Component<any> {
    private ctx: AudioContext;
    private osc: OscillatorNode;
    private env: GainNode;
    private interval: any;

    constructor(props) {
        super(props);

        this.ctx = props.ctx;
        this.osc = new OscillatorNode(this.ctx);
        this.env = new GainNode(this.ctx);

        this.env.gain.value = 0;
        this.osc.connect(this.env);
        this.env.connect(this.ctx.destination);
    }

    componentDidMount() {
        this.osc.start();
    }
    render() {
        return <AditiveSynthesisComponent onWaveformChange={this.handleWaveformChange} onStart={this.handleStart} onStop={this.handleStop} />
    }

    handleWaveformChange = (real, imag) => {
        const wave = this.ctx.createPeriodicWave(real, imag);
        this.osc.setPeriodicWave(wave);
    }

    handleStart = () => {
        if (this.ctx.state !== 'running') this.ctx.resume();
        this.playSequence()
        this.interval = setInterval(() => {
            this.playSequence()
        }, 4000)
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
}