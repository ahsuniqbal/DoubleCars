import React from 'react';
import { Slider } from '@material-ui/core';

const MileageSlider = (props) => {
    const handleChange = (event, newValue) => {
        props.onHandleMileage(newValue)
    }
    return(
        <Slider 
            min={props.min}
            max={props.max}
            onChange={handleChange}/>
    );
};

export default MileageSlider;