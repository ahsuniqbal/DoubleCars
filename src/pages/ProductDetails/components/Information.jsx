import React, { useState ,useEffect} from 'react';
import { Row, Col,Label, Collapse } from 'reactstrap';
import Chart from './Chart'
import { AddCommaToNumber, TrimText } from '../../../utils/NumberManipulation';
import '../styles/Information.css';

import CertifiedCarsCard from './CertifiedCarCard';
const Information = (props) => {

    // read more state
    const [readMore, setReadMore] = useState(false);
    const [matched,setMatched]  = useState(false)
    
    useEffect(() => {
       

        function handleResize() {
            console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            if(window.innerWidth<=Number(768)){
                console.log('matched')
                setMatched(true)
            }else{
                setMatched(false)

                console.log("Not matched")
            }
        }   

       
        

        window.addEventListener('resize', handleResize)

        if(window.innerWidth<=Number(768)){
            console.log('matched')
            setMatched(true)
        }else{
            console.log("Not matched")
            setMatched(false)

        }


    }, [])


    


    // read more toggle
    const toggleReadMore = () => {
        setReadMore(!readMore);
    }

    const details = props.details;
    var attributes = props.attributes;

    const makeList = (list) => {
        var attName = ""
        var arr = []
        var index = -1
        for(let i = 0; i < list.length; i++){
            if(attName === ""){
                attName = list[i].category
                const obj = {
                    title : list[i].category,
                    property : [{
                        attId : list[i].attId,
                        isChecked : list[i].isChecked,
                        productId : list[i].productId,
                        itemName : list[i].itemName
                        // image : list[i].image
                    }]
                }
                arr.push(obj)
                index++;
            }else{
                if(attName !== list[i].category){
                    const obj = {
                        title : list[i].category,
                        property : [{
                            attId : list[i].attId,
                        isChecked : list[i].isChecked,
                        productId : list[i].productId,
                        itemName : list[i].itemName
                            // image : list[i].image
                        }]
                    }
                    arr.push(obj)
                    index++;
                    attName = list[i].category
                }else{
                    arr[index].property.push({
                        attId : list[i].attId,
                        isChecked : list[i].isChecked,
                        productId : list[i].productId,
                        itemName : list[i].itemName
                        // image : list[i].image
                    })
                }
            }
        }
        return arr
    }

    function renderFeaturesList() {
        var attributeTable = makeList(attributes);
        var table = [];

        if(attributeTable.length > 1) {
            for(let i = 0; i < attributeTable.length; i++) {
                table.push(
                    <Col xs="6" md="4">
                        <h6 className = "info-sub-head" title={attributeTable[i].title}>{attributeTable[i].title}</h6>
                        {
                            attributeTable[i].property.map((feature) => 
                                <Label className = "car-feature" title={feature.itemName}>{feature.itemName}</Label>
                            )
                        }
                    </Col>
                )
            }
        }
        else {
            for(let i = 0; i < attributeTable[0].property.length; i++) { 
                table.push(
                    <Col xs="6" md="4">
                        <Label className = "car-feature"  title={attributeTable[0].property[i].itemName}>{attributeTable[0].property[i].itemName}</Label>
                    </Col>
                )
            }

            // console.log(attributeTable);
            // attributeTable.map((attribute) => {
            //     return(
            //         <Col xs="6" md="3">
            //             <Label className = "car-feature">{attribute.itemName}</Label>
            //         </Col>
            //     )
            // })
        }


        // if(attributes[0].category === attributes[attributes.length - 1].category) {
        //     for(let i = 0; i < attributes.length; i++) {
        //         table.push(
        //             <Col xs="6" md="3">
        //                 <Label className = "car-feature">{attributes[i].itemName}</Label>
        //             </Col>
        //         )
        //     }
        // }
        // else {
        //     for(let i = 0; i < attributes.length; i++) {
        //         table.push(
        //             <Col xs="6" md="3">
        //                 <Label className = "info-sub-head">{attributes[i].category}</Label>
        //                 {
        //                     attributes.filter(attribute => i < attributes.length && attribute.category === attributes[i + 1].category).map((attribute) => {
        //                         console.log(i, attribute.itemName)
        //                         if(i < attributes.length) {
        //                             i++
                                    
        //                         }
        //                         return <Label className = "car-feature">{attribute.itemName}</Label>
        //                         // else {
        //                         //     i--
        //                         // }
        //                     })

                            
        //                     // attributes.filter(attribute => attribute.category === attributes[i + 1].category).map(itemName => {
        //                     //     if(i  < attributes.length) {
        //                     //         i++
        //                     //     }
        //                     //     return <Label className = "car-feature">{itemName.itemName}</Label>
        //                     // })
        //                 }
        //                 <Label className = "car-feature">{attributes[i].itemName}</Label>
        //             </Col>
        //         )
                
        //     }
        // }


        
        // if(attributes[0].category === 'features') {
        //     for(let i = 0; i < attributes.length; i++) {
        //         table.push(
        //             <Col xs="6" md="3">
        //                 <Label className = "car-feature">{attributes[i].itemName}</Label>
        //             </Col>
        //         );
        //     }
        // }
        // else {
        //     for(let i = 0; i < attributes.length; i++) {
        //         if(i < attributes.length - 1 && attributes[i].category === attributes[i + 1].category) {
        //             console.log("if chala")
        //             table.push(
        //                 <Col xs="6" md="3">
        //                     <Label className = "info-sub-head">{attributes[i].category}</Label><br />
        //                     {
        //                         attributes[i].category === attributes[i + 1].category ? 
        //                             attributes.map((category, itemName) => <Label className="car-feature">{itemName}</Label>)
        //                             // <Label className="car-feature">{attributes[i].itemName}</Label>
        //                         : null
        //                     }
        //                 </Col>
        //             );
        //         }
        //         else {
        //             console.log("else chala")
        //             table.push(
        //                 <Col xs="6" md="3">
        //                     <Label className = "info-sub-head">{attributes[i].category}</Label><br />
        //                         <Label className="car-feature">{attributes[i].itemName}</Label>
        //                 </Col>
        //             );
        //         }
                
                // if(attributes[i].category === attributes[i + 1].category) {
                //     table.push(
                //         <Col xs="6" md="3">
                //             <Label className="car-feature">{attributes[i].itemName}</Label>
                //         </Col>
                //     );
                // }
                // else { 

            //     }
            // }
            // var categoryName = attributes[0].category;
            // for(let i = 0; i < attributes.length; i++) {
            //     if(categoryName === attributes[i].category)
            //         table.push(
            //             <Col xs="6" md="3">
            //                 <Label className="info-sub-head">{attributes[i].category}</Label> <br/>
            //                 {
            //                     renderItems(attributes, i)
            //                 }
            //             </Col>
            //         );
            // }
        // }
        return table;
    }

    return(
        <div>
            {/* Car name and price section starts here. */}
            <Row>
                <Col md = "8" sm="12" className = "info mt-5">
                    <h2 className = "car-name" title={details.yearCar + " " + details.carMake + " " + details.carModel + " " + details.trim}>{details.yearCar + " " + details.carMake + " " + details.carModel + " " + details.trim}</h2>
                    {
                        matched ? 
                        <>
                         <small className="car-info">
                             {details.mileage ? (AddCommaToNumber(details.mileage) + " miles ·") : null} {details.location ? details.location  + " - " : "NaN - "} {details.zipCode ? details.zipCode : null} · {props.saveCount.count} save(s) 
                         </small>
                        </>
                        :
                        null

                    }
                </Col>
                <Col className = "text-md-right mt-5" md = "4">
                    <h2 className = "car-price">{details.price ? ("$" + AddCommaToNumber(details.price)) : null}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        matched ==false ?
                        <h4 className = "car-info mb-4">
                            {details.mileage ? (AddCommaToNumber(details.mileage) + " miles ·") : null} {details.location ? details.location  + " - " : "NaN - "} {details.zipCode ? details.zipCode : null} · {props.saveCount.count} save(s) 
                        </h4>
                        :
                        null
                    }
                </Col>
            </Row>
            {/* <Row>
                <Col>
                    <h4 className = "car-info mb-4">{details.mileage ? details.mileage : null}</h4>
                </Col>
            </Row> */}
            {/* <hr  className = "info-bottom-line mb-5"/> */}
            
            {/* THIS IS COMMENTED UNTILL THE BACKEND IS IMPLEMENTED */}
            {/* <Row>
                <Col xs = "12" md = "12">
                <CertifiedCarsCard/>
                </Col>
            </Row> */}

            {/* If description exists than show other wise null */}
            {details.description ? 

                // If description is greater than this length then show read more thing
                // Other wise show full text
                details.description.length > 400 ?
                    <>
                        {/* If read more is false then short text and read more button is shown */}
                        {!readMore && <Label className="car-info">{TrimText(details.description, 400)}...</Label>}
                        {!readMore && <a style={{textDecoration: 'underline', cursor: 'pointer', color: '#007bff'}} onClick={() => toggleReadMore()}>Read More</a>}

                        
                        <Collapse isOpen={readMore}>
                            <Label className="car-info">{details.description}</Label>
                            {/* If read more is true then long text and read less button is shown */}
                            {readMore && <a style={{textDecoration: 'underline', cursor: 'pointer', color: '#007bff'}} onClick={() => toggleReadMore()}>Read Less</a>}
                        </Collapse>
                    </>

                // If description is greater than the length defined show read more thing
                // Other wise show full text
                : <Label className="car-info">{details.description}</Label>

            // If description exists than show other wise null
            : null}
            
            
            
            <hr  className = "info-bottom-line mb-5"/>

            {/* Information section starts here.*/}
            <h4 className = "information-head">Information</h4>
            <Row className = "mb-5">
                {
                    details.vin ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Vin</Label><br/>
                        <Label className = "car-detail">{details.vin}</Label>
                    </Col>
                    : null
                }
                {
                    details.isUsed === 0 ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Car Category</Label> <br/>
                        <Label className = "car-detail">New</Label>
                    </Col>
                    :
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Car Category</Label> <br/>
                        <Label className = "car-detail">Used</Label>
                    </Col>
                }
                {
                    details.transmission ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Transmission</Label><br/>
                        <Label className = "car-detail">{details.transmission}</Label>
                    </Col>
                    : null
                }
                {
                    details.stockNo ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Stock No</Label> <br/>
                        <Label className = "car-detail">{details.stockNo}</Label>
                    </Col>
                    : null
                }
                {
                    details.exteriorColor ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Exterior Color</Label> <br/>
                        <Label className = "car-detail">{details.exteriorColor}</Label>
                    </Col>
                    : null
                }
                {
                    details.interiorColor ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Interior Color</Label> <br/>
                        <Label className = "car-detail">{details.interiorColor}</Label>
                    </Col>
                    : null
                }
                {
                    details.engine ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Engine</Label> <br/>
                        <Label className = "car-detail">{details.engine}</Label>
                    </Col>
                    : null
                }
                {
                    details.fuelType ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Fuel Type</Label> <br/>
                        <Label className = "car-detail">{details.fuelType}</Label>
                    </Col>
                    : null
                }
                {
                    details.gasMilage ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">City MPG</Label> <br/>
                        <Label className = "car-detail">{details.gasMilage}</Label>
                    </Col>
                    : null
                }
                {
                    details.highway_mileage ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Highway MPG</Label> <br/>
                        <Label className = "car-detail">{details.highway_mileage}</Label>
                    </Col>
                    : null
                }
                {
                    details.bodyStyle ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Body Style</Label> <br/>
                        <Label className = "car-detail">{details.bodyStyle}</Label>
                    </Col>
                    : null
                }
                {
                    details.anti_brake_system ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Anti Brake System</Label> <br/>
                        <Label className = "car-detail">{details.anti_brake_system}</Label>
                    </Col>
                    : null
                }
                {/* {
                    details.curb_weight ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Curb Weight</Label> <br/>
                        <Label className = "car-detail">{details.curb_weight}</Label>
                    </Col>
                    : null
                } */}
                {
                    details.doors ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Doors</Label> <br/>
                        <Label className = "car-detail">{details.doors}</Label>
                    </Col>
                    : null
                }
                {
                    details.drivetrain ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Drive Train</Label> <br/>
                        <Label className = "car-detail">{details.drivetrain}</Label>
                    </Col>
                    : null
                }
                {
                    details.engine_cylinders ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Engine Cylinders</Label> <br/>
                        <Label className = "car-detail">{details.engine_cylinders}</Label>
                    </Col>
                    : null
                }
                {
                    details.engine_size ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Engine Size</Label> <br/>
                        <Label className = "car-detail">{details.engine_size}</Label>
                    </Col>
                    : null
                }
                {
                    details.fuel_capacity ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Fuel Capacity</Label> <br/>
                        <Label className = "car-detail">{details.fuel_capacity}</Label>
                    </Col>
                    : null
                }
                {/* {
                    details.made_in ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Made in Country</Label> <br/>
                        <Label className = "car-detail">{details.made_in}</Label>
                    </Col>
                    : null
                }
                {
                    details.made_in_city ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Made in City</Label> <br/>
                        <Label className = "car-detail">{details.made_in_city}</Label>
                    </Col>
                    : null
                }
                {
                    details.gross_vehicle_weight_rating ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Gross Vehicle Weight</Label> <br/>
                        <Label className = "car-detail">{details.gross_vehicle_weight_rating}</Label>
                    </Col>
                    : null
                }
                {
                    details.overall_height ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Overall Height</Label> <br/>
                        <Label className = "car-detail">{details.overall_height}</Label>
                    </Col>
                    : null
                }
                {
                    details.overall_length ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Overall Length</Label> <br/>
                        <Label className = "car-detail">{details.overall_length}</Label>
                    </Col>
                    : null
                }
                {
                    details.overall_width ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Overall Width</Label> <br/>
                        <Label className = "car-detail">{details.overall_width}</Label>
                    </Col>
                    : null
                } */}
                {
                    details.size ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Size</Label> <br/>
                        <Label className = "car-detail">{details.size}</Label>
                    </Col>
                    : null
                }
                {
                    details.standard_seating ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Standard Seating</Label> <br/>
                        <Label className = "car-detail">{details.standard_seating}</Label>
                    </Col>
                    : null
                }
                {
                    details.style ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Style</Label> <br/>
                        <Label className = "car-detail">{details.style}</Label>
                    </Col>
                    : null
                }
                {
                    details.transmission_speeds ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Transmission Speed</Label> <br/>
                        <Label className = "car-detail">{details.transmission_speeds}</Label>
                    </Col>
                    : null
                }
                {
                    details.transmission_type ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head margin-heading">Transmission Type</Label> <br/>
                        <Label className = "car-detail">{details.transmission_type}</Label>
                    </Col>
                    : null
                }
                {/* {
                    details.wheelbase_length ?
                    <Col xs = "6" md = "3">
                        <Label className = "info-sub-head">Wheel Base Length</Label> <br/>
                        <Label className = "car-detail">{details.wheelbase_length}</Label>
                    </Col>
                    : null
                } */}
            </Row>
            {/* Information section ends here.*/}

            <hr className = "info-bottom-line mb-5"/>

            {/* Car Feature section starts here. */}
            <h4 className = "car-feature-head">Car Features</h4>
            <Row className = "mb-5">
                {
                    attributes.length > 0 ? renderFeaturesList(attributes) : <Col xs = "12"><Label className = "car-detail">No features have been listed by the user</Label></Col>
                }
            </Row>
            <hr className = "info-bottom-line mb-5"/>
        </div>
    )
}

export default Information;