import React from 'react';
import '../styles/Blogs.css'

import RelatedStoriesDemoimg from '../../../assets/RelatedStoriesDemoimg.png'
import { Label, Row, Col, Card,CardImg,CardTitle, CardSubtitle} from 'reactstrap';
const SimilarCarCell = () => {
    return(
        <Card className = "mb-4">
            <Row>
                <Col md = "3">
                    <CardImg className = "img-fluid cell-card-image" src={RelatedStoriesDemoimg} alt="Card image" />
                </Col>
                <Col md = "9">
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle className="mb-2">Card subtitle</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}

export default SimilarCarCell;