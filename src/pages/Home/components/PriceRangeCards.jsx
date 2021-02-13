
import React,{useState,useEffect} from 'react';
import {Card, CardText, CardBody,CardTitle, CardSubtitle,Row,Col} from 'reactstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {GetFilteredPriceList} from '../api/GetRequests';
import { isLogin, getLogin } from '../../../config/LoginAuth';
import Grid from '@material-ui/core/Grid';
import '../styles/PriceRange.css'

// price<10000 component
const PriceRangeCards1 = () => { 

    const [priceList ,setList]=useState(null)
    useEffect(() => {
            GetFilteredPriceList(10000).then(doc => {
                setList(doc)
                console.log('filter res***',doc)
            })
            .catch(error => {
                alert(error.message);
            });
        }, []);

        // set value of those cars that have price<10000
        if(priceList){
            var filterPrice1 = priceList.filter(function (e) {
                return e.price < 10000;
            })          
        }
    
    return(
        <div className='price-filter-grid'>
            <Grid container >
                {filterPrice1 && filterPrice1.map((items,index)=>{
                    return(
                        <Grid item md={3} >
                            <Card className='main-card'>
                                <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={items.coverPic} className='filter-price-image' /> 
                                <CardBody>
                                <CardTitle className='head'>{items.carName}</CardTitle>
                                <CardSubtitle className="sub-head mb-2">{items.mileage} - california</CardSubtitle>
                                <CardText className='price'>{`${items.currency} ${ items.price}`}</CardText>
                                </CardBody>
                            </Card>
                        </Grid>
                        )
                    })}
            </Grid>
        </div>
                       
    )
  
}

// price<20000 component
const PriceRangeCards2 = () => { 

    const [priceList ,setList]=useState(null)
    useEffect(() => {
            GetFilteredPriceList(20000).then(doc => {
                setList(doc)
            })
            .catch(error => {
                alert(error.message);
            });
        }, []);

        // set value of those cars that have price<20000
        if(priceList){
            var filterPrice2 = priceList.filter(function (e) {
                return  e.price < 20000;
            })          
        }

    return(
        <div>
            <Grid container >
                {filterPrice2 && filterPrice2.map((items,index)=>{
                    return(
                        <Grid item md={3} >
                            <Card className='main-card'>
                                <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={items.coverPic} className='filter-price-image' /> 
                                <CardBody>
                                <CardTitle className='head'>{items.carName}</CardTitle>
                                <CardSubtitle className="sub-head mb-2">{items.mileage} - california</CardSubtitle>
                                <CardText className='price'>{items.currency + " " + items.price}</CardText>
                                </CardBody>
                            </Card>
                        </Grid>
                        )
                    })}
            </Grid>
        </div>
                       
    )
  
}

// price<30000 component
const PriceRangeCards3 = () => { 

    const [priceList ,setList]=useState(null)
    useEffect(() => {
            GetFilteredPriceList(30000).then(doc => {
                setList(doc)
            })
            .catch(error => {
                alert(error.message);
            });
        }, []);

        // set value of those cars that have price<30000
        if(priceList){
            var filterPrice3 = priceList.filter(function (e) {
                return  e.price < 30000;
            })          
        }

    return(
        <div>
            <Grid container >
                {filterPrice3 && filterPrice3.map((items,index)=>{
                    return(
                        <Grid item md={3} >
                            <Card className='main-card'>
                                <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={items.coverPic} className='filter-price-image' /> 
                                <CardBody>
                                <CardTitle className='head'>{items.carName}</CardTitle>
                                <CardSubtitle className="sub-head mb-2">{items.mileage} - california</CardSubtitle>
                                <CardText className='price'>{items.currency + items.price}</CardText>
                                </CardBody>
                            </Card>
                        </Grid>
                        )
                    })}
            </Grid>
        </div>
                       
    )
  
}

// price<40000 component
const PriceRangeCards4 = () => { 

    const [priceList ,setList]=useState(null)
    useEffect(() => {
            GetFilteredPriceList(40000).then(doc => {
                setList(doc)
            })
            .catch(error => {
                alert(error.message);
            });
        }, []);

        // set value of those cars that have price<40000
        if(priceList){
            var filterPrice4 = priceList.filter(function (e) {
                return e.price < 40000;
            })          
        }

    return(
        <div>
            <Grid container >
                {filterPrice4 && filterPrice4.map((items,index)=>{
                    return(
                        <Grid item md={3} >
                            <Card className='main-card'>
                                <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={items.coverPic} className='filter-price-image' /> 
                                <CardBody>
                                <CardTitle className='head'>{items.carName}</CardTitle>
                                <CardSubtitle className="sub-head mb-2">{items.mileage} - california</CardSubtitle>
                                <CardText className='price'>{items.currency + items.price}</CardText>
                                </CardBody>
                            </Card>
                        </Grid>
                        )
                    })}
            </Grid>
        </div>
                       
    )
  
}

// price<50000 component
const PriceRangeCards5 = () => { 

    const [priceList ,setList]=useState(null)
    useEffect(() => {
            GetFilteredPriceList(50000).then(doc => {
                setList(doc)
            })
            .catch(error => {
                alert(error.message);
            });
        }, []);

        // set value of those cars that have price<50000
        if(priceList){
            var filterPrice5 = priceList.filter(function (e) {
                return e.price < 50000 ;
            })          
        }

    return(
        <div>
            <Grid container >
                {filterPrice5 && filterPrice5.map((items,index)=>{
                    return(
                        <Grid item md={3} >
                            <Card className='main-card'>
                                <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={items.coverPic} className='filter-price-image' /> 
                                <CardBody>
                                <CardTitle className='head'>{items.carName}</CardTitle>
                                <CardSubtitle className="sub-head mb-2">{items.mileage} - california</CardSubtitle>
                                <CardText className='price'>{items.currency + items.price}</CardText>
                                </CardBody>
                            </Card>
                        </Grid>
                        )
                    })}
            </Grid>
        </div>
                       
    )
  
}
// const PriceRangeCards2 = () => { 
//     return(
//                         <Card  className='main-card'>
//                             <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img2} /> 
//                             <CardBody>
//                             <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
//                             <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
//                             <CardText className='price'>$18,500</CardText>
//                             </CardBody>
//                          </Card>
//     )
  
// }

export{
    PriceRangeCards1,
    PriceRangeCards2,
    PriceRangeCards3,
    PriceRangeCards4,
    PriceRangeCards5,
}
