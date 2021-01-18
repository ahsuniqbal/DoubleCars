import React,{useState,useEffect} from 'react';
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import '../styles/PriceRange.css';
import {PriceRangeCards1,PriceRangeCards2,PriceRangeCards3,PriceRangeCards4} from './PriceRangeCards'
import Grid from '@material-ui/core/Grid';
import {GetFilteredPriceList} from '../api/GetRequests'
import { isLogin, getLogin } from '../../../config/LoginAuth'
const PriceRange = () => {

        const [priceList ,setList]=useState(null)
        useEffect(() => {
                GetFilteredPriceList(isLogin() ? getLogin() : -1).then(doc => {
                    setList(doc)
                     
                })
                .catch(error => {
                    alert(error.message);
                });
            }, []);

    return(
        <div className="mt-3 price-range-main">

            <Tabs defaultTab="vertical-tab-one" vertical className="vertical-tabs">
                <Grid container spacing={3}>
                    <Grid item sm={12}  md={4} lg={2} className='price-range-grid'>

                        <TabList>
                            <span className='price-head'>Price Range</span>
                            <Tab tabFor="vertical-tab-one" className='Items'>Under $10000</Tab>
                            <Tab tabFor="vertical-tab-two" className='Items'>Under $20000</Tab>
                            <Tab tabFor="vertical-tab-three" className='Items'>Under $30000</Tab>
                            <Tab tabFor="vertical-tab-four" className='Items'>Under $40000</Tab>
                            <Tab tabFor="vertical-tab-five" className='Items'>Under $50000</Tab>
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
