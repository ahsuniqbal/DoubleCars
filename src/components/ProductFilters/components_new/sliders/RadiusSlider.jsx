import React from 'react';
import { Slider } from '@material-ui/core';

const RadiusSlider = (props) => {
    return(
        <Slider 
            min={props.min}
            max={props.max}
        />
    )
}

export default RadiusSlider;