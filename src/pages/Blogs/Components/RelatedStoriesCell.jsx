import React from 'react';
import '../styles/Blogs.css'
import RelatedStoriesDemoimg from '../../../assets/RelatedStoriesDemoimg.png'
import { Label, Row, Col, CardBody,Card, CardImg} from 'reactstrap';
const RelatedStoriesCell = () => {
    return(
            <Card className = "mb-4">
            <Row >
                <Col md = "3">
                <CardImg  className = "cell-card-image img-fluid" src={RelatedStoriesDemoimg} alt="Card image" />
                </Col>
                <Col md = "9">
                <Label className = "">Going to purchase a car on installment? Remeber these points</Label>
                </Col>
            </Row>
            </Card>
    )
}

export default RelatedStoriesCell;