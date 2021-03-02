import React from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import '../styles/PriceRange.css';
import {PriceRangeCards1,PriceRangeCards2,PriceRangeCards3,
        PriceRangeCards4,PriceRangeCards5} 
from './PriceRangeCards'
import Grid from '@material-ui/core/Grid';


const PriceRange = () => {

    return(
        <div className="mt-3 price-range-main">

            <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
                <Grid container spacing={3}>
                    <Grid item sm={12}  md={4} lg={2} className='price-range-grid'>

                        <TabList className='price-range-tablist'>
                            <span className='price-head'>Price Range</span>
                            <Tab tabFor="vertical-tab-one" className='Items'>Under $10,000</Tab>
                            <Tab tabFor="vertical-tab-two" className='Items'>Under $20,000</Tab>
                            <Tab tabFor="vertical-tab-three" className='Items'>Under $30,000</Tab>
                            <Tab tabFor="vertical-tab-four" className='Items'>Under $40,000</Tab>
                            <Tab tabFor="vertical-tab-five" className='Items'>Under $50,000</Tab>
                        </TabList>

                    </Grid>
                    
                    <Grid item sm={12}  md={8} lg={10} className=''>
                        <TabPanel tabId="vertical-tab-one">
                           <PriceRangeCards1/>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-two">
                           <PriceRangeCards2/>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-three">
                           <PriceRangeCards3/>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-four">
                           <PriceRangeCards4/>
                        </TabPanel>
                        <TabPanel tabId="vertical-tab-five">
                          <PriceRangeCards5/>
                        </TabPanel>
                    </Grid>                       
                            
                </Grid>
            </Tabs>      
                
            
        
        </div>
    );
}

export default PriceRange;
