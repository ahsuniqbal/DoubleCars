import React from 'react';
import { Slider } from '@material-ui/core';


const marks = (min, max) => [
    {
      value: min,
      label: '$' + min,
    },
    {
      value: max,
      label: 'Max',
    }
];

function valueText(value) {
    return `${value}`;
}

const PriceRangeSlider = (props) => {
    return(
        <Slider 
            min={props.min}
            max={props.max}
            defaultValue={props.defaultValue}
            className="price-range-slider" 
            marks={marks(props.min, props.max)}
            valueLabelDisplay="auto"
            getAriaValueText={valueText} />
    );
};

export default PriceRangeSlider;