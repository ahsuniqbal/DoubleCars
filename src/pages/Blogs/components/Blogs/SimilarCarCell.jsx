import React from 'react';
import '../../styles/Blogs.css'
import RelatedStoriesDemoimg from '../../../../assets/RelatedStoriesDemoimg.png'
import { Row, Col, Card,CardImg,CardTitle, CardSubtitle} from 'reactstrap';
const SimilarCarCell = () => {
    return(
        <Card className = "mb-4">
            <Row className = "">
                <Col md = "3">
                    <CardImg className = "img-fluid cell-card-image" src={RelatedStoriesDemoimg} alt="Card image" />
                </Col>
                <Col md = "9">
                    <CardTitle className = "similar-car-title">2019 Mercedes Benz Hybrid</CardTitle>
                    <CardSubtitle className="mb-2 similar-card-price">$32,500</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}

export default SimilarCarCell;