import React from 'react';
import '../styles/Blogs.css'
import RelatedStoriesDemoimg from '../../../assets/RelatedStoriesDemoimg.png'
import { Label, Row, Col} from 'reactstrap';
const RelatedStoriesCell = () => {
    return(
            <Row>
                <Col md = "3">
                    <img src = {RelatedStoriesDemoimg} className = "relatedImage img-fluid" alt = "RelatedStories"/>
                </Col>

                <Col md = "9">
                    <Label>Going to purchase a car on installment? Remeber these points</Label>
                </Col>
            </Row>
       
    )
}

export default RelatedStoriesCell;