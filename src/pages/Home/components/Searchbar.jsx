import React, { useState, useEffect } from 'react';
import { 
    Row, 
    Col, 
    Input, 
    Card, 
    CardBody, 
    CardTitle, 
    Button, 
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Form,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { GetAllMakes, GetModelFromMake } from '../../../components/ProductFilters/api/GetRequests';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Search } from 'react-feather';
import '../styles/Searchbar.css';
import SearchBoxSearchIcon from '../../../assets/SearchBoxSearchIcon.svg';

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
    const [makeList, setMakeList] = useState([]);
    const [modelList, setModelList] = useState([]);


    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);

    const [activeTab, setActiveTab] = useState('model');

    const toggleTab = tab => {
        if (activeTab !== tab)
            setActiveTab(tab);
    }


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

    useEffect(() => {
        GetAllMakes().then(doc => {
            setMakeList(doc.makes);
        })
        .catch(error => {
            alert(error.message);
        });
    }, []);


    const handleMake = (make) => {
        if(make){
            setSelectedMake(make);
            GetModelFromMake(make).then(doc => {
                setModelList(doc.makes[0].models);
            })
            .catch(error => {
                console.log(error.message);
            });
        }
    }

    return(
        <div className="searchbar-container">
        <Card className="searchbar">
            <CardBody>

                <Row>
                    <Col xs="8" style={{marginTop:'10px', marginBottom: '4px' }} >
                        
                        <CardTitle>Search for your dream car
                            
                            {/* <Button className="advance-search" color="link" onClick={() => history.push('/products')}>Advanced Search</Button> */}
                        </CardTitle>
                    </Col>

                    <Col xs="4">
                        <Nav tabs color="link">
                            <NavItem>
                                <NavLink 
                                    onClick={() => toggleTab('model')}
                                    className={classnames({ active: activeTab === 'model' })}
                                >
                                    Model
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                    onClick={() => toggleTab('style')}
                                    className={classnames({ active: activeTab === 'style' })}
                                >
                                    Style
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink 
                                    onClick={() => toggleTab('budget')}
                                    className={classnames({ active: activeTab === 'budget' })}
                                >
                                    Budget
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
 
                <Form onSubmit={(e) => Search(e)}>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="model">
                            <Row>
                                {/* <Col xs="12" md="8" className='my-1'>
                                    <InputGroup>
                                        <Input required className="search-search-box" id="search-box" type="text" placeholder={window.screen.width > 768 ? "Search for Cars or Models. eg 2019 Toyota Camry" : "Search Cars" } />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText>
                                                <FontAwesomeIcon icon="search" size="1x" />
                                                <img src = {SearchBoxSearchIcon} alt="" className = "img-fluid"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Col> */}

                                <Col xs="12" sm="6" md="3" className='my-1' >
                                    <Input id="condition" type="select" required className="condition-dropdown"
                                        onChange={(e) => handleMake(e.target.value)}
                                    >
                                        <option value="" disabled selected>Make</option>
                                        {
                                            makeList && makeList.map((make, index) => {
                                                return <option key={index} value={make.name}>{make.name}</option>
                                            })
                                        }
                                    </Input>
                                </Col>

                                <Col xs="12" sm="6" md="3" className='my-1'>
                                    <Input id="condition" type="select" required className="condition-dropdown" disabled={selectedMake ? false : true}>
                                        <option value="" disabled selected>Model</option>
                                        {
                                            modelList && modelList.map((model, index) => {
                                                return <option key={index} value={model.name}>{model.name}</option>
                                            })
                                        }
                                    </Input>
                                </Col>
                            
                                <Col xs="12" sm="6" md="3" className='my-1' >
                                    <Input id="condition" type="select" required className="condition-dropdown">
                                        <option value="" disabled selected>Condition</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>

                                <Col xs="12" sm="6" md="3" className='search-coloumn my-1'>
                                    <Button type="submit" className = "search-button">Search</Button>
                                </Col>
                            </Row>
                        </TabPane>

                        <TabPane tabId="style">
                            <Row>
                                <Col xs="12" md="6" className='my-1'>
                                    <Input id="condition" type="select" required className="condition-dropdown">
                                        <option value="" disabled selected>Body Style</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>
                            
                                <Col xs="12" sm="6" md="3" className='my-1'>
                                    <Input id="condition" type="select" required className="condition-dropdown">
                                        <option value="" disabled selected>Condition</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>

                                <Col xs="12" sm="6" md="3" className='search-coloumn my-1'>
                                    <Button type="submit" className = "search-button">Search</Button>
                                </Col>
                            </Row>
                        </TabPane>

                        <TabPane tabId="budget">
                            <Row>
                                <Col xs="12" md="3" className='my-1'>
                                    <Input id="condition" type="select" required className="condition-dropdown">
                                        <option value="" disabled selected>Min Price</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>

                                <Col xs="12" sm="6" md="3" className='my-1' >
                                    <Input id="condition" type="select" required className="condition-dropdown">
                                        <option value="" disabled selected>Max Price</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>
                            
                                <Col xs="12" sm="6" md="3" className='my-1' >
                                    <Input id="condition" type="select" required className="condition-dropdown">
                                        <option value="" disabled selected>Condition</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>

                                <Col xs="12" sm="6" md="3" className='search-coloumn my-1'>
                                    <Button type="submit" className = "search-button">Search</Button>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Form>
            </CardBody>
        </Card>
        </div>
    );
}

export default Searchbar;