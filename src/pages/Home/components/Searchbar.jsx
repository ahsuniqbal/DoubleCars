import React from 'react';
import { Row, Col, Input, Card, CardBody, CardTitle, Button, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Searchbar.css';

const Searchbar = () => {
    const history = useHistory();

    const Search = (e) => {
        e.preventDefault();
        var searchInput = document.getElementById('search-box').value;
        // sessionStorage.setItem('searchInput', searchInput);
        history.push({
            pathname: '/products',
            search: '?search='+searchInput,
        })
    }
    return(
        <Card className="searchbar">
            <CardBody>

                <Row>
                    <Col xs="12">
                        <CardTitle>Search for your dream car
                            <Button color="link">Advanced Search</Button>
                        </CardTitle>
                    </Col>
                </Row>

                <Form onSubmit={(e) => Search(e)}>
                    <Row>
                        <Col xs="12" md="6">
                        <InputGroup>
                            <Input className="search-box" id="search-box" type="text" placeholder="Search a car..." />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <FontAwesomeIcon icon="search" size="md" />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                            
                        </Col>

                        <Col xs="6" sm="4" md="2">
                            <Input type="select">
                                <option value="">Make</option>
                            </Input>
                        </Col>

                        <Col xs="6" sm="4" md="2">
                            <Input type="select">
                                <option value="">Model</option>
                            </Input>
                        </Col>

                        <Col xs="12" sm="4" md="2">
                            <Input type="select">
                                <option value="">Price Range</option>
                                <option value="<50"> &lt; $50</option>
                                <option value="50-100">$50 - $100</option>
                                <option value="150-200">$150 - $200</option>
                            </Input>
                        </Col>
                    </Row>
                </Form>
            </CardBody>
        </Card>
    );
}

export default Searchbar;