import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Row, FormGroup, Collapse } from 'reactstrap';
import MultiSelect from "@khanacademy/react-multi-select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Check } from 'react-feather';
import { GetFiltersList, GetAllMakes, GetModelFromMake, GetTrimFromMakeAndModel, GetZipFromLatLong, GetZipCodesList } from '../api/GetRequests';
import MapPopup from './MapPopup';
import gps from '../../../assets/gps.svg';
import { RadiusSlider, PriceRangeSlider, MileageSlider } from './sliders/Sliders';
import '../styles/Filters.css';
import { FiltersSkeleton } from '../../Skeletons/components/Skeleton';
import {postSavedSearch} from '../api/PostRequest'


// Prepare the make list to show on the dropdown
// function concatMakeList(makeList){
//     var makeSelectBox = document.getElementById('make-list');

//     for(let i = 0; i < makeList.length; i++){
//         var option = makeList[i];
//         makeSelectBox.options.add(new Option(option.name, option.name));
//     }
// }


// Concatinate model list to show on the dropdown
function concatModelList(modelList){
    var options = [];
    for(let i = 0; i < modelList.length; i++){
        var tempObj = {
            label: modelList[i].name,
            value: modelList[i].name,
        };
        options.push(tempObj);   
    }
    return options;
}

// Concatinate model list to show on the dropdown
function concatTrimList(trimList){
    var options = [];
    for(let i = 0; i < trimList.length; i++){
        var tempObj = {
            label: trimList[i].name,
            value: trimList[i].name,
        };
        options.push(tempObj);   
    }
    return options;
}

// Concatinate comma to those filters who are multi select
function concatinateCommaToFilters(list) {
    var str = ""
    for(let i = 0; i < list.length; i++){
        str += list[i]
        if(i !== list.length - 1){
            str += ","
        }
    }
    return str;
}

