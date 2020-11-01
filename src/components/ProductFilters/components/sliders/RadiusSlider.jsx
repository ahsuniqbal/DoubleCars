import React from 'react';
import { Slider } from '@material-ui/core';

const RadiusSlider = (props) => {
    const handleChange = (event, newValue) => {
        props.onHandleRadius(newValue);
    };

    return(
        <Slider 
            min={props.min}
            max={props.max}
            onChange={handleChange} />
    )
}

export default RadiusSlider;