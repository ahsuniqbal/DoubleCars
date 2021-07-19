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
import { GetAllMakes, GetFiltersList, GetModelFromMake } from '../../../components/ProductFilters/api/GetRequests';
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

    // Filters list
    const [bodyStyleList, setBodyStyleList] = useState([]);


    const [selectedMake, setSelectedMake] = useState(null);
    const [selectedModel, setSelectedModel] = useState(null);

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const [activeTab, setActiveTab] = useState('model');

    const toggleTab = tab => {
        if (activeTab !== tab)
            setActiveTab(tab);
    }


    const SearchMake = (e) => {
        e.preventDefault();
        // var searchInput = document.getElementById('search-box').value;
        var condition = document.getElementById('condition').value;

        // console.log(condition);

        // sessionStorage.setItem('searchInput', searchInput);
        // history.push({
        //     pathname: '/products',
        //     search: '?search=' + searchInput + '&isUsed=' + condition,
        // })

        var queryStr = "";

        if (selectedMake)
            queryStr += "&carMake=" + selectedMake
        if (selectedModel) 
            queryStr += "&carModel=" + selectedModel
        if (condition)
            queryStr += "&isUsed" + condition

        history.push({
            pathname: '/products',
            search: queryStr,
        })
    };


    const SearchBodyStyle = (e) => {
        e.preventDefault();
        var condition = document.getElementById('condition-body').value;
        var bodyStyle = document.getElementById('body-style').value;

        var queryStr = "";

        if (bodyStyle)
            queryStr += "&bodyStyle=" + bodyStyle
        if (condition)
            queryStr += "&isUsed=" + condition

        history.push({
            pathname: '/products',
            search: queryStr,
        })
    };


    const SearchPrice = (e) => {
        e.preventDefault();
        var condition = document.getElementById('condition-price').value;

        var queryStr = "";

        if (minPrice)
            queryStr += "&minPrice=" + minPrice
        if (maxPrice)
            queryStr += "&maxPrice=" + maxPrice
        if (condition)
            queryStr += "&isUsed=" + condition

        history.push({
            pathname: '/products',
            search: queryStr,
        })
    };
    

    useEffect(() => {
        Promise.all([GetAllMakes(), GetFiltersList()]).then(doc => {
            setMakeList(doc[0].makes);

            setBodyStyleList(doc[1].listRanges.bodyStyleList);
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


    const handleModel = (model) => {
        if(model){
            setSelectedModel(model);
        }
    }


    function FilterQueryString(obj){
        var str = "";
        for(let i = 0; i < Object.keys(obj).length; i++){
            str += Object.keys(obj)[i] + "=" + obj[Object.keys(obj)[i]];
            if(i !== Object.keys(obj).length - 1){
                str += "&";
            }
        }

        console.log(str);
    }


    // const NumbersOnly = (e) => {
    //     setMinPrice(e.target.value.replace(/[^0-9]/ig, ''));
    // }

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
 
                
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="model">
                        <Form onSubmit={(e) => SearchMake(e)}>
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
                                    <Input type="select" className="condition-dropdown"
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
                                    <Input type="select" className="condition-dropdown" disabled={selectedMake ? false : true}
                                        onChange={(e) => handleModel(e.target.value)}
                                    >
                                        <option value="" disabled selected>Model</option>
                                        {
                                            modelList && modelList.map((model, index) => {
                                                return <option key={index} value={model.name}>{model.name}</option>
                                            })
                                        }
                                    </Input>
                                </Col>
                            
                                <Col xs="12" sm="6" md="3" className='my-1' >
                                    <Input id="condition" type="select" className="condition-dropdown">
                                        <option value="" disabled selected>Condition</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>

                                <Col xs="12" sm="6" md="3" className='search-coloumn my-1'>
                                    <Button type="submit" className = "search-button">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </TabPane>

                    <TabPane tabId="style">
                        <Form onSubmit={(e) => SearchBodyStyle(e)}>
                            <Row>
                                <Col xs="12" md="6" className='my-1'>
                                    <Input id="body-style" type="select" className="condition-dropdown">
                                        <option value="" disabled selected>Body Style</option>
                                        {
                                            bodyStyleList.length > 0 && bodyStyleList.map((bodyStyle) => {
                                                return <option value={bodyStyle}>{bodyStyle}</option>
                                            })
                                        }
                                    </Input>
                                </Col>
                            
                                <Col xs="12" sm="6" md="3" className='my-1'>
                                    <Input id="condition-body" type="select" className="condition-dropdown">
                                        <option value="" disabled selected>Condition</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>

                                <Col xs="12" sm="6" md="3" className='search-coloumn my-1'>
                                    <Button type="submit" className = "search-button">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </TabPane>

                    <TabPane tabId="budget">
                        <Form onSubmit={(e) => SearchPrice(e)}>
                            <Row>
                                <Col xs="12" md="3" className='my-1'>
                                    <Input id="min-price" type="text" placeholder="Min Price" className="price-box condition-dropdown" 
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value.replace(/[^0-9]/ig, ''))}
                                    />
                                </Col>

                                <Col xs="12" sm="6" md="3" className='my-1' >
                                    <Input id="max-price" type="text" placeholder="Max Price" className="price-box condition-dropdown"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value.replace(/[^0-9]/ig, ''))}
                                    />
                                </Col>
                            
                                <Col xs="12" sm="6" md="3" className='my-1' >
                                    <Input id="condition-price" type="select" className="condition-dropdown">
                                        <option value="" disabled selected>Condition</option>
                                        <option value="false">New</option>
                                        <option value="true">Used</option>
                                    </Input>
                                </Col>

                                <Col xs="12" sm="6" md="3" className='search-coloumn my-1'>
                                    <Button type="submit" className = "search-button">Search</Button>
                                </Col>
                            </Row>
                        </Form>
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
        </div>
    );
}

export default Searchbar;