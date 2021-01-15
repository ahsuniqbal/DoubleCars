
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
  } from 'reactstrap';
  import img1 from '../../../assets/TopNewsDummy2.png'
  import img2 from '../../../assets/TopNewsDummyImage.png'
  import img3 from '../../../assets/TopNewsDummy2.png'
  import '../styles/PriceRange.css'

  const PriceRangeCards1 = () => { 
    return(
                        <Card className='main-card'>
                            <CardImg top width="100%" src={img1} alt="Card image cap" />
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
                            <CardImg top width="100%" src={img2} alt="Card image cap" />
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
                            <CardImg top width="100%" src={img3} alt="Card image cap" />
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
                            <CardImg top width="100%" src={img2} alt="Card image cap" />
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
}
