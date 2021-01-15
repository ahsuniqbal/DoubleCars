import React from 'react';
import '../../styles/Blogs.css'
import RelatedStoriesDemoimg from '../../../../assets/RelatedStoriesDemoimg.png'
import { Label, Row, Col,Card, CardImg} from 'reactstrap';
const RelatedStoriesCell = () => {
    return(
            <Card className = "mb-4 related-car-card">
            <Row >
                <Col md = "3">
                <CardImg  className = "cell-card-image img-fluid" src={RelatedStoriesDemoimg} alt="Card image" />
                </Col>
                <Col md = "9">
                <Label className = "related-card-label">Going to purchase a car on installment? Remeber these points</Label>
                </Col>
            </Row>
            </Card>
    )
}

export default RelatedStoriesCell;