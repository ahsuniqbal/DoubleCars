import React from 'react';
import '../../styles/MostPopularCard.css'
import { Row, Col, Card,CardImg,CardTitle} from 'reactstrap';
import Mp1 from '../../../../assets/Mp1.png'
import Mp2 from '../../../../assets/Mp2.png'
import Mp3 from '../../../../assets/Mp3.png'
import Mp4 from '../../../../assets/Mp4.png'


const MostPopularCard = () => {
    return(
        <Card className = "most-popular-card">
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid mp-cell-card-image" src={Mp1} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "most-popular-title">Is High Octane Gas Really Needed? See What Experts Say</CardTitle>
                </Col>
            </Row>
      </Card>
        
    )
}



const MostPopularCard1 = () => {
    return(
        <Card className = "most-popular-card">
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid mp-cell-card-image" src={Mp2} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "most-popular-title">What's Not Too Big or Small, but Just Right? </CardTitle>
                </Col>
            </Row>
      </Card>
        
    )
}


const MostPopularCard2 = () => {
    return(
        <Card className = "most-popular-card">
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid mp-cell-card-image" src={Mp3} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "most-popular-title">Want to Setup a Showroom? Here is a Simple Guide for You</CardTitle>
                </Col>
            </Row>
      </Card>
        
    )
}

const MostPopularCard3 = () => {
    return(
        <Card className = "most-popular-card">
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid mp-cell-card-image" src={Mp4} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "most-popular-title">10 Tips How to Improve Mileage of Your Car</CardTitle>
                </Col>
            </Row>
      </Card>
        
    )
}
export default MostPopularCard;
export {MostPopularCard1, MostPopularCard2, MostPopularCard3}