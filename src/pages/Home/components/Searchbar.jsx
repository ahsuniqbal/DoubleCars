import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Card, CardBody, CardTitle, Button, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetAllMakes, GetModelFromMake } from '../api/GetRequests';
import '../styles/Searchbar.css';


function concatMakeList(makeList){
    var makeSelectBox = document.getElementById('make-list');

    for(let i = 0; i < makeList.length; i++){
        var option = makeList[i];
        makeSelectBox.options.add(new Option(option.name, option.id));
    }
}

function concatModelList(modelList){
    var modelSelectBox = document.getElementById('model-list');

    for(let i = 0; i < modelList.length; i++){
        var option = modelList[i];
        modelSelectBox.options.add(new Option(option.name, option.id));
    }
}

const Searchbar = () => {
    const history = useHistory();

    //Make and Model list fetched from Vin audit API
    const [makeList, setMakeList] = useState([]);
    const [modelList, setModelList] = useState([]);


    const Search = (e) => {
        e.preventDefault();
        var searchInput = document.getElementById('search-box').value;
        // sessionStorage.setItem('searchInput', searchInput);
        history.push({
            pathname: '/products',
            search: '?search=' + searchInput,
            page: 0
        })
    };

    const handleMake = (make) => {
        GetModelFromMake(make).then(doc => {
            setModelList(doc.makes[0].models);
        })
        .catch(error => {
            alert("Error", error.message);
        });
    };

    useEffect(() => {
        GetAllMakes().then(doc => {
            setMakeList(doc.makes);
        })
        .catch(error => {
            alert("Error", error.message);
        });
    }, []);

    return(
        <Card className="searchbar">
            <CardBody>

                <Row>
                    <Col xs="12">
                        <CardTitle>Search for your dream car
                            <Button className="advance-search" color="link" onClick={() => history.push('/products')}>Advanced Search</Button>
                        </CardTitle>
                    </Col>
                </Row>

                <Form onSubmit={(e) => Search(e)}>
                    <Row>
                        <Col xs="12" md="8" sm = "12">
                        <InputGroup>
                            <Input className="search-box" id="search-box" type="text" placeholder="Search Cars or Brand eg. Audi or Tesla " />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    <FontAwesomeIcon icon="search" size="1x" />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                            
                        </Col>

                        <Col xs="6" sm="6" md="2">
                            {
                                makeList ? 
                                <Input id="make-list" type="select" className = "condition-dropdown" onChange={(e) => handleMake(e.target.value)} >
                                    <option value="">Condition</option>
                                    {
                                        concatMakeList(makeList)
                                    }
                                </Input> : null
                            }
                        </Col>

                        <Col xs="6" sm="6" md="2">
                            <Button className = "search-button">Search</Button>
                        </Col>

                        {/* <Col xs="6" sm="4" md="2">
                            {
                                modelList ?
                                <Input id="model-list" type="select">
                                    <option value="">Model</option>
                                    {
                                        concatModelList(modelList)
                                    }
                                </Input>
                                :
                                null
                            }
                            
                        </Col> */}

                        {/* <Col xs="12" sm="4" md="2">
                            <Input type="select">
                                <option value="">Price Range</option>
                                <option value="<50"> &lt; $50</option>
                                <option value="50-100">$50 - $100</option>
                                <option value="150-200">$150 - $200</option>
                            </Input>
                        </Col> */}
                    </Row>
                </Form>
            </CardBody>
        </Card>
    );
}

export default Searchbar;