const Filters = (props) => {
    /////////////// Filters ///////////////
    // Filters Object
    const [filters, setFilters] = useState({});

    // Filters list to be rendered dynamically
    const [filtersList, setFiltersList] = useState(null);


    // Zip Code
    const [zipCode, setZipCode] = useState(null);

    //basicColor for BodyList svg
    const [basicColor, setBasicColors] = useState(['#595959','#595959','#595959','#595959','#595959','#595959','#595959','#595959','#595959','#595959'])
    const [basicBodyStyle,setBodyStyle] = useState(['Sedan','Hatchback','SUV','Coupe','Convertible','Pickup Truck','Wagon','Minivan'])
    const basicColorSet = (index) => {
        var modelTemp = basicColor.slice();
        modelTemp[index] = basicColor[index] === '#595959' ? '#1C67CE' : '#595959'
        setBasicColors(modelTemp)
    }
    // Make, Model and trim list fetched from Vin audit API
    const [makeList, setMakeList] = useState([]);
    const [selectedMake, setSelectedMake] = useState(null);
    const [modelList, setModelList] = useState([]);
    const [selectedModel, setSelectedModel] = useState(null);
    
    const [trimList, setTrimList] = useState([]);
    const [selectedTrim, setSelectedTrim] = useState(null);

    // const [selectedModels, setSelectedModels] = useState([]);
    // const [trimList, setTrimList] = useState([]);
    // const [selectedTrims, setSelectedTrims] = useState([]);

    

    // Model and trim collapses
    const [isModelCollapseOpen, setModelCollapseOpen] = useState(false);
    const [isTrimCollapseOpen, setTrimCollapseOpen] = useState(false);

    const [radius, setRadius] = useState(200);
    const [bodyList,setBodyList] = useState([])

    const [price, setPrice] = useState([0, 99999]);
    const [globalFilterQuery,setGlobalFilterQuery] = useState("")
    const [mileage, setMileage] = useState([0, 99999]);

    const [selectedFromYear, setSelectedFromYear] = useState(null);

    // Show advance filters
    const [advancedFiltersShown, setAdvancedFiltersShown] = useState(false);

    //Current Lat Long
    const [currentLatLng, setCurrentLatLng] = useState(null);

    //Map Popup
    const [mapPopup, setMapPopup] = useState(false);

    // Selected Exterior colors
    const [extColors, setExtColors] = useState([]);
    // Selected Interior colors
    const [intColors, setIntColors] = useState([]);


    const [loading, setLoading] = useState(false);

    // Toggle open or close map popup
    const toggleMapPopup = () => setMapPopup(!mapPopup);

    // Populating Years dropdowns
    const todayYear = (new Date()).getFullYear();
    // 100 years back from today's date
    const dropdownYears = Array.from(new Array(100), (val, index) => todayYear - index);
    
    let dropdownToYears = [];
    dropdownToYears = Array.from(new Array(todayYear - selectedFromYear), (val, index) => todayYear - index-1);
    dropdownToYears.unshift(todayYear)
    if (dropdownToYears.length==0) {
        dropdownToYears = [...dropdownToYears,Number(selectedFromYear)]
    }
    

    // Callback function to save the selected location from map to current location
    const GetLocationFromMap = useCallback((mapLocation) => {
        setCurrentLatLng(mapLocation);
    }, []);


    const convertIntoQueryParams = (obj) => {
        var str = "";
        for(let i = 0; i < Object.keys(obj).length; i++){
            str += Object.keys(obj)[i] + "=" + obj[Object.keys(obj)[i]];
            if(i !== Object.keys(obj).length - 1){
                str += "&";
            }
        }
        return str;
    }


    /////////////// Handle changes in filters ///////////////
    const handleRadius = (radius) => {
        console.log('chalaaa')
        if(!zipCode) {
            alert("Please allow the location first");
            return;
        }
        const zip = zipCode.split('- ')
        setRadius(radius);

        const obj = {
            zip: zip[zip.length - 1],
            radius: radius,
        }
        console.log(obj)
        // console.log(convertIntoQueryParams(obj))
        GetZipCodesList(convertIntoQueryParams(obj)).then(doc => {
            console.log(doc)
            if(doc.results.length > 0) {
                setRadius(radius);            
                filters['radius'] = radius;
                console.log(doc)
                filters['zipCode'] = doc.results[0]+"-"+doc.results[doc.results.length - 1]
               // console.log(doc.results[0]+"-"+doc.results[doc.results.length - 1])
                setFilters(filters);
                console.log('YE HOA CALLED zip')
                FilterQueryString(filters);
            }
            else {
                // If zip code is not available then do nothing
            }
            
        }).catch(error => {
            console.log(error)
        })
        // setRadius(radius);
        // filters['radius'] = radius;
        // setFilters(filters);
        // FilterQueryString(filters);    
    }

    // This function is to handle the radius value only
    const handleRadiusValue = (radius) => {
        setRadius(radius);
    }

    const handleMake2 = (make) => {
        setLoading(true);
        setSelectedMake(make);
        setModelList([]);
        delete filters['carModel']
        setTrimList([]);
        delete filters['trim']

        if(make){
            GetModelFromMake(make).then(doc => {
                setModelList(doc.makes[0].models);
                // console.log("MODEL",props.carModel,doc.makes[0].models)
                if(props.carMake){
                    if(props.carModel){
                        if(doc.makes[0].models.findIndex(a => a.name === props.carModel) !== -1){
                            // filters['carMake'] = make;
                            handleModel2(props.carModel)
                        // setFilters(filters);
                        //FilterQueryString(filters);
                        setLoading(false);
                        }
                    }
                }
                // filters['carMake'] = make;
                // setFilters(filters);
                // FilterQueryString(filters);
                // setLoading(false);
            })
            .catch(error => {
                console.log(error.message)
                setLoading(false);
            });
        }else{
            // setModelList([]);
            // delete filters['carModel']
            // setTrimList([]);
            // delete filters['trim']
            // delete filters['carMake']
            // setFilters(filters);
            // FilterQueryString(filters);
            // setLoading(false);
        }
        
    }

    const handleMake = (make) => {
        console.log("MAKEMAKE",make)
        setLoading(true);
        setSelectedMake(make);
        setModelList([]);
        delete filters['carModel']
        setTrimList([]);
        delete filters['trim']

        if(make){
            GetModelFromMake(make).then(doc => {
                setModelList(doc.makes[0].models);
                filters['carMake'] = make;
                setFilters(filters);
                console.log('YE HOA CALLED - model-make')
               FilterQueryString(filters);
                setLoading(false);
            })
            .catch(error => {
                console.log(error.message)
                setLoading(false);
            });
        }else{
            setModelList([]);
            delete filters['carModel']
            setTrimList([]);
            delete filters['trim']
            delete filters['carMake']
            setFilters(filters);
            console.log('YE HOA CALLED - model-make')
            //FilterQueryString(filters);
            setLoading(false);
        }
        
    }
    const handleModel2 = (select) => {
        setLoading(true)
        setSelectedModel(select);

        setTrimList([]);
        delete filters['trim']
        if(select){
            GetTrimFromMakeAndModel(selectedMake, select).then(doc => {
                // trimList.push(doc.makes[0].models[0].trims)
                setTrimCollapseOpen(true);
                setTrimList(doc.makes[0].models[0].trims)
                // filters['carModel'] = select;
                // setFilters(filters);
                // FilterQueryString(filters);
                setLoading(false)
            }).catch(error => {
                console.log(error.message)
                setLoading(false)
            });
        }else{
            // console.log('filters1',filters)
            // setTrimList([]);
            // delete filters['trim']
            // delete filters['carModel']
            // // console.log('filters2',filters)
            // setFilters(filters);
            // FilterQueryString(filters);
            // setTrimCollapseOpen(false);
            // setLoading(false)
        }
    }

    const handleModel = (select) => {
        setLoading(true)
        setSelectedModel(select);

        setTrimList([]);
        delete filters['trim']
        if(select){
            GetTrimFromMakeAndModel(selectedMake, select).then(doc => {
                // trimList.push(doc.makes[0].models[0].trims)
                setTrimCollapseOpen(true);
                setTrimList(doc.makes[0].models[0].trims)
                filters['carModel'] = select;
                setFilters(filters);
                FilterQueryString(filters);
                setLoading(false)
            }).catch(error => {
                console.log(error.message)
                setLoading(false)
            });
        }else{
            // console.log('filters1',filters)
            setTrimList([]);
            delete filters['trim']
            delete filters['carModel']
            // console.log('filters2',filters)
            setFilters(filters);
            FilterQueryString(filters);
            setTrimCollapseOpen(false);
            setLoading(false)
        }
    }


    const handleTrim = (selected) => {
        setLoading(true)
        setSelectedTrim(selected);
        if(selected){
            // GetTrimFromMakeAndModel(selectedMake, select).then(doc => {
            //     // trimList.push(doc.makes[0].models[0].trims)
            //     setTrimCollapseOpen(true);
            //     setTrimList(doc.makes[0].models[0].trims)
                filters['trim'] = selected;
                setFilters(filters);
                FilterQueryString(filters);
                setLoading(false)
            // }).catch(error => {
            //     console.log(error.message)
            // });
        }else{
            // console.log('filters1',filters)
            delete filters['trim']
            // console.log('filters2',filters)
            setFilters(filters);
            FilterQueryString(filters);
            setLoading(false)
            // setTrimCollapseOpen(false);
        }






        // console.log(selected)
        // setSelectedTrims(selected);
        // if(selected.length > 0){            
        //     filters['trim'] = concatinateCommaToFilters(selected);
        //     setFilters(filters);
        //     FilterQueryString(filters);
        // }
        // else {
        //     delete filters['trim']
        //     setFilters(filters);
        //     FilterQueryString(filters);
        // }

    }

    const handlePrice = (price) => {
        console.log('handlePriceFilter')
        setPrice(price);
        filters['minPrice'] = price[0];
        filters['maxPrice'] = price[1];
        setFilters(filters);
        FilterQueryString(filters);
    }

    const handleFromYear = (fromYear) => {
        setLoading(true);
        document.getElementById("toYear").disabled = false;
        setSelectedFromYear(fromYear);
        filters['minYear'] = fromYear;
        console.log('handlePriceFilter')
        delete filters['maxYear'];
        setFilters(filters);
        FilterQueryString(filters);
        setLoading(false)
    }

    const handleToYear = (toYear) => {
        setLoading(true)
        filters['maxYear'] = toYear;
        setFilters(filters);
        console.log('handlePriceFilter')
        FilterQueryString(filters);
        setLoading(false)
    }

    const handleCondition = () => {
        setLoading(true)
        var conditionNew = document.getElementById('condition-new');
        var conditionUsed = document.getElementById('condition-used');

        console.log("CHECKING",conditionNew.checked,conditionUsed.checked)
        if(conditionNew.checked === true && conditionUsed.checked === true) {
            delete filters['isUsed'];
        }
        else if (conditionNew.checked === true) {
            filters['isUsed'] = 0;
        }
        else if (conditionUsed.checked === true) {
            filters['isUsed'] = 1;
        }
        else {
            delete filters['isUsed'];
        }
        setFilters(filters);
        console.log('handlePriceFilter')
        FilterQueryString(filters);
        setLoading(false)
    }

    const handleMileage = (mileage) => {
        setMileage(mileage);
        filters['minMileage'] = mileage[0];
        filters['maxMileage'] = mileage[1]
        setFilters(filters);
        console.log('handlePriceFilter')
        FilterQueryString(filters);
    }

    const handleSellerType = () => {
        setLoading(true)
        var dealer = document.getElementById('dealer');
        var privateSeller = document.getElementById('private-seller');

        if(dealer.checked === true && privateSeller.checked === true) {
            delete filters['userType'];
        }
        else if (dealer.checked === true) {
            filters['userType'] = 2;
        }
        else if (privateSeller.checked === true) {
            filters['userType'] = 1;
        }
        else {
            delete filters['userType'];
        }
        setFilters(filters);
        console.log('handlePriceFilter')
        FilterQueryString(filters);
        setLoading(false)
    }

    // Draw Skeleton if filters list in loading
    function DrawFiltersSkeleton() {
        var table = [];

        for(let i = 0; i < 4; i++) {
            table.push(
                <FiltersSkeleton index={i}/>
            );
        }
        return table;
    }

    const bodyListFunc = (bodyStyle,index) => {
        setLoading(true)
        if(bodyList.includes(bodyStyle)) {
            bodyList.splice(bodyList.indexOf(bodyStyle), 1)
        }
        else {
            bodyList.push(bodyStyle)
        }
        filters['bodyStyle'] = concatinateCommaToFilters(bodyList);
        setFilters(filters);
        console.log('handlePriceFilter')
        FilterQueryString(filters);
        basicColorSet(index)
        setLoading(false)
    }

    // Body Styles render from API
    const DrawBodyStyles = (bodyStyleList) => {
        var table = [];
        // const basicColor = '#595959'
        if(bodyStyleList.includes('Sedan')) {
            table.push(
                <Col onClick={() => bodyListFunc('Sedan', 0)} xs="6" md="6" lg='4'>
                    <svg width="58" height="23" viewBox="0 0 58 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.23975 5.71118L9.24636 7.27687C9.2962 7.35392 9.36454 7.41725 9.44516 7.46108C9.52577 7.50492 9.61608 7.52787 9.70784 7.52782H28.6439L47.1867 7.99209" stroke={basicColor[0]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M42.9062 18.2367L42.9132 18.2701C43.1462 19.2272 43.6939 20.0782 44.4684 20.6867C45.2429 21.2953 46.1993 21.6261 47.1843 21.6261C48.1693 21.6261 49.1257 21.2953 49.9002 20.6867C50.6748 20.0782 51.2224 19.2272 51.4554 18.2701L51.4638 18.2339C51.5422 17.9046 51.582 17.5672 51.5823 17.2287C51.5819 16.6091 51.4507 15.9965 51.1975 15.431C50.9443 14.8655 50.5747 14.3597 50.1128 13.9467C49.9971 13.8449 49.8786 13.7501 49.7559 13.6679L49.6974 13.6274C49.5956 13.5563 49.4938 13.488 49.3879 13.4281L49.2833 13.3709C49.1913 13.3207 49.0965 13.2719 49.0044 13.2315C48.964 13.212 48.9222 13.1952 48.8818 13.1771C48.7869 13.1381 48.6907 13.1018 48.5946 13.0698C48.5527 13.0558 48.5109 13.0405 48.4691 13.0279C48.3645 12.9973 48.2585 12.9708 48.1526 12.9471C48.1177 12.9387 48.0829 12.9289 48.0466 12.922C47.7555 12.8651 47.4594 12.8375 47.1627 12.8397C47.086 12.8397 47.0079 12.8481 46.9299 12.8523C46.8518 12.8565 46.7598 12.8592 46.6747 12.869C46.0593 12.9413 45.4661 13.1429 44.9341 13.4606C44.4021 13.7783 43.9433 14.2049 43.5878 14.7125C43.2323 15.2201 42.9882 15.7971 42.8714 16.4056C42.7547 17.0142 42.768 17.6406 42.9104 18.2436L42.9062 18.2367Z" stroke={basicColor[0]} stroke-width="1.7" stroke-miterlimit="10" stroke-linejoin="bevel"/>
                        <path d="M8.32877 18.2046V18.2339C8.55359 19.1971 9.09668 20.0564 9.87024 20.6727C10.6438 21.2891 11.6026 21.6266 12.5917 21.6306C13.5808 21.6346 14.5423 21.305 15.3209 20.6949C16.0995 20.0849 16.6495 19.2301 16.8822 18.2688L16.8906 18.2367C17.0273 17.6567 17.0448 17.0551 16.9418 16.4682C16.8389 15.8813 16.6177 15.3214 16.2917 14.8227C15.9657 14.3239 15.5417 13.8966 15.0455 13.5667C14.5492 13.2369 13.9911 13.0114 13.4051 12.9039H13.3897C13.2503 12.8802 13.1179 12.862 12.9798 12.8509H12.9143C12.786 12.8425 12.655 12.837 12.5239 12.8383C11.8721 12.8523 11.2316 13.0109 10.6486 13.3029C10.0657 13.5948 9.55498 14.0127 9.15344 14.5264C8.75191 15.04 8.46961 15.6365 8.32698 16.2727C8.18435 16.9088 8.18496 17.5687 8.32877 18.2046V18.2046Z" stroke={basicColor[0]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M12.6544 3.46229L8.55123 5.75018C8.42321 5.82104 8.2863 5.87449 8.14413 5.90911L2.60636 7.23361C2.33956 7.29727 2.09979 7.44382 1.92145 7.65221C1.74311 7.86061 1.63537 8.12015 1.61369 8.39358L1.00443 15.9432C0.976749 16.2774 1.07965 16.6094 1.29153 16.8693C1.5034 17.1293 1.80776 17.2971 2.1407 17.3374L7.99634 18.061C7.98937 18.0247 7.98658 17.9885 7.97961 17.9522L7.97264 17.9006C7.9587 17.8044 7.94754 17.7082 7.93918 17.6106V17.5716C7.92245 17.3484 7.92245 17.1242 7.93918 16.901C8.02802 15.7342 8.54602 14.6418 9.39314 13.8346C10.2403 13.0274 11.3564 12.5627 12.5261 12.5302C12.8415 12.5249 13.1566 12.5501 13.4672 12.6055C13.8747 12.6803 14.2705 12.8092 14.6439 12.9889C15.1121 13.2118 15.5402 13.5105 15.9112 13.8728C16.3578 14.3097 16.7121 14.8319 16.953 15.4084C17.194 15.9849 17.3166 16.6038 17.3138 17.2286C17.3129 17.4011 17.3022 17.5733 17.2817 17.7445C17.2817 17.7766 17.272 17.8072 17.2678 17.8393C17.2552 17.9327 17.2455 18.0261 17.2273 18.1181H42.5739C42.5669 18.0819 42.5628 18.0456 42.5558 18.0094L42.5446 17.9355C42.5307 17.8518 42.5209 17.7668 42.5126 17.6831V17.612C42.5056 17.5256 42.5014 17.4378 42.4986 17.3513V17.2858C42.4986 17.1952 42.4986 17.1059 42.4986 17.0153V16.9637C42.4986 16.8675 42.514 16.7713 42.5251 16.6751V16.6389C42.5673 16.3065 42.6439 15.9794 42.7538 15.6629C43.0464 14.8356 43.565 14.1068 44.2509 13.5592C44.9367 13.0117 45.7622 12.6672 46.6338 12.565C46.9676 12.5263 47.3046 12.523 47.639 12.5553C47.9815 12.5875 48.3192 12.6586 48.6457 12.7672C49.5856 13.0762 50.4042 13.6736 50.9852 14.4746C51.5661 15.2755 51.8798 16.2392 51.8816 17.2286C51.8807 17.4006 51.87 17.5724 51.8495 17.7431C51.8495 17.7766 51.8398 17.81 51.8356 17.8435C51.823 17.9355 51.8133 18.0275 51.7952 18.1223H56.6749C56.6893 18.1223 56.7036 18.1191 56.7167 18.1128C56.7297 18.1065 56.7411 18.0974 56.7502 18.0861C56.7615 18.0698 56.7689 18.0512 56.7718 18.0316C56.7747 18.012 56.773 17.992 56.7669 17.9731L56.6107 12.8508C56.4406 10.8292 54.005 9.46433 51.968 8.91083C51.9485 8.91083 51.9276 8.90246 51.9067 8.89828C51.8675 8.89288 51.8289 8.88449 51.791 8.87319C49.6243 8.31725 47.4121 7.95657 45.1811 7.79547C45.1042 7.79488 45.0278 7.7841 44.9538 7.7634C44.7754 7.6672 44.6023 7.56156 44.4352 7.44692C40.2802 4.72482 35.7285 2.66297 30.9421 1.33474C30.8813 1.31746 30.8193 1.30441 30.7567 1.2957C29.5842 1.14234 28.3656 1.04057 27.1318 0.993163C26.9031 0.984798 26.6703 0.979221 26.4346 0.97225V7.54312H26.1293V0.969461H26.2172C25.811 0.960167 25.4039 0.955984 24.9958 0.956914C22.2793 0.971826 19.5668 1.17166 16.8774 1.55503C16.5958 1.59365 16.3166 1.64764 16.0409 1.71675C15.7491 1.78685 15.4678 1.89514 15.2044 2.03881L12.9597 3.28662L12.6544 3.46229Z" stroke={basicColor[0]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>

                    <p style={{color: basicColor[0]}}>Sedan</p>
                    {/* <input type="checkbox" id="checkbox-sedan" onClick={() => { document.getElementById('checkbox-sedan-div').classList.add('bodystyle-checkbox-colored'); document.getElementById('checkbox-sedan-div').classList.remove('bodystyle-checkbox')}}/>
                    <div className="bodystyle-checkbox" id="checkbox-sedan-div"></div>
                    <label htmlFor="checkbox-sedan" id="checkbox-sedan">Sedan</label> */}
                </Col>
            );
        }
        if(bodyStyleList.includes('Hatchback')) {
            table.push(
                <Col onClick={() => bodyListFunc('Hatchback', 1)} xs="6" sm="4"md="6" lg='4' className="px-0">
                    <svg width="55" height="25" viewBox="0 0 55 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.1262 7.00293C38.132 7.82727 34.0574 7.97228 32.3212 7.99711C31.8535 8.00364 31.4067 7.99711 30.9338 7.96314C27.9538 7.76979 14.7252 6.91802 11.7715 6.77431C9.77396 6.67764 8.32778 3.26271 7.91626 2.17578" stroke={basicColor[1]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M53.3324 19.133C52.9026 20.4211 48.9781 20.8509 48.9781 20.8509H46.9506H46.82C46.8995 20.5299 46.9394 20.2004 46.9388 19.8698C46.9451 19.3222 46.8422 18.7788 46.6362 18.2713C46.4303 17.7639 46.1254 17.3025 45.7392 16.9141C45.3531 16.5258 44.8935 16.2181 44.3873 16.0092C43.881 15.8003 43.3383 15.6943 42.7906 15.6973C42.243 15.7004 41.7014 15.8124 41.1975 16.0269C40.6936 16.2414 40.2375 16.5541 39.8557 16.9467C39.4739 17.3394 39.1741 17.8041 38.9738 18.3138C38.7735 18.8235 38.6766 19.368 38.6889 19.9155C38.6889 20.0461 38.6968 20.1768 38.7098 20.3074L12.2892 19.3929L12.0579 19.3825C12.0083 18.4101 11.6163 17.4866 10.9512 16.7755C10.2861 16.0644 9.39092 15.6115 8.42402 15.497C7.45712 15.3825 6.48089 15.6137 5.66811 16.1498C4.85534 16.6859 4.25844 17.4923 3.98306 18.4262C3.94058 18.5802 3.84918 18.7163 3.72264 18.8138C3.5961 18.9114 3.44129 18.9652 3.28152 18.9671H2.28866C2.13878 18.9665 1.99265 18.9201 1.86984 18.8342C1.74703 18.7483 1.6534 18.6269 1.60149 18.4863C-0.329373 13.2542 4.10847 5.98011 4.88448 4.76255C4.9591 4.64548 4.99855 4.50945 4.99813 4.37063V3.19487C4.99828 3.09791 5.01777 3.00196 5.05546 2.91263C5.09315 2.82331 5.14828 2.74239 5.21762 2.67463C5.28696 2.60687 5.36913 2.55362 5.4593 2.51801C5.54948 2.48239 5.64585 2.46512 5.74278 2.4672L7.75856 2.5077C14.1151 0.928966 20.7139 0.574283 27.203 1.46258C31.0974 2.16673 39.5929 7.41324 39.5929 7.41324C40.5375 8.23888 46.8187 9.51916 47.2929 9.61583C47.3132 9.61938 47.3333 9.62418 47.353 9.6302C54.3109 11.548 53.3324 19.133 53.3324 19.133Z" stroke={basicColor[1]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M12.0706 19.5745C12.0764 20.6651 11.6523 21.714 10.8903 22.4941C10.1282 23.2742 9.08948 23.7227 7.9991 23.7424C6.90873 23.7622 5.85447 23.3515 5.0647 22.5995C4.27492 21.8474 3.81321 20.8145 3.77956 19.7245C3.74592 18.6345 4.14306 17.5751 4.88495 16.7758C5.62685 15.9764 6.65377 15.5016 7.74329 15.454C8.83281 15.4065 9.8972 15.79 10.7059 16.5217C11.5146 17.2533 12.0026 18.2741 12.064 19.3629V19.3629C12.0706 19.4348 12.0706 19.5027 12.0706 19.5745Z" stroke={basicColor[1]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M46.9509 19.8608C46.9514 20.1915 46.9115 20.521 46.832 20.8419C46.601 21.7854 46.0445 22.6171 45.2605 23.1906C44.4766 23.7641 43.5154 24.0425 42.5462 23.977C41.5771 23.9114 40.6622 23.506 39.9626 22.8321C39.263 22.1583 38.8237 21.2592 38.7218 20.2932C38.7076 20.1495 38.7007 20.0052 38.7009 19.8608C38.7009 18.7668 39.1355 17.7176 39.9091 16.944C40.6827 16.1704 41.7319 15.7358 42.8259 15.7358C43.9199 15.7358 44.9691 16.1704 45.7427 16.944C46.5163 17.7176 46.9509 18.7668 46.9509 19.8608V19.8608Z" stroke={basicColor[1]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>

                    <p style={{color: basicColor[1]}}>Hatchback</p>
                </Col>
            );
        }
        if(bodyStyleList.includes('Sport Utility Vehicle')) {
            table.push(
                <Col onClick={() => bodyListFunc('Sport Utility Vehicle', 2)} xs="6" md="6" lg='4'>
                    <svg width="58" height="26" viewBox="0 0 58 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53.7974 19.9613H51.674C51.7071 19.7248 51.7239 19.4863 51.7242 19.2474C51.7242 17.9222 51.1978 16.6512 50.2607 15.7142C49.3236 14.7771 48.0527 14.2506 46.7274 14.2506C45.4022 14.2506 44.1312 14.7771 43.1941 15.7142C42.2571 16.6512 41.7306 17.9222 41.7306 19.2474C41.731 19.4863 41.7477 19.7248 41.7808 19.9613H15.9881C16.0207 19.7247 16.037 19.4862 16.0369 19.2474C16.048 18.5843 15.9269 17.9256 15.6808 17.3098C15.4347 16.6939 15.0685 16.1332 14.6034 15.6603C14.1384 15.1875 13.5839 14.8119 12.9722 14.5555C12.3606 14.2992 11.704 14.1672 11.0408 14.1672C10.3775 14.1672 9.72096 14.2992 9.1093 14.5555C8.49763 14.8119 7.94312 15.1875 7.47809 15.6603C7.01306 16.1332 6.64681 16.6939 6.40071 17.3098C6.1546 17.9256 6.03356 18.5843 6.04464 19.2474C6.04455 19.4862 6.06085 19.7247 6.09344 19.9613H3.54205C3.54205 19.9613 2.76687 19.9543 2.68462 19.9334C2.1604 19.8121 0.414856 19.2014 1.19979 16.5999C1.32912 16.1969 1.39681 15.7767 1.40056 15.3534V8.62921C1.40233 7.87876 1.66004 7.15136 2.13112 6.56718L5.4772 2.45847C5.65473 2.24084 5.87841 2.06539 6.13208 1.94482C6.38574 1.82426 6.66304 1.7616 6.9439 1.76137C14.6533 0.811334 22.45 0.808057 30.1601 1.75161C30.1981 1.75606 30.2362 1.75839 30.2745 1.75859C31.4723 1.77367 32.634 2.17132 33.5899 2.89346L40.296 7.99485C40.7681 8.35221 41.3277 8.57612 41.916 8.64315L51.3882 9.74736C52.7584 9.90574 54.0225 10.5623 54.94 11.5922C55.8575 12.622 56.3644 13.9533 56.3641 15.3325V15.603C56.372 15.8457 56.4431 16.0822 56.5705 16.2889C56.7485 16.7185 56.8112 17.1872 56.7523 17.6484C56.6935 18.1097 56.5151 18.5476 56.2348 18.9187C55.9546 19.2898 55.5823 19.5812 55.1548 19.7641C54.7272 19.9469 54.2593 20.0149 53.7974 19.9613Z" stroke={basicColor[2]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M16.0328 19.2473C16.0329 19.486 16.0166 19.7246 15.984 19.9611C15.816 21.1542 15.2227 22.2466 14.3133 23.0369C13.4038 23.8273 12.2395 24.2626 11.0346 24.2626C9.82965 24.2626 8.66529 23.8273 7.75585 23.0369C6.84641 22.2466 6.25309 21.1542 6.08514 19.9611C6.05255 19.7246 6.03625 19.486 6.03634 19.2473C6.02526 18.5841 6.14631 17.9255 6.39241 17.3096C6.63852 16.6937 7.00476 16.133 7.46979 15.6602C7.93482 15.1873 8.48933 14.8117 9.101 14.5554C9.71267 14.299 10.3692 14.167 11.0325 14.167C11.6957 14.167 12.3523 14.299 12.9639 14.5554C13.5756 14.8117 14.1301 15.1873 14.5951 15.6602C15.0602 16.133 15.4264 16.6937 15.6725 17.3096C15.9186 17.9255 16.0397 18.5841 16.0286 19.2473H16.0328Z" stroke={basicColor[2]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M51.7236 19.2473C51.7232 19.4861 51.7064 19.7246 51.6734 19.9611C51.5054 21.1543 50.9121 22.2466 50.0027 23.037C49.0932 23.8274 47.9289 24.2626 46.724 24.2626C45.5191 24.2626 44.3547 23.8274 43.4453 23.037C42.5358 22.2466 41.9425 21.1543 41.7746 19.9611C41.7415 19.7246 41.7247 19.4861 41.7244 19.2473C41.7244 17.9221 42.2508 16.6511 43.1879 15.714C44.125 14.7769 45.3959 14.2505 46.7212 14.2505C48.0464 14.2505 49.3174 14.7769 50.2545 15.714C51.1915 16.6511 51.718 17.9221 51.718 19.2473H51.7236Z" stroke={basicColor[2]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M41.3694 8.53993L27.0091 8.20671C26.709 8.19854 26.4162 8.11234 26.1595 7.95662C25.9028 7.8009 25.6911 7.58101 25.5452 7.31861L22.0764 1.11023" stroke={basicColor[2]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M18.0405 1C19.2077 2.97018 20.2606 5.00582 21.1942 7.09684C21.2693 7.23659 21.3078 7.3931 21.306 7.55176C21.3042 7.71041 21.2622 7.86602 21.1839 8.00404C21.1057 8.14205 20.9937 8.25797 20.8584 8.34094C20.7232 8.42392 20.5691 8.47124 20.4106 8.47849L5.69066 7.86365C5.40617 7.84713 5.13014 7.76075 4.88697 7.61218C4.6438 7.4636 4.44099 7.2574 4.29646 7.01179L3.20898 5.24534" stroke={basicColor[2]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>

                    <p style={{color: basicColor[2]}}>SUV</p>
                </Col>
            );
        }
        if(bodyStyleList.includes('Coupe')) {
            table.push(
                <Col onClick={() => bodyListFunc('Coupe', 3)} xs="6" md="6" lg='4'>
                    <svg width="58" height="21" viewBox="0 0 58 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.7338 15.1363C56.6181 16.3423 56.3685 16.5012 55.2197 16.6699L49.845 17.4144C49.7919 17.4218 49.7384 17.4264 49.6847 17.4284C49.7869 17.0763 49.839 16.7117 49.8395 16.3451C49.8402 15.7866 49.7175 15.2348 49.4801 14.7293C49.2426 14.2238 48.8963 13.7771 48.466 13.4211C48.0357 13.0651 47.5319 12.8087 46.9909 12.6702C46.4498 12.5317 45.8849 12.5145 45.3364 12.6199C44.788 12.7253 44.2696 12.9507 43.8185 13.28C43.3673 13.6092 42.9946 14.0341 42.7269 14.5242C42.4592 15.0144 42.3032 15.5577 42.2701 16.1152C42.2369 16.6727 42.3275 17.2306 42.5352 17.749L15.7959 16.9125C15.8237 16.7279 15.8377 16.5415 15.8377 16.3548C15.8377 15.3502 15.4386 14.3867 14.7282 13.6763C14.0178 12.9659 13.0543 12.5668 12.0497 12.5668C11.045 12.5668 10.0815 12.9659 9.3711 13.6763C8.66071 14.3867 8.26161 15.3502 8.26161 16.3548C8.26161 16.4664 8.26161 16.5737 8.27555 16.6825L3.35821 16.5152C3.11719 16.5099 2.87992 16.4544 2.6615 16.3524C2.44307 16.2504 2.24827 16.104 2.08948 15.9226C1.42173 15.2483 1.03333 14.3466 1.00205 13.3981C0.970766 12.4495 1.29891 11.5242 1.92078 10.8073C2.13521 10.5391 2.2661 10.2138 2.29722 9.87181L2.59279 6.66515C2.60604 6.50914 2.67142 6.36213 2.77841 6.24782C2.88539 6.1335 3.02775 6.05852 3.18254 6.03497L8.12777 5.23749C8.27834 5.17754 8.50281 5.08831 8.77607 4.98514C13.96 2.86016 19.5166 1.79358 25.1189 1.84819C33.0045 2.00852 41.5956 6.07959 42.8169 6.82688C43.068 6.97803 43.3524 7.06516 43.645 7.08062C56.3769 7.80561 56.9736 12.6491 56.7338 15.1363Z" stroke={basicColor[3]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M49.8395 16.3423C49.8391 16.7088 49.787 17.0735 49.6848 17.4255C49.4115 18.3433 48.801 19.1235 47.976 19.6095C47.1509 20.0954 46.1725 20.251 45.2374 20.0449C44.3023 19.8389 43.4799 19.2864 42.9355 18.4987C42.3911 17.711 42.1651 16.7464 42.3029 15.7989C42.4407 14.8513 42.9321 13.9911 43.6783 13.3911C44.4245 12.7911 45.3702 12.4958 46.3253 12.5646C47.2803 12.6334 48.1739 13.0613 48.8264 13.7621C49.4788 14.4629 49.8418 15.3847 49.8423 16.3423H49.8395Z" stroke={basicColor[3]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M15.8351 16.3424C15.8351 16.5291 15.8212 16.7155 15.7933 16.9001C15.6559 17.8178 15.1865 18.6531 14.474 19.2476C13.7616 19.842 12.8558 20.1544 11.9284 20.1253C11.001 20.0963 10.1165 19.7278 9.44269 19.0899C8.76889 18.452 8.35267 17.589 8.27298 16.6645C8.26461 16.5558 8.25903 16.4484 8.25903 16.3369C8.25903 15.3322 8.65813 14.3687 9.36853 13.6583C10.0789 12.9479 11.0424 12.5488 12.0471 12.5488C13.0517 12.5488 14.0152 12.9479 14.7256 13.6583C15.436 14.3687 15.8351 15.3322 15.8351 16.3369V16.3424Z" stroke={basicColor[3]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M12.0022 4.18066C12.1521 4.7172 12.4491 5.20114 12.8595 5.57783C13.27 5.95452 13.7775 6.20895 14.3249 6.3124C17.5149 7.24233 37.6234 8.08443 38.3819 8.10673C39.1668 8.12904 41.7112 7.90179 42.1169 7.07503" stroke={basicColor[3]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>
                    <p style={{color: basicColor[3]}}>Coupe</p>
                </Col>
            );
        }
        if(bodyStyleList.includes('Convertible')) {
            table.push(
                <Col onClick={() => bodyListFunc('Convertible', 4)} xs="6" md="6" lg='4' className="px-0">
                    <svg width="58" height="19" viewBox="0 0 58 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.5434 13.5784C50.543 13.9979 50.481 14.415 50.3594 14.8165V14.8165C50.2834 15.0656 50.184 15.3069 50.0624 15.5373C49.6758 16.2543 49.1022 16.8534 48.4027 17.2709C47.7031 17.6884 46.9036 17.9089 46.089 17.9089C45.2743 17.9089 44.4748 17.6884 43.7753 17.2709C43.0757 16.8534 42.5022 16.2543 42.1155 15.5373C42.0569 15.4229 42.0026 15.3072 41.9552 15.1887C41.745 14.6779 41.6375 14.1307 41.6387 13.5784C41.6959 12.4352 42.1903 11.3577 43.0197 10.5688C43.8491 9.77991 44.9499 9.33997 46.0945 9.33997C47.2392 9.33997 48.34 9.77991 49.1694 10.5688C49.9988 11.3577 50.4932 12.4352 50.5504 13.5784H50.5434Z" stroke={basicColor[4]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M16.2604 13.5784C16.26 13.9979 16.198 14.415 16.0764 14.8165V14.8165C16.0016 15.066 15.9021 15.3075 15.7794 15.5373C15.3785 16.2843 14.775 16.9031 14.0382 17.3227C13.3015 17.7422 12.4613 17.9455 11.6143 17.9091C10.7672 17.8727 9.9476 17.5981 9.24955 17.1169C8.5515 16.6357 8.00331 15.9674 7.66794 15.1887C7.57394 14.9602 7.50114 14.7236 7.45045 14.4818V14.4818C7.38635 14.185 7.3541 13.8821 7.35425 13.5784C7.41146 12.4352 7.90589 11.3577 8.73525 10.5688C9.56462 9.77991 10.6655 9.33997 11.8101 9.33997C12.9548 9.33997 14.0556 9.77991 14.885 10.5688C15.7143 11.3577 16.2088 12.4352 16.266 13.5784H16.2604Z" stroke={basicColor[4]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M56.4878 13.8183C56.5803 14.2594 56.5037 14.7192 56.2731 15.1065C56.1908 15.2386 56.0762 15.3475 55.94 15.4229C55.8039 15.4983 55.6508 15.5377 55.4951 15.5374H50.0578C50.1793 15.307 50.2787 15.0657 50.3547 14.8165C50.4764 14.4151 50.5384 13.998 50.5388 13.5785C50.4816 12.4353 49.9871 11.3578 49.1578 10.5689C48.3284 9.78001 47.2275 9.34006 46.0829 9.34006C44.9383 9.34006 43.8374 9.78001 43.008 10.5689C42.1787 11.3578 41.6843 12.4353 41.627 13.5785C41.6258 14.1308 41.7334 14.678 41.9435 15.1888C41.9909 15.3073 42.0453 15.423 42.1039 15.5374H15.7786C15.9012 15.3075 16.0007 15.0661 16.0755 14.8165V14.8165C16.1971 14.4151 16.2591 13.998 16.2596 13.5785C16.2023 12.4353 15.7079 11.3578 14.8785 10.5689C14.0492 9.78001 12.9483 9.34006 11.8037 9.34006C10.659 9.34006 9.55819 9.78001 8.72882 10.5689C7.89946 11.3578 7.40503 12.4353 7.34782 13.5785C7.34767 13.8822 7.37992 14.1851 7.44402 14.4819L7.20422 14.4513H3.06902C2.44826 14.3253 1.86913 14.0453 1.38482 13.6371C1.26394 13.5412 1.16646 13.4191 1.09979 13.2799C1.03312 13.1408 0.999002 12.9883 1.00002 12.834V10.6521C1.10146 10.1803 1.33784 9.74826 1.68039 9.40844C1.79817 9.28494 1.88977 9.13889 1.94966 8.97908C2.00956 8.81928 2.03653 8.64901 2.02894 8.47851L1.93553 5.9564C1.92773 5.77722 1.97772 5.60027 2.07813 5.45166C2.17854 5.30305 2.32406 5.19065 2.49321 5.13103C5.24955 4.1788 14.178 3.90135 16.3822 3.84837C16.5345 3.84422 16.6833 3.80198 16.8151 3.7255C16.9469 3.64903 17.0574 3.54076 17.1365 3.41059L17.973 2.03591C18.0299 1.93879 18.1097 1.8571 18.2054 1.79803C18.3012 1.73896 18.41 1.70431 18.5223 1.69712C18.7544 1.68639 18.983 1.75634 19.1692 1.8951C19.329 2.01896 19.5248 2.08748 19.7269 2.09028H20.0894C20.1844 2.09028 20.2785 2.10899 20.3663 2.14535C20.4541 2.18171 20.5339 2.23501 20.6011 2.3022C20.8227 2.52425 20.9475 2.82498 20.9482 3.13872V4.8508C20.9482 4.86417 20.9509 4.8774 20.956 4.88975C20.9611 4.9021 20.9686 4.91332 20.9781 4.92277C20.9875 4.93222 20.9987 4.93972 21.0111 4.94483C21.0234 4.94995 21.0367 4.95258 21.05 4.95258H37.2911C37.5281 4.94142 37.7651 4.93027 38.0035 4.92191C47.5649 4.59706 54.9863 7.89295 56.0473 8.75178C57.1319 9.6343 56.7932 11.2613 56.3177 12.3474C56.0096 13.0543 56.1462 13.3415 56.2787 13.4628C56.3852 13.5554 56.4586 13.6802 56.4878 13.8183V13.8183Z" stroke={basicColor[4]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M28.0669 0.817383L37.6339 4.93864" stroke={basicColor[4]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M20.9319 8.71777H25.4759" stroke={basicColor[4]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>

                    <p style={{color: basicColor[4]}}>Convertible</p>
                </Col>
            );
        }

        if(bodyStyleList.includes('Sports')) {
            table.push(
                <Col onClick={() => bodyListFunc('Sports', 5)} xs="6" md="6" lg='4'>
                    <svg width="59" height="22" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.2556 15.9385C51.2552 16.358 51.1932 16.7751 51.0716 17.1766V17.1766C50.9956 17.4257 50.8961 17.667 50.7746 17.8974C50.3879 18.6144 49.8144 19.2135 49.1148 19.631C48.4153 20.0486 47.6158 20.269 46.8011 20.269C45.9865 20.269 45.187 20.0486 44.4874 19.631C43.7879 19.2135 43.2143 18.6144 42.8277 17.8974C42.7691 17.783 42.7147 17.6673 42.6673 17.5488C42.4572 17.038 42.3496 16.4909 42.3508 15.9385C42.4081 14.7953 42.9025 13.7178 43.7318 12.9289C44.5612 12.14 45.6621 11.7001 46.8067 11.7001C47.9513 11.7001 49.0522 12.14 49.8816 12.9289C50.7109 13.7178 51.2054 14.7953 51.2626 15.9385H51.2556Z" stroke={basicColor[5]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M16.9706 15.9385C16.9702 16.358 16.9082 16.7751 16.7866 17.1766V17.1766C16.7118 17.4261 16.6123 17.6676 16.4896 17.8974C16.0887 18.6444 15.4852 19.2632 14.7484 19.6828C14.0117 20.1023 13.1715 20.3056 12.3245 20.2692C11.4774 20.2328 10.6578 19.9582 9.95975 19.477C9.2617 18.9958 8.71351 18.3275 8.37815 17.5488C8.28415 17.3204 8.21134 17.0837 8.16065 16.842V16.842C8.09655 16.5451 8.0643 16.2422 8.06445 15.9385C8.12167 14.7953 8.61609 13.7178 9.44546 12.9289C10.2748 12.14 11.3757 11.7001 12.5203 11.7001C13.665 11.7001 14.7658 12.14 15.5952 12.9289C16.4245 13.7178 16.919 14.7953 16.9762 15.9385H16.9706Z" stroke={basicColor[5]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M57.1978 16.1784C57.2903 16.6196 57.2137 17.0794 56.9831 17.4666C56.9008 17.5987 56.7861 17.7076 56.65 17.783C56.5138 17.8584 56.3607 17.8978 56.2051 17.8975H50.7677C50.8893 17.6671 50.9887 17.4258 51.0647 17.1767C51.1863 16.7752 51.2483 16.3581 51.2487 15.9386C51.1915 14.7954 50.6971 13.7179 49.8677 12.929C49.0384 12.1401 47.9375 11.7002 46.7929 11.7002C45.6482 11.7002 44.5474 12.1401 43.718 12.929C42.8886 13.7179 42.3942 14.7954 42.337 15.9386C42.3358 16.4909 42.4433 17.0381 42.6535 17.5489C42.7009 17.6674 42.7553 17.7831 42.8138 17.8975H16.4885C16.6112 17.6677 16.7107 17.4262 16.7855 17.1767C16.9071 16.7752 16.9691 16.3581 16.9695 15.9386C16.9123 14.7954 16.4179 13.7179 15.5885 12.929C14.7591 12.1401 13.6583 11.7002 12.5136 11.7002C11.369 11.7002 10.2681 12.1401 9.43878 12.929C8.60942 13.7179 8.11499 14.7954 8.05778 15.9386C8.05763 16.2423 8.08988 16.5452 8.15398 16.842L7.91418 16.8114H3.77898C3.15822 16.6854 2.57909 16.4054 2.09478 15.9972C1.9739 15.9013 1.87642 15.7792 1.80975 15.64C1.74308 15.5009 1.70896 15.3484 1.70998 15.1941V13.0122C1.81142 12.5404 2.0478 12.1084 2.39035 11.7686C2.50813 11.645 2.59973 11.499 2.65962 11.3392C2.71952 11.1794 2.74649 11.0091 2.7389 10.8386L2.64549 8.31651C2.63769 8.13733 2.68768 7.96038 2.78809 7.81177C2.8885 7.66316 3.03402 7.55076 3.20317 7.49114C5.95951 6.5389 12.6159 6.26146 14.8202 6.20848C14.9725 6.20433 15.1213 6.16209 15.253 6.08561C15.3848 6.00914 15.4953 5.90087 15.5744 5.7707L16.411 4.39602C16.4678 4.29889 16.5476 4.21721 16.6434 4.15814C16.7392 4.09907 16.848 4.06442 16.9603 4.05723C17.1923 4.04649 17.4209 4.11645 17.6072 4.2552C17.767 4.37907 17.9627 4.44758 18.1649 4.45039H18.5273C18.6224 4.45039 18.7165 4.4691 18.8043 4.50546C18.8921 4.54182 18.9718 4.59512 19.039 4.66231C19.2607 4.88436 19.3855 5.18508 19.3862 5.49883V7.21091C19.3862 7.22427 19.3888 7.23751 19.3939 7.24986C19.399 7.26221 19.4065 7.27342 19.416 7.28288C19.4254 7.29233 19.4367 7.29982 19.449 7.30494C19.4614 7.31005 19.4746 7.31269 19.488 7.31269L38.001 8.4487C38.238 8.43755 38.4751 8.42639 38.7135 8.41803C50.7677 8.85759 55.9221 11.6292 56.9831 12.488C58.0678 13.3705 57.2306 14.242 57.0277 14.7075C56.7196 15.4144 56.8562 15.7016 56.9887 15.8229C57.0951 15.9155 57.1685 16.0403 57.1978 16.1784Z" stroke={basicColor[5]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M21.6431 11.0779H26.1871" stroke={basicColor[5]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M17.7601 4.73821C21.8753 2.18747 33.7071 -0.442478 48.1128 9.4437" stroke={basicColor[5]} stroke-width="1.7"/>
                        <path d="M5.09497 3.19189L6.01166 6.51837" stroke={basicColor[5]} stroke-width="1.7"/>
                        <path d="M1.70996 2.17499L7.9794 3.07574" stroke={basicColor[5]} stroke-width="1.7"/>
                    </svg>

                    <p style={{color: basicColor[5]}}>Sports</p>
                </Col>
            );
        }

        if(bodyStyleList.includes('Truck')) {
            table.push(
                <Col onClick={() => bodyListFunc('Truck', 6)} xs="6" md="6" lg='4'>
                    <svg width="55" height="25" viewBox="0 0 55 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.5596 19.0987H51.3606C51.7702 19.1446 52.1852 19.0864 52.5643 18.9296C52.9434 18.7728 53.2736 18.523 53.5221 18.2049C53.7706 17.8868 53.9288 17.5114 53.981 17.116C54.0332 16.7206 53.9776 16.3188 53.8198 15.9506C53.7068 15.7733 53.6437 15.5706 53.6368 15.3625V15.1307C53.637 13.9483 53.1875 12.8071 52.3739 11.9242C51.5602 11.0414 50.4392 10.4786 49.2242 10.3428L44.5335 9.39619C44.0117 9.33873 43.5155 9.14679 43.0968 8.84044L38.2319 3.38535C37.3842 2.76629 36.3541 2.42541 35.2918 2.41248C35.2579 2.41231 35.2241 2.41032 35.1904 2.4065C31.9404 2.02202 25.7366 1.82092 22.4684 1.80322M40.66 18.4867C40.6603 18.6914 40.6752 18.8959 40.7045 19.0987H15.3591M6.5847 19.0987H4.32217C4.32217 19.0987 3.63475 19.0927 3.56181 19.0748C3.09694 18.9708 2.06781 18.573 2.06781 16.4091C2.06799 15.7924 2.06459 15.5038 2.06791 15.141V9.37666" stroke={basicColor[6]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M15.0501 19.1416C15.0502 19.3463 15.0361 19.5508 15.0079 19.7536C14.8625 20.7765 14.3488 21.713 13.5614 22.3906C12.774 23.0683 11.7659 23.4414 10.7228 23.4414C9.67956 23.4414 8.67149 23.0683 7.8841 22.3906C7.09672 21.713 6.58304 20.7765 6.43763 19.7536C6.40941 19.5508 6.3953 19.3463 6.39538 19.1416C6.38579 18.5731 6.49058 18.0083 6.70366 17.4803C6.91673 16.9523 7.23382 16.4716 7.63644 16.0662C8.03906 15.6608 8.51914 15.3388 9.04871 15.119C9.57829 14.8993 10.1467 14.7861 10.7209 14.7861C11.2951 14.7861 11.8636 14.8993 12.3932 15.119C12.9227 15.3388 13.4028 15.6608 13.8055 16.0662C14.2081 16.4716 14.5252 16.9523 14.7382 17.4803C14.9513 18.0083 15.0561 18.5731 15.0465 19.1416H15.0501Z" stroke={basicColor[6]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M49.6722 19.1057C49.6719 19.3122 49.6574 19.5184 49.6288 19.7228C49.4834 20.7543 48.9698 21.6986 48.1826 22.3819C47.3954 23.0652 46.3875 23.4414 45.3445 23.4414C44.3016 23.4414 43.2937 23.0652 42.5065 22.3819C41.7192 21.6986 41.2057 20.7543 41.0603 19.7228C41.0317 19.5184 41.0172 19.3122 41.0168 19.1057C41.0168 17.9601 41.4725 16.8614 42.2837 16.0513C43.0948 15.2412 44.195 14.7861 45.3421 14.7861C46.4892 14.7861 47.5894 15.2412 48.4005 16.0513C49.2117 16.8614 49.6674 17.9601 49.6674 19.1057H49.6722Z" stroke={basicColor[6]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M44.262 9.37659L29.5345 9.0897C29.2268 9.08266 28.9264 9.00846 28.6632 8.87438C28.3999 8.74031 28.1828 8.55099 28.0332 8.32507L28.0334 2.88507" stroke={basicColor[6]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M22.6235 0.721191C22.6235 3.14159 22.6025 5.91053 22.6025 8.17724L22.6237 8.93603L21.9076 9.37655H0.985352" stroke={basicColor[6]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>

                    <p style={{color: basicColor[6]}}>Truck</p>
                </Col>
            );
        }


        if(bodyStyleList.includes('Pickup Truck')) {
            table.push(
                <Col onClick={() => bodyListFunc('Pickup Truck', 7)} xs="6" md="6" lg='4'>
                    <svg width="55" height="25" viewBox="0 0 55 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.5596 19.0987H51.3606C51.7702 19.1446 52.1852 19.0864 52.5643 18.9296C52.9434 18.7728 53.2736 18.523 53.5221 18.2049C53.7706 17.8868 53.9288 17.5114 53.981 17.116C54.0332 16.7206 53.9776 16.3188 53.8198 15.9506C53.7068 15.7733 53.6437 15.5706 53.6368 15.3625V15.1307C53.637 13.9483 53.1875 12.8071 52.3739 11.9242C51.5602 11.0414 50.4392 10.4786 49.2242 10.3428L44.5335 9.39619C44.0117 9.33873 43.5155 9.14679 43.0968 8.84044L38.2319 3.38535C37.3842 2.76629 36.3541 2.42541 35.2918 2.41248C35.2579 2.41231 35.2241 2.41032 35.1904 2.4065C31.9404 2.02202 25.7366 1.82092 22.4684 1.80322M40.66 18.4867C40.6603 18.6914 40.6752 18.8959 40.7045 19.0987H15.3591M6.5847 19.0987H4.32217C4.32217 19.0987 3.63475 19.0927 3.56181 19.0748C3.09694 18.9708 2.06781 18.573 2.06781 16.4091C2.06799 15.7924 2.06459 15.5038 2.06791 15.141V9.37666" stroke={basicColor[7]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M15.0501 19.1416C15.0502 19.3463 15.0361 19.5508 15.0079 19.7536C14.8625 20.7765 14.3488 21.713 13.5614 22.3906C12.774 23.0683 11.7659 23.4414 10.7228 23.4414C9.67956 23.4414 8.67149 23.0683 7.8841 22.3906C7.09672 21.713 6.58304 20.7765 6.43763 19.7536C6.40941 19.5508 6.3953 19.3463 6.39538 19.1416C6.38579 18.5731 6.49058 18.0083 6.70366 17.4803C6.91673 16.9523 7.23382 16.4716 7.63644 16.0662C8.03906 15.6608 8.51914 15.3388 9.04871 15.119C9.57829 14.8993 10.1467 14.7861 10.7209 14.7861C11.2951 14.7861 11.8636 14.8993 12.3932 15.119C12.9227 15.3388 13.4028 15.6608 13.8055 16.0662C14.2081 16.4716 14.5252 16.9523 14.7382 17.4803C14.9513 18.0083 15.0561 18.5731 15.0465 19.1416H15.0501Z" stroke={basicColor[7]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M49.6722 19.1057C49.6719 19.3122 49.6574 19.5184 49.6288 19.7228C49.4834 20.7543 48.9698 21.6986 48.1826 22.3819C47.3954 23.0652 46.3875 23.4414 45.3445 23.4414C44.3016 23.4414 43.2937 23.0652 42.5065 22.3819C41.7192 21.6986 41.2057 20.7543 41.0603 19.7228C41.0317 19.5184 41.0172 19.3122 41.0168 19.1057C41.0168 17.9601 41.4725 16.8614 42.2837 16.0513C43.0948 15.2412 44.195 14.7861 45.3421 14.7861C46.4892 14.7861 47.5894 15.2412 48.4005 16.0513C49.2117 16.8614 49.6674 17.9601 49.6674 19.1057H49.6722Z" stroke={basicColor[7]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M44.262 9.37659L29.5345 9.0897C29.2268 9.08266 28.9264 9.00846 28.6632 8.87438C28.3999 8.74031 28.1828 8.55099 28.0332 8.32507L28.0334 2.88507" stroke={basicColor[7]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M22.6235 0.721191C22.6235 3.14159 22.6025 5.91053 22.6025 8.17724L22.6237 8.93603L21.9076 9.37655H0.985352" stroke={basicColor[7]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>

                    <p style={{color: basicColor[7]}}>Pickup Truck</p>
                </Col>
            );
        }


        if(bodyStyleList.includes('Wagon')) {
            table.push(
                <Col onClick={() => bodyListFunc('Wagon', 8)} xs="6" md="6" lg='4'>
                    <svg width="55" height="25" viewBox="0 0 55 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.5596 19.0987H51.3606C51.7702 19.1446 52.1852 19.0864 52.5643 18.9296C52.9434 18.7728 53.2736 18.523 53.5221 18.2049C53.7706 17.8868 53.9288 17.5114 53.981 17.116C54.0332 16.7206 53.9776 16.3188 53.8198 15.9506C53.7068 15.7733 53.6437 15.5706 53.6368 15.3625V15.1307C53.637 13.9483 53.1875 12.8071 52.3739 11.9242C51.5602 11.0414 50.4392 10.4786 49.2242 10.3428L44.5335 9.39619C44.0117 9.33873 43.5155 9.14679 43.0968 8.84044L38.2319 3.38535C37.3842 2.76629 36.3541 2.42541 35.2918 2.41248C35.2579 2.41231 35.2241 2.41032 35.1904 2.4065C31.9404 2.02202 25.7366 1.82092 22.4684 1.80322M40.66 18.4867C40.6603 18.6914 40.6752 18.8959 40.7045 19.0987H15.3591M6.5847 19.0987H4.32217C4.32217 19.0987 3.63475 19.0927 3.56181 19.0748C3.09694 18.9708 2.06781 18.573 2.06781 16.4091C2.06799 15.7924 2.06459 15.5038 2.06791 15.141V9.37666" stroke={basicColor[8]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M15.0501 19.1416C15.0502 19.3463 15.0361 19.5508 15.0079 19.7536C14.8625 20.7765 14.3488 21.713 13.5614 22.3906C12.774 23.0683 11.7659 23.4414 10.7228 23.4414C9.67956 23.4414 8.67149 23.0683 7.8841 22.3906C7.09672 21.713 6.58304 20.7765 6.43763 19.7536C6.40941 19.5508 6.3953 19.3463 6.39538 19.1416C6.38579 18.5731 6.49058 18.0083 6.70366 17.4803C6.91673 16.9523 7.23382 16.4716 7.63644 16.0662C8.03906 15.6608 8.51914 15.3388 9.04871 15.119C9.57829 14.8993 10.1467 14.7861 10.7209 14.7861C11.2951 14.7861 11.8636 14.8993 12.3932 15.119C12.9227 15.3388 13.4028 15.6608 13.8055 16.0662C14.2081 16.4716 14.5252 16.9523 14.7382 17.4803C14.9513 18.0083 15.0561 18.5731 15.0465 19.1416H15.0501Z" stroke={basicColor[8]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M49.6722 19.1057C49.6719 19.3122 49.6574 19.5184 49.6288 19.7228C49.4834 20.7543 48.9698 21.6986 48.1826 22.3819C47.3954 23.0652 46.3875 23.4414 45.3445 23.4414C44.3016 23.4414 43.2937 23.0652 42.5065 22.3819C41.7192 21.6986 41.2057 20.7543 41.0603 19.7228C41.0317 19.5184 41.0172 19.3122 41.0168 19.1057C41.0168 17.9601 41.4725 16.8614 42.2837 16.0513C43.0948 15.2412 44.195 14.7861 45.3421 14.7861C46.4892 14.7861 47.5894 15.2412 48.4005 16.0513C49.2117 16.8614 49.6674 17.9601 49.6674 19.1057H49.6722Z" stroke={basicColor[8]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M44.262 9.37659L29.5345 9.0897C29.2268 9.08266 28.9264 9.00846 28.6632 8.87438C28.3999 8.74031 28.1828 8.55099 28.0332 8.32507L28.0334 2.88507" stroke={basicColor[8]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M22.6235 0.721191C22.6235 3.14159 22.6025 5.91053 22.6025 8.17724L22.6237 8.93603L21.9076 9.37655H0.985352" stroke={basicColor[8]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>

                    <p style={{color: basicColor[8]}}>Wagon</p>
                </Col>
            );
        }


        if(bodyStyleList.includes('Minivan')) {
            table.push(
                <Col onClick={() => bodyListFunc('Minivan', 9)} xs="6" md="6" lg='4'>
                    <svg width="55" height="25" viewBox="0 0 55 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.5596 19.0987H51.3606C51.7702 19.1446 52.1852 19.0864 52.5643 18.9296C52.9434 18.7728 53.2736 18.523 53.5221 18.2049C53.7706 17.8868 53.9288 17.5114 53.981 17.116C54.0332 16.7206 53.9776 16.3188 53.8198 15.9506C53.7068 15.7733 53.6437 15.5706 53.6368 15.3625V15.1307C53.637 13.9483 53.1875 12.8071 52.3739 11.9242C51.5602 11.0414 50.4392 10.4786 49.2242 10.3428L44.5335 9.39619C44.0117 9.33873 43.5155 9.14679 43.0968 8.84044L38.2319 3.38535C37.3842 2.76629 36.3541 2.42541 35.2918 2.41248C35.2579 2.41231 35.2241 2.41032 35.1904 2.4065C31.9404 2.02202 25.7366 1.82092 22.4684 1.80322M40.66 18.4867C40.6603 18.6914 40.6752 18.8959 40.7045 19.0987H15.3591M6.5847 19.0987H4.32217C4.32217 19.0987 3.63475 19.0927 3.56181 19.0748C3.09694 18.9708 2.06781 18.573 2.06781 16.4091C2.06799 15.7924 2.06459 15.5038 2.06791 15.141V9.37666" stroke={basicColor[9]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M15.0501 19.1416C15.0502 19.3463 15.0361 19.5508 15.0079 19.7536C14.8625 20.7765 14.3488 21.713 13.5614 22.3906C12.774 23.0683 11.7659 23.4414 10.7228 23.4414C9.67956 23.4414 8.67149 23.0683 7.8841 22.3906C7.09672 21.713 6.58304 20.7765 6.43763 19.7536C6.40941 19.5508 6.3953 19.3463 6.39538 19.1416C6.38579 18.5731 6.49058 18.0083 6.70366 17.4803C6.91673 16.9523 7.23382 16.4716 7.63644 16.0662C8.03906 15.6608 8.51914 15.3388 9.04871 15.119C9.57829 14.8993 10.1467 14.7861 10.7209 14.7861C11.2951 14.7861 11.8636 14.8993 12.3932 15.119C12.9227 15.3388 13.4028 15.6608 13.8055 16.0662C14.2081 16.4716 14.5252 16.9523 14.7382 17.4803C14.9513 18.0083 15.0561 18.5731 15.0465 19.1416H15.0501Z" stroke={basicColor[9]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M49.6722 19.1057C49.6719 19.3122 49.6574 19.5184 49.6288 19.7228C49.4834 20.7543 48.9698 21.6986 48.1826 22.3819C47.3954 23.0652 46.3875 23.4414 45.3445 23.4414C44.3016 23.4414 43.2937 23.0652 42.5065 22.3819C41.7192 21.6986 41.2057 20.7543 41.0603 19.7228C41.0317 19.5184 41.0172 19.3122 41.0168 19.1057C41.0168 17.9601 41.4725 16.8614 42.2837 16.0513C43.0948 15.2412 44.195 14.7861 45.3421 14.7861C46.4892 14.7861 47.5894 15.2412 48.4005 16.0513C49.2117 16.8614 49.6674 17.9601 49.6674 19.1057H49.6722Z" stroke={basicColor[9]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M44.262 9.37659L29.5345 9.0897C29.2268 9.08266 28.9264 9.00846 28.6632 8.87438C28.3999 8.74031 28.1828 8.55099 28.0332 8.32507L28.0334 2.88507" stroke={basicColor[9]} stroke-width="1.7" stroke-miterlimit="10"/>
                        <path d="M22.6235 0.721191C22.6235 3.14159 22.6025 5.91053 22.6025 8.17724L22.6237 8.93603L21.9076 9.37655H0.985352" stroke={basicColor[9]} stroke-width="1.7" stroke-miterlimit="10"/>
                    </svg>

                    <p style={{color: basicColor[9]}}>Minivan</p>
                </Col>
            );
        }
        return table;
    }    

    // Get location using HTML 5 Browser Geo Location
    function GetLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(ShowPosition, ShowError);
        }
        else{
            console.log("Geo location is not supported");
        }
    }
    
    // Get location using HTML 5 Browser Geo Location
    function ShowPosition(position){
        setLoading(true);
        var latLong = position.coords.latitude + "," + position.coords.longitude;
        // Save the lattitude and longitude fetched from the browsers
        // Geo Location into the state variable of current location
        setCurrentLatLng({ lat: position.coords.latitude, lng: position.coords.longitude });
        // Get zip code from the Google's API using the current lattitude and longitude
        GetZipFromLatLong(latLong).then(doc => {
            if(doc.results.length > 0){
                // Set the fetched zip code into the state variable
                setZipCode(doc.results[0].address_components[1].long_name + ", " + doc.results[0].address_components[3].short_name + " - " + doc.results[0].address_components[0].long_name);
                // Add the zip code into the filters array
                filters['zipCode'] = doc.results[0].address_components[0].long_name;
                setFilters(filters);
                console.log('chalaZIPPP')
                FilterQueryString(filters);
                setLoading(false)
            }
            // If the zip code is not available
            else{
                var split = doc.plus_code.compound_code.split(" ");
                setZipCode(split[1] + " " + split[2] + " " + split[3])
                // console.log(split, "asdadadadadad")
                // setZipCode(doc.plus_code.compound_code);
                // setZipCode("N/A");
            }
        })
        .catch(error => {
            console.log(error.message);
            setLoading(false)
        });
    }
    
    // If there is an error getting browsers location
    function ShowError(error){
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



    // This use effect will run only on first render
    useEffect(() => {
        console.log('it is woring')
        // Get the list of makes from vin audit api and store it in the makes state variable
        console.log('Filters',props.carMake)
        if(props.bodyStyle){
            filters['bodyStyle'] = props.bodyStyle
            var index = basicBodyStyle.findIndex(a => a === props.bodyStyle)
            if(index !== -1){
                filters['bodyStyle'] = props.bodyStyle
                basicColorSet(index)
            }
        }
        if(props.carMake){
            filters['carMake'] = props.carMake
        }
        if(props.carModel){
            filters['carModel'] = props.carModel
        }
        if(props.minPrice){
            filters['minPrice'] = props.minPrice
        }
        if(props.yearCar){
            filters['yearCar'] = props.yearCar
        }
        if(props.isUsed){
            filters['isUsed'] = props.isUsed
        }

        console.log("Filters",filters)
        
        GetAllMakes().then(doc => {
           setMakeList(doc.makes);
            console.log('chala',doc.makes)
            if(props.carMake){
                if(doc.makes.findIndex(a => a.name === props.carMake) !== -1){
                    console.log('ye challlaa')  
                    setModelCollapseOpen(true)
                    handleMake2(props.carMake)
                }
            }
            
        })
        .catch(error => {
            alert(error.message);
        });

        GetFiltersList().then(doc => {
            setFiltersList(doc.listRanges);
            setPrice([0, doc.listRanges.ranges[0].maxPrice]);
            //handleCondition();
        }).catch(error => {
            console.log(error.message);
        })

        // Get the current location using HTML Geo location
        GetLocation();
    }, []);


    // This use effect will run every time the value of current Latitude and Longitude change
    useEffect(() => {
        setLoading(true)
        if(currentLatLng) {
            var latLong = currentLatLng.lat + "," + currentLatLng.lng;
            // Get zip code from the Google's API using the current lattitude and longitude
            GetZipFromLatLong(latLong).then(doc => {
                if(doc.results.length > 0){
                    // Set the fetched zip code into the state variable
                    setZipCode(doc.results[0].address_components[1].long_name + ", " + doc.results[0].address_components[3].short_name + " - " + doc.results[0].address_components[0].long_name);
                    // Add the zip code into the filters array
                    filters['zipCode'] = doc.results[0].address_components[0].long_name;
                    setFilters(filters);
                    FilterQueryString(filters);

                    setLoading(false)
                }
                // If the zip code is not available
                else{
                    var split = doc.plus_code.compound_code.split(" ");
                    setZipCode(split[1] + " " + split[2] + " " + split[3])
                    setLoading(false)
                    // setZipCode(doc.plus_code.compound_code);
                    // setZipCode("N/A");
                }
            })
            .catch(error => {
                console.log(error.message);
                setLoading(false)
            });
        }
    }, [currentLatLng]);


    // Change the object into string and return it to parent class i.e Products page
    // so the product page could ask API to fetch the results
    function FilterQueryString(obj){
        var str = "";
        for(let i = 0; i < Object.keys(obj).length; i++){
            str += Object.keys(obj)[i] + "=" + obj[Object.keys(obj)[i]];
            if(i !== Object.keys(obj).length - 1){
                str += "&";
            }
        }
        setGlobalFilterQuery(str)
        // This function will be called from the parent class i.e products page
        props.onFilterChange(str);
    }

    const saveFilters = () => {
        var count = Object.keys(filters).length
        const obj = {
            count,
            filter_query : globalFilterQuery,
            userId : localStorage.getItem('userId'),
            image_one : props.savedSearch.image_one,
            image_two : props.savedSearch.image_two,
            image_three : props.savedSearch.image_three,
            title : props.savedSearch.title,
        }
        postSavedSearch(obj)
        .then(doc => {
            // console.log(doc.message)
            alert(doc.message)
        })
        .catch(e => {
            console.log(e.message)
        })
    }


    const handleExtColors = (elId) => {
        let tempArr = [...extColors];
        let indexOfItem = tempArr.indexOf(elId);

        if (indexOfItem === -1) {
            tempArr.push(elId);
        }
        else {
            tempArr.splice(tempArr.indexOf(elId), 1)
        }
        filters['exteriorColor'] = concatinateCommaToFilters(tempArr);
        console.log('handlePriceFilter')
        setFilters(filters);
        FilterQueryString(filters);
        setExtColors(tempArr);
    }

    const handleInteriorColors = (elId) => {
        let tempArr = [...intColors];
        let indexOfItem = tempArr.indexOf(elId);

        if (indexOfItem === -1) {
            tempArr.push(elId);
        }
        else {
            tempArr.splice(tempArr.indexOf(elId), 1)
        }
        filters['interiorColor'] = concatinateCommaToFilters(tempArr);
        console.log('handlePriceFilter')
        setFilters(filters);
        FilterQueryString(filters);
        setIntColors(tempArr);
    }

    return(
        <Card className="filters">
            <CardBody>
                {/* Filters heading with number of active filters */}
                {
                    // Every time the filters are updated change the heading number
                    Object.keys(filters).length > 0 
                    ? <Label style={{marginBottom: '0'}}><b>Filter</b> ({Object.keys(filters).length})</Label>
                    : <Label style={{marginBottom: '0'}}><b>Filter</b></Label>
                }
                {/* Clear all button */}
                {/* <Button style={{fontWeight: '500'}} color="link" className="float-right" size="sm" onClick={() => window.location.reload()}>Clear</Button> */}
                <Button style={{fontWeight: '500'}} color="link" className="float-right" size="sm" onClick={() => saveFilters()}>Save Filters</Button>
                
                {/******** Basic filters start here ************/}

                {/* Separator */}
                <hr/>
                
                {/******** Location filter ************/}
                {
                    filtersList ? 
                        <div>
                            <div className="location">
                                <h6>Location</h6>
                                <InputGroup>
                                    {/* Zip code will be visible in this text box
                                    on clicking this text box a map will appear to get the location manually */}
                                    <Input type="text" className="location-box" defaultValue={zipCode} value={zipCode} onClick={() => toggleMapPopup()} readOnly />
                                    {/* Google map popup to select the location manually from map
                                    the center of the map will be current Lattitude and Longitude */}
                                    <MapPopup toggle={toggleMapPopup} isOpen={mapPopup} GetLocationFromMap={GetLocationFromMap} center={currentLatLng} />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>
                                            {/* On clicking the gps location will take you back to the current location
                                            if the location is changed using the map */}
                                            <img src={gps} alt="Gps Icon" className="img-fluid" onClick={() => GetLocation()} />            
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>

                                {/******** Radius filter ************/}
                                <Row className="radius">
                                    <Col xs="3" sm="2" md="4" lg="3">
                                        <Label>Radius</Label>
                                    </Col>
                                    <Col xs="7" sm="9" md="5" lg="7">
                                        {/* Radius slider */}
                                        <RadiusSlider 
                                            min={0}
                                            max={200}
                                            onHandleRadius={handleRadius}
                                            onHandleRadiusValue={handleRadiusValue}
                                            disabled={loading}
                                            // onHandleRadius={() => console.log("radius")}
                                        />
                                    </Col>
                                    {/* Changing the value of Radius on handle changing */}
                                    <Col xs="2" sm="1" md="3" lg="2" className="px-0">
                                        <Label>{radius + " mi"}</Label>
                                    </Col>
                                </Row>
                            </div>
                            
                            <hr />
                            
                            
                            {/******** Make filter ************/}
                            <h6>Make</h6>
                            {/* Make list will be fetched from vinaudit api
                            On changing the make, modal will be visible  */}
                            {
                                makeList.length > 1 ? <Input id="make-list" type="select" className="mb-4" onChange={(e) => { setModelCollapseOpen(true); handleMake(e.target.value) }} disabled={loading} defaultValue={props.carMake ? props.carMake : ""}>
                                <option value="">Make</option>
                                {
                                    makeList.map((option, index) => {
                                        return <option value={option.name}>{option.name}</option>
                                    })
                                    // Make list will be populated using the results from vinaudit API
                                    // concatMakeList(makeList)
                                }
                                </Input> : null
                            }
                            
                            
                            {/******** Model filter, model list will be 
                             * populated and visible once the make is selected ************/}
                            <Collapse isOpen={isModelCollapseOpen}>
                                <h6>Model</h6>

                                <Input id="model-list" type="select" className="mb-4" onChange={(e) => handleModel(e.target.value)} disabled={loading} defaultValue={props.carModel ? props.carModel : ""}>
                                <option value="">Model</option>
                                {
                                    modelList.map((option, index) => {
                                        return <option value={option.name}>{option.name}</option>
                                    })
                                }
                                </Input>



                                {/* <MultiSelect
                                    options={concatModelList(modelList)}
                                    selected={selectedModels}
                                    onSelectedChanged={selected => {  handleModel(selected) }} /> */}
                                

                                {/******** Trim filter, trim list will be 
                                 * populated and visible once the model is selected ************/}
                                <Collapse isOpen={isTrimCollapseOpen}>
                                    <h6>Trim</h6>


                                    <Input id="trim-list" type="select" className="mb-4" onChange={(e) => handleTrim(e.target.value)} disabled={loading}>
                                    <option value="">Trim</option>
                                    {
                                        trimList.map((option, index) => {
                                            return <option value={option.name}>{option.name}</option>
                                        })
                                    }
                                    </Input>







                                    {/* <MultiSelect
                                        options={concatTrimList(trimList)}
                                        selected={selectedTrims}
                                        onSelectedChanged={selected => { handleTrim (selected) }} /> */}
                                </Collapse>
                            </Collapse>

                            <hr />
                            
                            {/******** Price filter ************/}
                            <h6>Price</h6>
                            <div className="px-2">
                                <PriceRangeSlider
                                    min={0}
                                    max={filtersList.ranges[0].maxPrice}
                                    minLabel={price[0]}
                                    maxLabel={price[1]}
                                    step={5000}
                                    defaultValue={[props.minPrice ? props.minPrice : 0, props.maxPrice ? props.maxPrice :filtersList.ranges[0].maxPrice]}
                                    onHandlePrice={handlePrice} 
                                    disabled={loading}
                                />
                            </div>
                            
                            <hr />
                            
                            {/******** Year filter ************/}
                            <h6>Year</h6>
                            <Row>
                                <Col xs="6">
                                    {/* On selecting from year, to year will be enabled */}
                                    <Input type="select" onChange={(e) => handleFromYear(e.target.value)} disabled={loading} defaultValue={props.yearCar ? Number(props.yearCar) : ""}>
                                        <option disabled selected hidden>From</option>
                                        {
                                            // Populate from year
                                            dropdownYears.map((year, index) => {
                                                return <option key={`year${index}`} value={year}>{year}</option>
                                            })
                                        }
                                    </Input>
                                </Col>
                                <Col xs="6">
                                    {/* Disabled by default, will be enabled after from year is selected */}
                                    <Input id="toYear" type="select" onChange={(e) => handleToYear(e.target.value)} disabled defaultValue={props.yearCar ? Number(props.yearCar) : ""}>
                                        <option disabled selected hidden>To</option>
                                        {
                                            // Populate to year
                                            dropdownToYears.map((year, index) => {
                                                return <option key={`year${index}`} value={year}>{year}</option>
                                            })
                                        }
                                    </Input>
                                </Col>
                            </Row>

                            <hr />

                            {/******** Body type filter ************/}
                            <h6>Body Type</h6>

                            <Row className="body-types text-center">
                                {
                                    filtersList ? DrawBodyStyles(filtersList.bodyStyleList) : null
                                }
                            </Row>
                            
                            <hr />

                            {/******** Condition filter ************/}
                            <h6>Condition</h6>
                            <FormGroup check>
                                <Input type="checkbox" id="condition-new" name="condition" onChange={() => handleCondition()} 
                                    defaultChecked={props.isUsed ? props.isUsed === "1" ? false : true : false}  disabled={loading}/>
                                <Label check htmlFor="condition-new">New</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" id="condition-used" name="condition" onChange={() => handleCondition()} 
                                    defaultChecked={props.isUsed ? props.isUsed === "1" ? true : false : false} disabled={loading} />
                                <Label check htmlFor="condition-used">Used</Label>
                            </FormGroup>

                            <hr />

                            {/******** Seller type filter ************/}
                            <h6>Seller Type</h6>
                            <FormGroup check>
                                <Input type="checkbox" id="dealer" name="seller-type" onChange={() => handleSellerType()} disabled={loading} />
                                <Label check htmlFor="dealer">Dealer</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" id="private-seller" name="seller-type" onChange={() => handleSellerType()} disabled={loading} />
                                <Label check htmlFor="private-seller">Private Seller</Label>
                            </FormGroup>
                            {/******** Basic filters end here ************/}


                            {/* Separator for Advanced filters */}
                            <hr style={{marginRight: '-20px', marginLeft: '-20px'}} />

                            {/******** Advanced filters start here ************/}
                            <div className="advanced-filters" onClick={() => setAdvancedFiltersShown(!advancedFiltersShown)}>
                                {
                                    advancedFiltersShown ? 
                                    <div>
                                        <FontAwesomeIcon icon="minus" color="#1C67CE" />
                                        <Label>Show less filters</Label>
                                    </div> : 
                                    <div>
                                        <FontAwesomeIcon icon="plus" color="#1C67CE" />
                                        <Label>Show more filters</Label>
                                    </div>
                                }                    
                                
                            </div>


                            <hr style={{marginRight: '-20px', marginLeft: '-20px'}} />
                            {/* Basic filters end here */}





                            {/* Advanced filters start here */}

                            <Collapse isOpen={advancedFiltersShown}>    
                                <h6>Transmission</h6>
                                {
                                    filtersList && filtersList.transmission.map((transmission, index) => {
                                        return <FormGroup check key={index}>
                                            <Input type="checkbox" id="manual" name="transmission" />
                                            <Label check htmlFor="manual">{transmission}</Label>
                                        </FormGroup>
                                    })
                                }

                                <hr />


                                <h6>Mileage</h6>
                                <div className="px-2">
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

                                <h6>Exterior Color</h6>
                                <Row className="exterior-color text-center">
                                    {
                                        filtersList && filtersList.exteriorColors.map((extColorFilter, index) => {
                                            return <Col xs="4" sm="2" md="4" key={index}>
                                                <div className="color-swatch" id={extColorFilter.name} style={{backgroundColor: extColorFilter.color}} onClick={() => handleExtColors(extColorFilter.name)}>
                                                    {
                                                        extColors.length > 0 && extColors.includes(extColorFilter.name) ? <Check /> : null
                                                    }
                                                </div>
                                                <p>{extColorFilter.name}</p>
                                            </Col>
                                        })
                                    }
                                </Row>




                                {/* Interior Color */}
                                <hr />

                                <h6>Interior Color</h6>
                                <Row className="exterior-color text-center">
                                    {
                                        filtersList && filtersList.colors.map((extColorFilter, index) => {
                                            return <Col xs="4" sm="2" md="4" key={index}>
                                                <div className="color-swatch" id={extColorFilter.name} style={{backgroundColor: extColorFilter.color}} onClick={() => handleInteriorColors(extColorFilter.name)}>
                                                    {
                                                        intColors.length > 0 && intColors.includes(extColorFilter.name) ? <Check /> : null
                                                    }
                                                </div>
                                                <p>{extColorFilter.name}</p>
                                            </Col>
                                        })
                                    }
                                </Row>
                            </Collapse>
                        </div>
                    : DrawFiltersSkeleton()
                }
            </CardBody>
        </Card>
    );
}

export default Filters;