
import React, { useEffect, useState } from 'react';
import {Card, Col,Row, CardBody, CardFooter} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/CarsLogo.css';

import { GetPopularMakes } from '../api/GetRequests';


// New logos
import subaru from '../../../assets/logos/subaru-logo.png';
import mitsubishi from '../../../assets/logos/mitsubishi-logo.png'
import volkswagen from '../../../assets/logos/volkswagen-logo.png'
import ford from '../../../assets/logos/ford-logo.png'
import toyota from '../../../assets/logos/toyota-logo.png'
import chevrolet from '../../../assets/logos/chevrolet-logo.png'
import honda from '../../../assets/logos/honda-logo.png'
import bmw from '../../../assets/logos/bmw-logo.png'
import mercedes from '../../../assets/logos/mercedes-logo.png'
import audi from '../../../assets/logos/audi-logo.png'
import lexus from '../../../assets/logos/lexus-logo.png'
import acura from '../../../assets/logos/acura-logo.png'
import nissan from '../../../assets/logos/nissan-logo.png'
import tesla from '../../../assets/logos/tesla-logo.png'
import dodge from '../../../assets/logos/dodge-logo.png'
import volvo from '../../../assets/logos/volvo-logo.png'
import porsche from '../../../assets/logos/porsche-logo.png'
import landrover from '../../../assets/logos/landrover-logo.png'



import { ChevronRight } from 'react-feather';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CarsLogo = () => { 
    const [popularMakes, setPopularMakes] = useState(null);
    
    useEffect(() => {
        GetPopularMakes().then(doc => {
            setPopularMakes(doc);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const logos = [
        { img: subaru, name: 'Subaru' },
        { img: mitsubishi, name: 'Mitsubishi' },
        { img: volkswagen, name: 'volkswagen' },
        { img: ford, name: 'FORD' },
        { img: toyota, name: 'Toyota' },
        { img: chevrolet, name: 'Chevrolet' },
        { img: honda, name: 'Honda' },
        { img: bmw, name: 'BMW' },
        { img: mercedes, name: 'Mercedes' },
        { img: audi, name: 'Audi' },
        { img: lexus, name: 'Lexus' },
        { img: acura, name: 'Acura' },
        { img: nissan, name: 'Nissan' },
        { img: tesla, name: 'Tesla' },
        { img: dodge, name: 'Dodge' },
        { img: volvo, name: 'Volvo' },
        { img: porsche, name: 'Porsche' },
        { img: landrover, name: 'Landrover' },
    ]


    const getCount = (strToSearch) => {
        for (let i = 0; i < popularMakes.length; i++) {
            if (popularMakes[i].carMake === strToSearch) {
                return popularMakes[i].count;
            }
        }
    }

    return(
           <div style={{padding:'5% 0%'}}>
               <Row className='popular-make' > 
                   <Col md='12' xs='12' className='card-main-head text-center'>
                       <h2 className='carslogo-head'>Popular Make</h2>
                       <p className='carslogo-text'>Download app and upload your car in few steps</p>
                   </Col>
                </Row>


                <Row className="popular-makes-logos">
                    {
                        popularMakes && logos.map((logo, index) => {
                            return <Col xs="6" sm="6" md="12" lg="2" style={window.screen.width < 768 && { paddingLeft: '8px', paddingRight: '8px' } } className="md-my-3 my-2" key={index}>
                                <Card>
                                    <CardBody>
                                        <LazyLoadImage effect="blur" src={logo.img} className='img-fluid mx-auto'/>
                                    </CardBody>
                                    <CardFooter>
                                        <Link>{getCount(logo.name) ? getCount(logo.name) : "76"} Listings<ChevronRight color="#1C67CE" size={15} /></Link>
                                    </CardFooter>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
           </div> 
    )
  
}

export default CarsLogo;