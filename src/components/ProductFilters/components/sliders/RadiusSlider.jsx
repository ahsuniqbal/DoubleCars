import React from 'react';
import { Slider } from '@material-ui/core';

const RadiusSlider = (props) => {
    const handleChange = (event, newValue) => {
        props.onHandleRadius(newValue);
    };


    const marks = (min, max, minLabel, maxLabel) => [
        {
          value: min,
          label: minLabel,
        },
        {
          value: max,
          label: maxLabel,
        }
    ];

    return(
        <Slider 
            min={props.min}
            max={props.max}
            defaultValue={props.max}
            onChangeCommitted={handleChange} />
    )
}

export default RadiusSlider;