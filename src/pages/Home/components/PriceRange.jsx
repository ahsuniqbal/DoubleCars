import React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
  } from 'reactstrap';
import '../styles/PriceRange.css';
import {PriceRangeCards1,PriceRangeCards2,PriceRangeCards3,
    PriceRangeCards4} from './PriceRangeCards'
 
import Grid from '@material-ui/core/Grid';

const PriceRange = () => {
 

    return(
        <div className="mt-2">

            <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
                <Grid container spacing={3}>
                    <Grid item sm={12}  md={4} lg={2} className='price-range-grid'>

                        <TabList>
                            <span className='price-head'>Price Range</span>
                            <Tab tabFor="vertical-tab-one" className='Items'>$10000</Tab>
                            <Tab tabFor="vertical-tab-two" className='Items'>$20000</Tab>
                            <Tab tabFor="vertical-tab-three" className='Items'>$30000</Tab>
                            <Tab tabFor="vertical-tab-four" className='Items'>$40000</Tab>
                            <Tab tabFor="vertical-tab-five" className='Items'>$50000</Tab>
                        </TabList>

                    </Grid>
                    
                    <Grid item sm={12}  md={8} lg={10}>
                        <TabPanel tabId="vertical-tab-one">
                            <Grid container >
                                 
                                        <Grid item md={3} >
                                                <PriceRangeCards1/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards2/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards1/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards4/>
                                        </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-two">
                            <Grid container >
                                 
                                        <Grid item md={3} >
                                                <PriceRangeCards4/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards2/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards1/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards4/>
                                        </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-three">
                            <Grid container >
                                 
                                        <Grid item md={3} >
                                                <PriceRangeCards2/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards3/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards4/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards3/>
                                        </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-four">
                            <Grid container >
                                 
                                        <Grid item md={3} >
                                                <PriceRangeCards2/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards2/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards2/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards4/>
                                        </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-five">
                            <Grid container >
                                 
                                        <Grid item md={3} >
                                                <PriceRangeCards4/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards3/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards4/>
                                        </Grid>
                                        <Grid item md={3}>
                                                <PriceRangeCards1/>
                                        </Grid>
                            </Grid>
                        </TabPanel>
                    </Grid>                       
                            
                </Grid>
            </Tabs>      
                
            
        
        </div>
    );
}

export default PriceRange;
{/* <TabPanel tabId="vertical-tab-two">
<Grid item md={3} >
        <PriceRangeCards1/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards2/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards1/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards4/>
</Grid>
</TabPanel>

<TabPanel tabId="vertical-tab-three">
<Grid item md={3} >
        <PriceRangeCards3/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards2/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards1/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards4/>
</Grid>
</TabPanel>

<TabPanel tabId="vertical-tab-four">
<Grid item md={3} >
        <PriceRangeCards4/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards1/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards1/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards2/>
</Grid>
</TabPanel>

<TabPanel tabId="vertical-tab-five">
<Grid item md={3} >
        <PriceRangeCards2/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards2/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards2/>
</Grid>
<Grid item md={3}>
        <PriceRangeCards2/>
</Grid>
</TabPanel> */}