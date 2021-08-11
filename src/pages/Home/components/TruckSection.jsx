import React,{useState,useEffect} from "react"
import {Row ,Col,Badge ,Label, Container} from 'reactstrap'
import HeavyTruck from '../../../assets/MediumTruck.png';
import PickupTruck from '../../../assets/PickupTruck.png';
import FullSizeVan from '../../../assets/FullSizeVan.png';
import CargoVan from '../../../assets/CargoVan.png';


import { ChevronRight } from 'react-feather';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../styles/TruckSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { GetCommercialVehicles } from '../api/GetRequests';
import { AddCommaToNumber } from "../../../utils/NumberManipulation";
import { Link } from 'react-router-dom';

import Skeleton from '@material-ui/lab/Skeleton';

AOS.init();

const TruckSection = () => {
    const [vehicles, setVehicles] = useState(null);

    useEffect(() => {
        GetCommercialVehicles().then(doc => {
            setVehicles(doc);
        }).catch(error => {
            alert(error.message);
        })
    }, [])

 
    return (
      <div className='my-5'>
           {/* <Row>
            {
                vehicles ?  vehicles.map((vehicle, index) => {
                    return (
                        <Col key={index} data-aos="" data-aos-duration="1000" md='6' className='truck-cars-col'>
                            <LazyLoadImage className="card-img img-fluid"  effect="blur" src={vehicle.newImage ? vehicle.newImage : HeavyTruck} alt='Heavy Duty Trucks'/>
                    
                            <div className='truck-cars-div'>  
                                <span className='trucks-images-gradient'>
                                    <Badge color="primary" className = "truck-car-badge">Commercial</Badge>
                                    <Link to={`/products?bodyStyle=Pickup Truck`}>
                                        <h1 className='trucks-head'>{vehicle.category}</h1>
                                    </Link>
                                    <Label className='trucks-label'>Starting from ${AddCommaToNumber(vehicle.price) }<ChevronRight color="#ffffff" size={15} className = "truck-chevron-icon"/></Label>
                                </span> 
                            </div>
                        </Col>
                    )
                }) : 
                <Container>
                <Row className = "mt-5">
                    <Col md="6">
                        <Skeleton variant="rect" width={600} height={240} animation="wave" className = "mb-4 skeleton-feature-car-2" />
                        <Skeleton variant="rect" width={600} height={240} animation="wave" className = "skeleton-feature-car-2" />
                    </Col>
                    <Col md="6">
                        <Skeleton variant="rect" width={600} height={240} animation="wave" className = "mb-4 skeleton-feature-car-2"/>
                        <Skeleton variant="rect" width={600} height={240} animation="wave" className = "skeleton-feature-car-2"/>
                    </Col>
                    
            </Row>
        </Container>
            } 
            </Row> */}
        <Row className="trucks">
            <Col data-aos="fade-right" data-aos-duration="1000" md='6' className='truck-cars-col'
           >
            
            <LazyLoadImage className="card-img img-fluid"  effect="blur" src={HeavyTruck} alt='Heavy Duty Trucks'/>
           
                <div className='truck-cars-div'>  
                    <span className='trucks-images-gradient'>
                        {/* <Badge color="primary" className = "truck-car-badge">Commercial</Badge> */}
                        <h1 className='trucks-head'>MEDIUM TRUCKS</h1>
                        <Label className='trucks-label'>STARTING FROM <br/>$5000<ChevronRight color="#ffffff" size={15} className = "truck-chevron-icon"/></Label>
                        <h1 className = "truck-name">2022 FORD F-350</h1>
                    </span> 
                </div>
            </Col>
            <Col data-aos="fade-right" data-aos-duration="1000" md='6' className='truck-cars-col truck2'  >
            <LazyLoadImage className="card-img img-fluid"  effect="blur" src={PickupTruck} alt='Box Trucks'/>
                <div className='truck-cars-div'>   
                    <span className='trucks-images-gradient'>
                        {/* <Badge color="primary" className = "truck-car-badge">Commercial</Badge> */}
                        <h1 className='trucks-head'>PICK UP TRUCKS</h1>
                        <Label className='trucks-label'>STARTING FROM <br/>$5000<ChevronRight color="#ffffff" size={15} className = "truck-chevron-icon"/></Label>
                        <h1 className = "truck-name">2021 SILVERADO</h1>
                    </span>
                </div>
            </Col>
        </Row>

        <Row className="trucks">
            <Col data-aos="fade-right" data-aos-duration="1000" md='6' className='truck-cars-col'>
            <LazyLoadImage className="card-img img-fluid"  effect="blur" src={FullSizeVan} alt='Fork Lifter'/>
            
                <div className='truck-cars-div'>   
                    <span className='trucks-images-gradient'>
                    
                        {/* <Badge color="primary" className = "truck-car-badge">Commercial</Badge> */}
                        <h1 className='trucks-head'>FULL SIZE VANS</h1>
                        <Label className='trucks-label'>STARTING FROM <br/>$5000<ChevronRight color="#ffffff" size={15} className = "truck-chevron-icon"/></Label>
                        <h1 className = "truck-name">2021 ODYSSEY</h1>
                    </span>
                </div>
            </Col>
            <Col data-aos="fade-right" data-aos-duration="1000" md='6' className='truck-cars-col'>
            <LazyLoadImage className="card-img img-fluid"  effect="blur" src={CargoVan} alt='Work Van'/>
                <div className='truck-cars-div'>   
                    <span className='trucks-images-gradient'>
                        {/* <Badge color="primary" className = "truck-car-badge">Commercial</Badge> */}
                        <h1 className='trucks-head'>CARGO VANS</h1>
                        <Label className='trucks-label'>STARTING FROM <br/>$5000<ChevronRight color="#ffffff" size={15} className = "truck-chevron-icon"/></Label>
                        <h1 className = "truck-name">2022 NV200</h1>
                    </span>
                </div>
            </Col>
        </Row>
      </div>
    );
  }
  
  export default TruckSection;
