
import React from 'react';
import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
  import img1 from '../../../assets/TopNewsDummy2.png'
  import img2 from '../../../assets/TopNewsDummyImage.png'
  import img3 from '../../../assets/LC1.png'
  import img4 from '../../../assets/TopNewsDummy4.png'
  import img5 from '../../../assets/TopNewsDummy5.png'
  import img6 from '../../../assets/TopNewsDummy6.png'
  import img7 from '../../../assets/TopNewsDummyImage.png'
  import img8 from '../../../assets/DemoCar3.png'
  import img9 from '../../../assets/DemoCar2.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
  import '../styles/PriceRange.css'

  const PriceRangeCards1 = () => { 
    return(
                        <Card className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img1} /> 
                            {/* <CardImg top width="100%" src={img1} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$9,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
const PriceRangeCards2 = () => { 
    return(
                        <Card  className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img2} /> 
                            {/* <CardImg top width="100%" src={img2} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$18,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
const PriceRangeCards3 = () => { 
    return(
                        <Card  className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img3}/> 
                            {/* <CardImg top width="100%" src={img3} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$25,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
const PriceRangeCards4 = () => { 
    return(
                        <Card  className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img4} /> 
                            {/* <CardImg top width="100%" src={img2} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
const PriceRangeCards5 = () => { 
    return(
                        <Card  className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img5} /> 
                            {/* <CardImg top width="100%" src={img2} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
const PriceRangeCards6 = () => { 
    return(
                        <Card  className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img6} /> 
                            {/* <CardImg top width="100%" src={img2} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
const PriceRangeCards7 = () => { 
    return(
                        <Card  className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img7} /> 
                            {/* <CardImg top width="100%" src={img2} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
const PriceRangeCards8 = () => { 
    return(
                        <Card  className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img8} /> 
                            {/* <CardImg top width="100%" src={img2} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
const PriceRangeCards9 = () => { 
    return(
                        <Card  className='main-card'>
                            <LazyLoadImage width="100%" alt="demo-image" effect="blur" src={img9} /> 
                            {/* <CardImg top width="100%" src={img2} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle className='head'>2019 Mercedes Benz Hybrid</CardTitle>
                            <CardSubtitle className="sub-head mb-2">19,850 mileage - california</CardSubtitle>
                            <CardText className='price'>$32,500</CardText>
                            </CardBody>
                         </Card>
    )
  
}
export{
    PriceRangeCards1,
    PriceRangeCards2,
    PriceRangeCards3,
    PriceRangeCards4,
    PriceRangeCards5,
    PriceRangeCards6,
    PriceRangeCards7,
    PriceRangeCards8,
    PriceRangeCards9
}
