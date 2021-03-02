import React from 'react';
import '../../styles/Blogs.css'
import RelatedStoriesDemoimg from '../../../../assets/RelatedStoriesDemoimg.png'
import RelatedStoriesDemoimg1 from '../../../../assets/RelatedStoriesDemoimg1.png'
import RelatedStoriesDemoimg2 from '../../../../assets/RelatedStoriesDemoimg2.png'
import { Label, Row, Col,Card, CardImg} from 'reactstrap';
const RelatedStoriesCell = () => {
    return(
            <Card className = "mb-4 related-car-card">
            <Row >
                <Col md = "4">
                <CardImg  className = "cell-card-image img-fluid" src={RelatedStoriesDemoimg} alt="Card image" />
                </Col>
                <Col md = "8">
                <Label className = "related-card-label">Going to purchase a car on installment? Remeber these points</Label>
                </Col>
            </Row>
            </Card>
    )
}
const RelatedStoriesCell1 = () => {
    return(
            <Card className = "mb-4 related-car-card">
            <Row >
                <Col md = "4">
                <CardImg  className = "cell-card-image img-fluid" src={RelatedStoriesDemoimg1} alt="Card image" />
                </Col>
                <Col md = "8">
                <Label className = "related-card-label">10 tips how to improve mileage of your car</Label>
                </Col>
            </Row>
            </Card>
    )
}
const RelatedStoriesCell2 = () => {
    return(
            <Card className = "mb-4 related-car-card">
            <Row >
                <Col md = "4">
                <CardImg  className = "cell-card-image img-fluid" src={RelatedStoriesDemoimg2} alt="Card image" />
                </Col>
                <Col md = "8">
                <Label className = "related-card-label">Want to setup a showroom? Here is a simple guide for you</Label>
                </Col>
            </Row>
            </Card>
    )
}

export default RelatedStoriesCell;
export {RelatedStoriesCell1, RelatedStoriesCell2};