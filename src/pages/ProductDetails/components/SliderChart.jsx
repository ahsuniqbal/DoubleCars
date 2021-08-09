import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import '../styles/SliderChart.css';
import { AddCommaToNumber } from "../../../utils/NumberManipulation";

export default function SliderChart(props) {
  
  const minMax = props.goodDeal.carInfo.minMax;
  const goodDealRange = props.goodDeal.ranges.goodDealRange;
  const badDealRange = props.goodDeal.ranges.badDealRange;
  const price = props.price;

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
          border: '3px solid ' + thumbColor(price),
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
          background: `linear-gradient(to right, #47B959 20%, #FFA336, 20%, #FFA336 80%, #EA4335 20%);`,
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

    function getPerc(badDeal, fairDeal, goodDeal) {
      const sum = badDeal + goodDeal;
      console.log(((fairDeal/sum) * 100))
      return ((fairDeal/sum) * 100)
    }

    function thumbColor(val) {
        if (getPerc(badDealRange, val, goodDealRange) <= 20) {
            return '#47B959';
        }
        if (getPerc(badDealRange, val, goodDealRange) <= 80) {
            return '#FFA336';
        }
        if (getPerc(badDealRange, val, goodDealRange) <= 100) {
            return '#EA4335';
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
            value={getPerc(badDealRange, price, goodDealRange)}
            marks={[
              { 
                value: 0,
                label: `$${AddCommaToNumber(minMax.min)}`
              },
              {
                  value: 100,
                  label: `$${AddCommaToNumber(minMax.max)}`
              },
            ]}
            min={0}
            max={100}
        />
        </div>
    );
}
