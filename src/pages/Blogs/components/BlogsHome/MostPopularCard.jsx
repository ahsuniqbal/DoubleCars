import React from 'react';
import '../../styles/MostPopularCard.css'
import { Row, Col, Card,CardImg,CardTitle, CardSubtitle} from 'reactstrap';
import TopNewsDummy2 from '../../../../assets/TopNewsDummy2.png'

const MostPopularCard = () => {
    return(
        <Card className = "most-popular-card">
            <Row className = "">
                <Col md = "4">
                    <CardImg className = "img-fluid cell-card-image" src={TopNewsDummy2} alt="Card image" />
                </Col>
                <Col md = "8">
                    <CardTitle className = "most-popular-title">Is High Octane Gas Really Needed? See What Experts Say</CardTitle>
                </Col>
            </Row>
      </Card>
        
    )
}

export default MostPopularCard;