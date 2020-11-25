import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, FormGroup, Collapse } from 'reactstrap';
import MultiSelect from "@khanacademy/react-multi-select";
import { GetAllMakes, GetModelFromMake, GetZipFromLatLong } from '../api/GetRequests';
import MapPopup from './MapPopup';
import gps from '../../../assets/gps.svg';
import { RadiusSlider, PriceRangeSlider, MileageSlider } from './sliders/Sliders';
import '../styles/Filters.css';



function concatMakeList(makeList){
    var makeSelectBox = document.getElementById('make-list');

    for(let i = 0; i < makeList.length; i++){
        var option = makeList[i];
        makeSelectBox.options.add(new Option(option.name, option.name));
    }
}

function concatModelList(modelList){
    var options = [];
    for(let i = 0; i < modelList.length; i++){
        var tempObj = {
            label: modelList[i].name,
            value: modelList[i].name
        };
        options.push(tempObj);
    }
    return options;

    // var modelSelectBox = document.getElementById('model-list');

    // for(let i = 0; i < modelList.length; i++){
    //     var option = modelList[i];
    //     modelSelectBox.options.add(new Option(option.name, option.name));
    // }
}

const Filters = (props) => {

    //Zip Code
    const [zipCode, setZipCode] = useState(null);

    //Filters
    const [radius, setRadius] = useState(0);
    const [price, setPrice] = useState([0, 99999]);
    const [mileage, setMileage] = useState([0, 99999]);
    const [make, setMake] = useState(null);
    
    const [selectedFromYear, setSelectedFromYear] = useState(null);

    const [selectedModels, setSelectedModels] = useState([]);

    // const [model, setModel] = useState(null);

    //Make and Model list fetched from Vin audit API
    const [makeList, setMakeList] = useState([]);
    const [modelList, setModelList] = useState([]);

    //Map Popup
    const [mapPopup, setMapPopup] = useState(false);

    //Filters Object
    const [filters, setFilters] = useState({});

    //Make Model Collapse
    const [isModelCollapseOpen, setisModelCollapseOpen] = useState(false);
    
    
    
    // const [fromYear, setFromYear] = useState(null);
    // const [toYear, setToYear] = useState(null);
    // const [transmission, setTransmission] = useState([false, false, false, false]);
    // const [sellerType, setSellerType] = useState([false, false]);

    const handleRadius = (radius) => {
        setRadius(radius);
        props.onHandleRadius(radius);
        // filters['radius'] = radius;
        // setFilters(filters);
        // FilterQueryString(filters);    
    }

    const handlePrice = (price) => {
        setPrice(price);
        props.onHandlePrice(price);
        filters['minPrice'] = price[0];
        filters['maxPrice'] = price[1];
        setFilters(filters);
        FilterQueryString(filters);
    }

    const handleMileage = (mileage) => {
        setMileage(mileage);
        props.onHandleMileage(mileage);
        filters['minMileage'] = mileage[0];
        filters['maxMileage'] = mileage[1]
        setFilters(filters);
        FilterQueryString(filters);
    }

    const handleMake = (make) => {
        setMake(make);
        GetModelFromMake(make).then(doc => {
            setModelList(doc.makes[0].models);
        });
        filters['carMake'] = make;
        setFilters(filters);
        FilterQueryString(filters);
    }

    const handleModel = (model) => {
        // setModel(model);
        filters['carModel'] = model;
        setFilters(filters);
        FilterQueryString(filters);
    }

    const handleFromYear = (fromYear) => {
        setSelectedFromYear(fromYear);
        filters['minYear'] = fromYear;
        setFilters(filters);
        FilterQueryString(filters);
    }

    const handleToYear = (toYear) => {
        // setToYear(toYear);
        filters['maxYear'] = toYear;
        setFilters(filters);
        FilterQueryString(filters);
    }

    const toggleMapPopup = () => setMapPopup(!mapPopup);

    useEffect(() => {
        GetAllMakes().then(doc => {
            setMakeList(doc.makes);
        });

        GetLocation();        
    }, []);

    useEffect(() => {
        GetFilterLength();
    }, [filters]);

    const todayYear = (new Date()).getFullYear();
    const dropdownYears = Array.from(new Array(100), (val, index) => todayYear - index);

    const selectedYear = (new Date(selectedFromYear)).getFullYear();
    const dropdownToYears = Array.from(new Array(100), (val, index) => selectedYear + index);



    function FilterQueryString(obj){
        var str = "";
        for(let i = 0; i < Object.keys(obj).length; i++){
            str += Object.keys(obj)[i] + "=" + obj[Object.keys(obj)[i]];
    
            if(i !== Object.keys(obj).length - 1){
                str += "&";
            }
        }
    
        // GetSearchResult(str).then(doc => {
        //     setProducts(doc);
        //     console.log("Doc", doc);
        // });
        props.onQueryChange(str);
    }
    

    function GetLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(ShowPosition, ShowError);
        }
        else{
            console.log("Geo location is not supported");
        }
    }
    
    function ShowPosition(position){
        var latLong = position.coords.latitude + "," + position.coords.longitude;
        GetZipFromLatLong(latLong).then(doc => {
            if(doc.length > 0){
                setZipCode(doc[0].address_components[0].long_name);
                filters['zipCode'] = doc[0].address_components[0].long_name;
                setFilters(filters);
                FilterQueryString(filters);
            }
            else{
                setZipCode("N/A");
            }
        });
    }
    
    function ShowError(error){
        try {
            console.log(error.message);
        } catch (e) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                  console.log("User denied the request for Geolocation");
                  break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Location information is unavailable.");
                  break;
                case error.TIMEOUT:
                    console.log("The request to get user location timed out.");
                  break;
                case error.UNKNOWN_ERROR:
                    console.log("An unknown error occurred.");
                  break;
                default:
                    console.log("An unknown error occurred.");
              }
        }   
    }

    function GetFilterLength(){
        var table = [];
        if(Object.keys(filters).length > 0){
            table.push(
                <Label><b>Filter</b> ({Object.keys(filters).length})</Label>
            );
        }
        else{
            table.push(
                <Label><b>Filter</b></Label>
            );
        }
        return table;
       
    }

    function clearFilters(){
        var tempFilters = {};
        tempFilters['zipCode'] = filters['zipCode'];
        setFilters(tempFilters);
        FilterQueryString(tempFilters);
    }

    return(
        <Card className="filters">
            <CardBody>
                {
                    GetFilterLength()
                }
                <Button color="link" className="float-right" size="sm" onClick={() => clearFilters()}>Clear</Button>
                
                <hr/>
                
                <div className="location">
                    <h6>LOCATION</h6>
                    <InputGroup>
                    <Input type="text" className="location-box" defaultValue={zipCode} readOnly />
                        <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <img onClick={() => toggleMapPopup()} src={gps} alt="Gps Icon" className="img-fluid" />
                                <MapPopup toggle={toggleMapPopup} isOpen={mapPopup} />
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    

                    <Row className="radius">
                        <Col xs="3" sm="2" md="4" lg="3">
                            <Label>Radius</Label>
                        </Col>
                        <Col xs="7" sm="9" md="5" lg="7">
                            <RadiusSlider 
                                min={0}
                                max={200}
                                onHandleRadius={handleRadius} />
                        </Col>
                        <Col xs="2" sm="1" md="3" lg="2" className="px-0">
                            <Label>{radius + " mi."}</Label>
                        </Col>
                    </Row>
                </div>
                
                <hr />
                
                <h6>MAKE</h6>
                {
                    makeList ?
                    <Input id="make-list" type="select" className="mb-4" onChange={(e) => { setisModelCollapseOpen(true); handleMake(e.target.value); }}>
                        <option value="">Make</option>
                        {
                            concatMakeList(makeList)
                        }
                    </Input>
                    :
                    null
                }
                

                <Collapse isOpen={isModelCollapseOpen}>
                    <h6>MODEL</h6>
                    {
                        modelList ?
                        <MultiSelect
                            options={concatModelList(modelList)}
                            selected={selectedModels}
                            // onSelectedChanged={(e) => handleModel(e.target.value)} 
                            onSelectedChanged={selectedModels => setSelectedModels(selectedModels)}
                        />
                        // <Input id="model-list" type="select" className="mb-4" onChange={(e) => handleModel(e.target.value)}>
                        //     <option value="">Model</option>
                        //     {
                        //         concatModelList(modelList)
                        //     }
                        // </Input>
                        :
                        null
                    }
                    
                </Collapse>

                <hr />
                
                <h6>PRICE</h6>
                <div className="px-2">
                    <PriceRangeSlider
                        min={0}
                        max={99999}
                        minLabel={price[0]}
                        maxLabel={price[1]}
                        step={1000}
                        defaultValue={[0, 99999]}
                        onHandlePrice={handlePrice} />
                </div>
                
                <hr />
                
                <h6>MILEAGE</h6>
                <div className="px-2">
                    {/* <Typography id="continuous-slider" gutterBottom>
                        {mileage + " mi."}
                    </Typography> */}
                    <MileageSlider
                        min={0}
                        max={99999}
                        minLabel={mileage[0]}
                        maxLabel={mileage[1]}
                        step={1000}
                        defaultValue={[0, 99999]}
                        onHandleMileage={handleMileage} />
                </div>
                
                <hr />
                
                <h6>YEAR</h6>
                <Row>
                    <Col xs="6">
                        <Input type="select" onChange={(e) => handleFromYear(e.target.value)}>
                            <option>From</option>
                            {
                                dropdownYears.map((year, index) => {
                                    return <option key={`year${index}`} value={year}>{year}</option>
                                })
                            }
                        </Input>
                    </Col>
                    <Col xs="6">
                        <Input type="select" onChange={(e) => handleToYear(e.target.value)}>
                            <option>To</option>
                            {
                                dropdownToYears.map((year, index) => {
                                    return <option key={`year${index}`} value={year}>{year}</option>
                                })
                            }
                        </Input>
                    </Col>
                </Row>

                <hr />

                <h6>TRANSMISSION</h6>
                    <FormGroup check>
                        <Input type="checkbox" id="manual" name="transmission" />
                        <Label check htmlFor="manual">Manual</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" id="automatic" name="transmission" />
                        <Label check htmlFor="automatic">Automatic</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" id="electric" name="transmission" />
                        <Label check htmlFor="electric">Electric</Label>
                    </FormGroup>
                    <FormGroup check>
                        <Input type="checkbox" id="random" name="transmission" />
                        <Label check htmlFor="random">Random</Label>
                    </FormGroup>


                <hr />

                <h6>SELLER TYPE</h6>
                <FormGroup check>
                    <Input type="checkbox" id="dealer" name="seller-type" />
                    <Label check htmlFor="dealer">Dealer</Label>
                </FormGroup>
                <FormGroup check>
                    <Input type="checkbox" id="private-seller" name="seller-type" />
                    <Label check htmlFor="private-seller">Private Seller</Label>
                </FormGroup>
            </CardBody>
        </Card>
    );
}

export default Filters;