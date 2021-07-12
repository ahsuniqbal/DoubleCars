import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import '../styles/SliderChart.css';

export default function SliderChart() {
    const [value, setValue] = useState(30);

    const useStyles = makeStyles(theme => ({
        root: {
          width: 200,
          float: 'right'
        },
        margin: {
          height: theme.spacing(3)
        },
        thumb: {
          background: "white",
          marginTop: '-3px',
          border: '3px solid ' + thumbColor(value),
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
          background: "linear-gradient(to right, #EA4335 20%, #FFA336, 20%, #FFA336 80%, #47B959 20%);",
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
            value={value}
            step={10}
            marks={[
                {
                    value: 0,
                    label: '$12,000'
                },
                {
                    value: 100,
                    label: '$16,000'
                },
            ]}
            min={0}
            max={100}
        />
        </div>
    );
}
