import React from 'react';
import '../../styles/Blogs.css'
import RelatedStoriesDemoimg from '../../../../assets/RelatedStoriesDemoimg.png'
import { Row, Col, Card,CardImg,CardTitle, CardSubtitle} from 'reactstrap';
const SimilarCarCell = () => {
    return(
        <Card className = "mb-4 similar-card-cell">
            <Row className = "">
                <Col md = "5">
                    <img className = "img-fluid similar-cell-card-image" src={RelatedStoriesDemoimg} alt="Card image" />
                </Col>
                <Col md = "7" className = "mt-3">
                    <CardTitle className = "similar-car-title">2019 Mercedes Benz Hybrid</CardTitle>
                    <CardSubtitle className="mb-2 similar-card-price">$32,500</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}

export default SimilarCarCell;