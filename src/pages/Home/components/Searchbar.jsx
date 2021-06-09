import React from 'react';
import { Row, Col, Input, Card, CardBody, CardTitle, Button, InputGroup, InputGroupAddon, InputGroupText, Form } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search } from 'react-feather';
import '../styles/Searchbar.css';
import SearchBoxSearchIcon from '../../../assets/SearchBoxSearchIcon.svg'

// function concatMakeList(makeList){
//     var makeSelectBox = document.getElementById('make-list');

//     for(let i = 0; i < makeList.length; i++){
//         var option = makeList[i];
//         makeSelectBox.options.add(new Option(option.name, option.id));
//     }
// }

// function concatModelList(modelList){
//     var modelSelectBox = document.getElementById('model-list');

//     for(let i = 0; i < modelList.length; i++){
//         var option = modelList[i];
//         modelSelectBox.options.add(new Option(option.name, option.id));
//     }
// }

const Searchbar = () => {
    const history = useHistory();

    // //Make and Model list fetched from Vin audit API
    // const [makeList, setMakeList] = useState([]);
    // const [modelList, setModelList] = useState([]);


    const Search = (e) => {
        e.preventDefault();
        var searchInput = document.getElementById('search-box').value;
        var condition = document.getElementById('condition').value;

        sessionStorage.setItem('searchInput', searchInput);
        history.push({
            pathname: '/products',
            search: '?search=' + searchInput + '&isUsed=' + condition,
        })
    };

    // const handleMake = (make) => {
    //     GetModelFromMake(make).then(doc => {
    //         setModelList(doc.makes[0].models);
    //     })
    //     .catch(error => {
    //         alert(error.message);
    //     });
    // };

    // useEffect(() => {
    //     GetAllMakes().then(doc => {
    //         setMakeList(doc.makes);
    //     })
    //     .catch(error => {
    //         alert(error.message);
    //     });
    // }, []);

    return(
        <div className="searchbar-container">
        <Card className="searchbar">
            <CardBody>

                <Row>
                    <Col xs="12" style={{marginTop:'10px', marginBottom: '4px' }} >
                        <CardTitle>Search for your dream car
                            <Button className="advance-search" color="link" onClick={() => history.push('/products')}>Advanced Search</Button>
                        </CardTitle>
                    </Col>
                </Row>
 
                <Form onSubmit={(e) => Search(e)}>
                    <Row>
                        <Col xs="12" md="8" sm = "12" className='my-1'>
                        <InputGroup>
                            <Input required className="search-search-box" id="search-box" type="text" placeholder="Search for Cars or Models. eg 2019 Toyota Camry" />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>
                                    {/* <FontAwesomeIcon icon="search" size="1x" /> */}
                                    <img src = {SearchBoxSearchIcon} className = "img-fluid"/>
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                            
                        </Col>
                       
                            <Col xs="12" sm="6" md="2" className='search-bar-padding my-1' >
                                {/* <Input id="make-list" type="select" className = "condition-dropdown">
                                    <option value="" hidden selected>Condition</option>
                                    <option value={false}>New</option>
                                    <option value={true}>Used</option>
                                </Input> */}
                                <Input id="condition" type="select" required className="condition-dropdown">
                                <option value="" disabled selected>Condition</option>
                                <option value="false">New</option>
                                <option value="true">Used</option>
                                </Input>
                            </Col>

                            <Col xs="12" sm="6" md="2" className='search-coloumn my-1'>
                                <Button type="submit" className = "search-button">Search</Button>
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
        </div>
    );
}

export default Searchbar;