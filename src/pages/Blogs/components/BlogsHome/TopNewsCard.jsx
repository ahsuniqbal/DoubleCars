import React from 'react';
import '../../styles/TopNewsCard.css'
import { Row, Col, Card,CardImg,CardTitle, CardSubtitle} from 'reactstrap';
import TopNewsDummy2 from '../../../../assets/TopNewsDummy2.png'
import TopNewsDummy4 from '../../../../assets/TopNewsDummy4.png'
import TopNewsDummy5 from '../../../../assets/TopNewsDummy5.png'
import TopNewsDummy6 from '../../../../assets/TopNewsDummy6.png'
import {useHistory} from 'react-router-dom';

const TopNewsCard = () => {
    const history = useHistory()
    return(
        <Card className = "top-news-card" onClick={()=>history.push('/blogs')}>
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid top-news-cell-card-image"  src={TopNewsDummy2} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "top-news-title">BMW X7 LCI rendered based on latest spyshots</CardTitle>
                    <br/>
                    <CardSubtitle className="top-news-date">Dec 20, 2019</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}

const TopNewsCard1 = () => {
    const history = useHistory()
    return(
        <Card className = "top-news-card" onClick={()=>history.push('/blogs')}>
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid top-news-cell-card-image"  src={TopNewsDummy4} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "top-news-title">Video: 1,000 HP BMW M5 does 100-200 km/h in 4.28 seconds</CardTitle>
                    <br/>
                    <CardSubtitle className="top-news-date">Jan 1, 1998</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}
const TopNewsCard2 = () => {
    const history = useHistory()
    return(
        <Card className = "top-news-card" onClick={()=>history.push('/blogs')}>
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid top-news-cell-card-image"  src={TopNewsDummy5} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "top-news-title">Video: BMW M2 CS is part of Autocar’s 2020 Best Sports Cars</CardTitle>
                    <br/>
                    <CardSubtitle className="top-news-date">May 9, 2011</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}
const TopNewsCard3 = () => {
    const history = useHistory()
    return(
        <Card className = " top-news-card" onClick={()=>history.push('/blogs')}>
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid top-news-cell-card-image"  src={TopNewsDummy6} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "top-news-title">Video: BMW M8 vs Ford Shelby GT500 drag race</CardTitle>
                    <br/>
                    <CardSubtitle className="top-news-date">Feb 4, 2009</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}



export default TopNewsCard;
export {TopNewsCard1, TopNewsCard2, TopNewsCard3}