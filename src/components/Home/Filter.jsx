import React, { Component } from 'react';
import '../../css/filter.css';
import { connect } from 'react-redux';
import { setMinPrice, setPrevMinPrice, setPrevMaxPrice, setMaxPrice, setPriceFilterApplyClicked } from '../../actions/price';

class Filter extends Component {
    state = {
        slots: 10,
        start: 1,
        end: 10,
        labelMode: "mid",   // mid, long
    }

    onDragOver = (e) => {
        e.preventDefault();
    }

    onDragStart = (e) => {
        let slider = e.target.dataset.slider;
        this.sliderType = slider;
        //e.dataTransfer.setData("text/plain", slider)
    }

    onDrag = (e) => {
    }


    onDrop = (e, target) => {
        //let source = e.dataTransfer.getData("text/plain");

        let source = this.sliderType;
        let slot = Number(e.target.dataset.slot);

        if (isNaN(slot)) return;

        if (source === "min") {
            if (slot >= this.state.end) return;
            this.props.setPrevMinPrice(this.state.start * 100);
            this.setState({
                start: slot
            });

            let minPrice = parseFloat(slot * 100);
            this.props.setMinPrice(minPrice);
            this.props.setPriceFilterApplyClicked(false);
        } else if (source === "max") {
            if (slot <= this.state.start) return;
            this.props.setPrevMaxPrice(this.state.end * 100);
            this.setState({
                end: slot
            });
            let maxPrice = parseFloat(slot * 100);
            this.props.setMaxPrice(maxPrice);
            this.props.setPriceFilterApplyClicked(false);
        }
        this.sliderType = null;

    }

    MinSlider = () => {
        return (
            <div data-slider="min"
                onDragStart={this.onDragStart}
                onTouchStart={this.onDragStart}
                onDrag={this.onDrag}
                draggable className="slider-thumb slider-thumb-min">
            </div>
        );
    }

    MaxSlider = () => {
        return (
            <div data-slider="max"
                onDragStart={this.onDragStart}
                onTouchStart={this.onDragStart}
                onDrag={this.onDrag}
                draggable className="slider-thumb slider-thumb-max"></div>
        );
    }

    render() {
        let scale = [];
        let slider = [];
        let currentScale = [];
        let minThumb = null;
        let maxThumb = null


        for (let i = 1; i <= this.state.slots; i++) {
            let label = "";

            scale.push(
                <div
                    key={i}
                    style={{ color: '#000' }}
                    className="slot-scale">
                    <i className={label !== '' ? 'd-inline fas fa-rupee-sign' : 'd-none'} style={{ fontSize: "11px" }}></i>{label}
                </div>
            );

            let currentLabel = "";

            if (i === this.state.start || i === this.state.end) {
                currentLabel = i * 100;
            }

            currentScale.push(
                <div
                    key={i}
                    style={{ color: '#000' }}
                    className="slot-scale">
                    <i className={currentLabel !== '' ? 'd-inline fas fa-rupee-sign' : 'd-none'} style={{ fontSize: "11px" }}></i>{currentLabel}
                </div>
            );

            if (i === this.state.start) {
                minThumb = <this.MinSlider />
            } else if (i === this.state.end) {
                maxThumb = <this.MaxSlider />
            } else {
                minThumb = null;
                maxThumb = null;
            }


            let lineClass = "line";

            if (i > this.state.start && i < this.state.end) {
                lineClass += " line-selected";
            }
            slider.push(
                <div
                    data-slot={i}
                    onDragOver={this.onDragOver}
                    onTouchMove={this.onDragOver}
                    onTouchEnd={this.onDrop}
                    onDrop={this.onDrop}
                    key={i}
                    className="slot">
                    <div data-slot={i} className={lineClass} />
                    <span className="scale-mark"></span>
                    {minThumb}
                    {maxThumb}
                </div>
            );
        }

        return (
            <div>
                <div className="filter text-center">
                    <div className="slider-container">

                        <div className="slider-scale">
                            {scale}
                        </div>

                        <div className="slider">
                            {slider}
                        </div>

                        <div className="slider-selected-scale">
                            {currentScale}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(null, { setMinPrice, setMaxPrice, setPrevMinPrice, setPrevMaxPrice, setPriceFilterApplyClicked })(Filter);