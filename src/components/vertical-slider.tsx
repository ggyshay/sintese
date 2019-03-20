import * as React from 'react';
import './slider.css'

const SLIDER_HEIGHT = 150

export interface VerticalSliderProps {
    onChange?: (value: number) => void;
    value?: number;
    width?: number;
    color?: string;
}

export class VerticalSlider extends React.Component<VerticalSliderProps, any>  {
    private _element: any;
    constructor(props) {
        super(props);

        this.state = {
            x: null,
            y: null
        }

        this._element = React.createRef();
    }

    get corner() {
        return this._element.current && this._element.current.getBoundingClientRect().top;
    }

    get height() {
        return this._element.current && this._element.current.getBoundingClientRect().height;
    }

    render() {
        return <div
            className='slider-container'
            onMouseDown={this.handleMouseDown}
            style={{ height: '100%', width: this.props.width, flex: 1 }}
            ref={this._element}
        >
            <div className='value-display' style={{ height: this.scaleValue(this.props.value), width: this.props.width, backgroundColor: this.props.color || 'white' }} />
        </div>
    }

    handleChange = (y) => {
        const rawValue = 100 - 100 * y / this.height
        const value = Math.min(100, Math.max(rawValue, 0));
        this.props.onChange && this.props.onChange(value)
    }

    scaleValue = v => {
        return (v) * this.height / 100
    }

    handleMouseDown = e => {
        e.preventDefault();
        this.handleChange(e.clientY - this.corner)
        addEventListener('mousemove', this.handleMouseMove);
        addEventListener('mouseup', () => {
            removeEventListener('mousemove', this.handleMouseMove)
            this.handleMouseUp();
        })
        return false
    }

    handleMouseMove = e => {
        this.handleChange(e.clientY - this.corner)
    }

    handleMouseUp = () => { console.log('mouse up') }
}