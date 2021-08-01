import React, { useState,useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import '../styles/SliderChart.css';

export default function SliderChart(props) {
    const [value, setValue] = useState(30);

    useEffect(() => {
      console.log("GOODEAL",props.goodDeal)
    },[])

    const useStyles = makeStyles(theme => ({
        root: {
          width: 300,
          float: 'right'
        },
        margin: {
          height: theme.spacing(3)
        },
        thumb: {
          background: "white",
          marginTop: '-3px',
          border: '3px solid ' + thumbColor(props.goodDeal.ranges.fairDeal),
          '&:focus, &:hover, &$active': {
            boxShadow: 'none',
          },
        },
        mark: {
          background: "transparent"
        },
        markLabel: {
            fontSize: '12px',
            color: 'rgba(0, 0, 0, 0.65);'
        },
        rail: {
          background: "linear-gradient(to right, #47B959  20%, #FFA336, 20%, #FFA336 80%, #EA4335 20%);",
          height: '6px;',
          opacity: 1,
          borderRadius: '6px'
        },
        track: {
          background: "transparent"
        },
        valueLabel: {
          "&>*": {
            background: "black"
          }
        }
    }));
  
    const classes = useStyles();
    

    function thumbColor(val) {
      return '#FFA336'
        if (val <= 20) {
            return '#EA4335';
        }
        if (val <= 80) {
            return '#FFA336';
        }
        if (val <= 100) {
            return '#47B959';
        }
    }

    return (
        <div className={classes.root}>
        <Slider
            classes={{
                thumb: classes.thumb,
                rail: classes.rail,
                track: classes.track,
                valueLabel: classes.valueLabel,
                mark: classes.mark,
                markLabel: classes.markLabel
            }}
            value={props.goodDeal.ranges.fairDeal}
            step={10}
            marks={[
              { 
                value: props.goodDeal.ranges.goodDealRange,
                label: `$${props.goodDeal.ranges.goodDealRange}`
              },
              { 
                value: props.goodDeal.ranges.fairDeal,
                label: `$${props.goodDeal.ranges.fairDeal}`
              },
              
              {
                  value: props.goodDeal.ranges.badDealRange,
                  label: `$${props.goodDeal.ranges.badDealRange}`
              },
                
                
                
            ]}
            min={props.goodDeal.ranges.badDealRange}
            max={props.goodDeal.ranges.goodDealRange}
        />
        </div>
    );
}
