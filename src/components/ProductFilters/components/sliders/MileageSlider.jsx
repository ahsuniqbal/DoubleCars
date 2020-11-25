import React from 'react';
import { Slider } from '@material-ui/core';


const marks = (min, max, minLabel, maxLabel) => [
  {
    value: min,
    label: minLabel + " mi.",
  },
  {
    value: max,
    label: maxLabel + " mi.",
  }
];

const MileageSlider = (props) => {
  const handleChange = (event, mileage) => {
    props.onHandleMileage(mileage)
  }
  return(
      <Slider 
          min={props.min}
          max={props.max}
          defaultValue={props.defaultValue}
          className="price-range-slider" 
          marks={marks(props.min, props.max, props.minLabel, props.maxLabel)}
          onChange={handleChange} />
  );
};

export default MileageSlider;