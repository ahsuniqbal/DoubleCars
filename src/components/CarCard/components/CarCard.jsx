import React from 'react';
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Cover from '../../../assets/DummyCarCard.png';
import '../styles/CarCard.css'

const CarCard = () => {
  return (
    <div className = "car-image"> 
       {/* <Row>
                <Col md = "4" lg="3"> */}
                    <Card className = "card mb-3">
                        <CardImg src={Cover} alt="Card image cap car-card" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                                <Button>Button</Button>
                            </CardBody>
                    </Card>
                {/* </Col>
                <Col md = "4" lg="3"> */}
                    {/* <Card>
                        <CardImg src={Cover} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                    </Card> */}
                {/* </Col>
            </Row>  */}
    </div>
  );
}

export default CarCard;
