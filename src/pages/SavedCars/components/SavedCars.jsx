import React,{ useState, useEffect} from 'react';
import { Button, Container, Row, Col, Input, Label, Card,CardBody} from 'reactstrap';
import '../styles/SavedCars.css'
import ProductCard from '../../../components/ProductCard/components/ProductCard';


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
//                         productSubtitle={AddCommaToNumber(products[i].mileage) + " miles · " + products[i].zipCode}
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
const  SavedCars = (props) => {

    return(
        <body className = "saved-body">
            <Container clsssName = "saved-container">
                <Row>
                    <Col xs = "12" md = "12">
                    <h2 className = "saved-car-label">Saved Cars</h2>
                    </Col>
                </Row>

                <Row>
                    <Col xs = "12" md = "3" className = "">
                        <ProductCard/>
                    </Col>
                    <Col xs = "12" md = "3" className = "">
                        <ProductCard/>
                    </Col>
                    <Col xs = "12" md = "3" className = "">
                        <ProductCard/>
                    </Col>
                    <Col xs = "12" md = "3" className = "">
                        <ProductCard/>
                    </Col>
               </Row>
            </Container>
        </body>
    );
}

export default SavedCars;