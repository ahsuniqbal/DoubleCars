import React from 'react';
import { Slider } from '@material-ui/core';

const RadiusSlider = (props) => {
    const handleChange = (event, newValue) => {
        props.onHandleRadius(newValue);
    };


    const handleRadiusValue = (event, newValue) => {
        props.onHandleRadiusValue(newValue);
    };

    return(
        <Slider 
            min={props.min}
            max={props.max}
            defaultValue={props.max}
            onChange={handleRadiusValue}
            onChangeCommitted={handleChange} />
    )
}

export default RadiusSlider;