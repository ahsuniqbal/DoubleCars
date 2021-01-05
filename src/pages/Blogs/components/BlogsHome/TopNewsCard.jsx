import React from 'react';
import '../../styles/TopNewsCard.css'
import { Row, Col, Card,CardImg,CardTitle, CardSubtitle} from 'reactstrap';
import TopNewsDummy2 from '../../../../assets/TopNewsDummy2.png'
const TopNewsCard = () => {
    return(
        <Card className = "mb-4 top-news-card">
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid cell-card-image"  src={TopNewsDummy2} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "top-news-title">BMW X7 LCI rendered based on latest spyshots</CardTitle>
                    <br/>
                    <CardSubtitle className="mb-2 top-news-date">Dec 15, 2020</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}

export default TopNewsCard;