import React from 'react';
import { Slider } from '@material-ui/core';


const marks = (min, max, minLabel, maxLabel) => [
  {
    value: min,
    label: '$' + minLabel,
  },
  {
    value: max,
    label: '$' + maxLabel,
  }
];

const PriceRangeSlider = (props) => {
  const handleChange = (event, price) => {
    props.onHandlePrice(price)
  }

  const handlePriceChange = (e, price) => {
    props.onHandlePriceChange(price)
  }

  return(
    <Slider 
      min={props.min}
      max={props.max}
      step={props.step}
      defaultValue={props.defaultValue}
      className="price-range-slider" 
      marks={marks(props.min, props.max, props.minLabel, props.maxLabel)}
      onChangeCommitted={handleChange} 
      onChange={handlePriceChange}
    />
  );
};

export default PriceRangeSlider;