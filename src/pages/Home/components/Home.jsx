import React from 'react';
import Cover from '../../../assets/DummyCarCard.png'
import Footer from '../../../components/Footer/components/Footer'
import { NavLink } from "react-router-dom";
import PopularMake from './PopularMake';
import SearchBox from './SearchBox';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';
import Header from './Header';
const Home = () => {
    return(
        <div>
            <Row>
                <Col md = "4" lg="3">
                    <Card>
                        <CardImg src={Cover} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                    </Card>
                </Col>
                <Col md = "4" lg="3">
                    <Card>
                        <CardImg src={Cover} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                    </Card>
                </Col>
            </Row>
<Header/>
            <PopularMake/>
      
        </div>
    )
}

export default Home;