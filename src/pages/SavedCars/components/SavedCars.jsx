import React,{ useState} from 'react';
import {Container, Row, Col,Label,Input} from 'reactstrap';
import '../styles/SavedCars.css'
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import {getSaveCars} from '../api/Get'

// const ShowSearchResults = (products) => {
//     var table = [];
//     var adPlacement = 5;

//     for (let i = 0; i < products.length; i++) {
//         if(i !== 0 && i % adPlacement === 0) {
//             table.push(
//                 <Col key={products[i].productId} xs="12" sm="6" lg="4">
//                     <img src={adProducts} alt="Advertisement" className="img-fluid" />
//                 </Col>
//             );
//         }
//         else {
//             table.push(
//                 <Col key={products[i].productId} xs="12" sm="6" lg="4">
//                     <ProductCard
//                         productId={products[i].productId}
//                         productTitle={products[i].carName}
//                         productSubtitle={AddCommaToNumber(products[i].mileage) + " mileage · " + products[i].zipCode}
//                         productText={"$" + AddCommaToNumber(products[i].price)}
//                         productImg={products[i].coverPic}
//                         productName={products[i].carName}
//                         productBadge={"TRENDING"}
//                         userId={products[i].userId}
//                         dealerPic={products[i].userPic}
//                         dealer={products[i].userRole}
//                         dealerName={products[i].fullName}
//                         isSave={products[i].saveId}
//                         dealerRating={Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1*100)}
//                         allowBookmark={true} />
//                 </Col>
//             );
//         }   
//     }
//     return table;
// }
// const  SavedCars = (props) => {
//     const [savedCars,setSavedCars] = useState([])
//     useState(() => {
//         var userId = localStorage.getItem('userId')
//         //var userId = 73
//         getSaveCars(userId)
//         .then(doc => {
//             console.log(doc)
//             if(doc.length > 0){
//                 setSavedCars(doc)
//             }
//         })
//         .catch(e => {
//             console.log(e.message)
//         })
//     },[])
    const  SavedCars = (props) => {
        const [savedCars,setSavedCars] = useState([])
        useState(() => {
            var userId = localStorage.getItem('userId')
            //var userId = 73
            getSaveCars(userId)
            .then(doc => {
                console.log('saved',doc)
                if(doc.length > 0){
                    setSavedCars(doc)
                }
            })
            .catch(e => {
                console.log(e.message)
            })
        },[])
        
    const renderSaveCars = (list) => {
        var table = [];
        for(let i = 0; i < list.length; i++){
            table.push(
                <Col xs = "12" md = "3" className = "">
                    <ProductCard
                    productId={list[i].productId}
                    productTitle={list[i].carName}
                    productSubtitle={""}
                    productText={"$" + AddCommaToNumber(list[i].price)}
                    productImg={list[i].coverPic}
                    productName={list[i].carName}
                    productBadge={""}
                    userId={list[i].userId}
                    dealerPic={list[i].userPic}
                    dealer={list[i].userRole}
                    dealerName={""}
                    isSave={1}
                    // dealerRating={Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1*100)}
                    allowBookmark={true}
                    />
                </Col>
            )
        }
        return table
    }

    return(
        <body className = "saved-body">
            <Container clsssName = "saved-container">
                <Row  className = "saved-car-col">
                    <Col xs = "12" md = "8">
                    <h2 className = "saved-car-label">Saved Cars <span className='saved-car-count'>{savedCars ? savedCars.length : null}</span></h2>
                    </Col>
                    <Col md="4" className="saved-sort-coloumn" >
                            <Label className="mt-2">Sort by</Label>
                            <Input type="select" className='saved-car-dropdown' >
                                <option value="relevance">Newest</option>
                                <option value="price">Recent</option>
                            </Input>
                        </Col>
                        {/* <Col md="2">
                           
                        </Col> */}
                </Row>
                
                <Row>
                    {
                        savedCars ? renderSaveCars(savedCars) : "No List"
                    }
               </Row>
            </Container>
            {/* <Container clsssName = "saved-container">
                <Row>
                    <Col xs = "12" md = "12" className = "saved-car-col">
                    <h2 className = "saved-car-label text-center">Saved Cars {savedCars ? savedCars.length : null}</h2>
                    </Col>
                </Row>

                <Row>
                    {
                        savedCars ? renderSaveCars(savedCars) : "No List"
                    }
               </Row>
            </Container> */}
        </body>
    );
}

export default SavedCars;