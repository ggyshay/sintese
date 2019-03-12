import * as React from 'react';
import './slider.css'

const SLIDER_HEIGHT = 150

export interface VerticalSliderProps {
    onChange?: (value: number) => void;
    value?: number;
    width?: number;
}

export class VerticalSlider extends React.Component<VerticalSliderProps, any>  {
    private _element: any;
    private cornerY: number;
    constructor(props) {
        super(props);

        this.state = {
            x: null,
            y: null
        }

        this._element = React.createRef();
    }

    componentDidMount() {
        this.cornerY = this._element.current && this._element.current.getBoundingClientRect().top;
    }
    render() {
        return <div
            className='slider-container'
            onMouseDown={this.handleMouseDown}
            style={{ height: SLIDER_HEIGHT, width: this.props.width }}
        ref={this._element}
        >
            <div className='value-display' style={{ height: this.scaleValue(this.props.value), width: this.props.width }} />
        </div>
    }

    handleChange = (y) => {
        const rawValue = 100 - 100 * y / SLIDER_HEIGHT
        const value = Math.min(100, Math.max(rawValue, 0));
        this.props.onChange && this.props.onChange(value)
    }

    scaleValue = v => {
        return (v) * SLIDER_HEIGHT / 100
    }

    handleMouseDown = e => {
        e.preventDefault();
        this.handleChange(e.clientY - this.cornerY)
        addEventListener('mousemove', this.handleMouseMove);
        addEventListener('mouseup', () => {
            removeEventListener('mousemove', this.handleMouseMove)
            this.handleMouseUp();
        })
        return false
    }

    handleMouseMove = e => {
        this.handleChange(e.clientY - this.cornerY)
    }

    handleMouseUp = () => { console.log('mouse up') }
}