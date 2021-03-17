import React, { useState, useEffect } from 'react';
import { Row, Col, Label, Input, Container } from 'reactstrap';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import { AddCommaToNumber } from '../../../utils/NumberManipulation';
import { GetSearchResult } from '../../Products/api/GetRequests';
import adProducts from '../../../assets/ad_products.png';
import { ProductSkeleton } from '../../../components/Skeletons';
import '../styles/ProductLowerSection.css';

const ShowSearchResults = (products) => {
    var table = [];
    var adPlacement = 5;

    for (let i = 0; i < products.length; i++) {
        if(i !== 0 && i % adPlacement === 0) {
            table.push(
                <Col key={products[i].productId} xs="12" sm="6" lg="3">
                    <img src={adProducts} alt="Advertisement" className="img-fluid" />
                </Col>
            );
        }
        else {
            table.push(
                <Col key={products[i].productId} xs="12" sm="6" lg="3" style={{padding: '0 7px'}}>
                    <ProductCard
                        productId={products[i].productId}
                        productTitle={products[i].carName}
                        productSubtitle={AddCommaToNumber(products[i].mileage) + " mileage · " + products[i].zipCode}
                        productText={"$" + AddCommaToNumber(products[i].price)}
                        productImg={products[i].coverPic}
                        productName={products[i].carName}
                      
                        userId={products[i].userId}
                        dealerPic={products[i].userPic}
                        dealer={products[i].userRole}
                        dealerName={products[i].fullName}
                        isSave={products[i].saveId}
                        dealerRating={Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1*100)}
                        allowBookmark={true} />
                </Col>
            );
        }   
    }
    return table;
}

function DrawSkeleton(){
    var table = [];
    for(let i = 0; i < 6; i++){
        table.push(
            <Col xs="12" sm="6" lg="3" key={i} className="my-2">
                <ProductSkeleton />
            </Col>
        );
    }
    return table;
}


const ProductsLowerSection = () => {

    const [products, setProducts] = useState([]);
    // const [pageNumber, setPageNumber] = useState(0);
    // const [isBottom, setIsBottom] = useState(false);
    const [flag, setFlag] = useState(false)
    const [booleanFlag, setBooleanFlag] = useState(false);

    // const handleScroll = () => {
    //     const scrollTop = (document.documentElement
    //         && document.documentElement.scrollTop)
    //         || document.body.scrollTop;
    //     const scrollHeight = (document.documentElement
    //         && document.documentElement.scrollHeight)
    //         || document.body.scrollHeight;
    //     if (scrollTop + window.innerHeight + 800 >= scrollHeight){
    //         setPageNumber(pageNumber + 1)
    //         setIsBottom(!isBottom);
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    //   }, [isBottom]);
    
    useEffect(() => {
        GetSearchResult().then(doc => {
            if(products.length > 0){
                setBooleanFlag(false);
                var temp = products
                for(let i = 0; i < doc.length; i++){
                    temp.push(doc[i])
                }
                setProducts(temp);
            }else{
                setProducts(doc);
                setBooleanFlag(true);
            }
            setFlag(!flag)
        })
        .catch(error => {
            console.log(error.message);
        });
    
    }, []);

    return(
                    
        <div className="show-result-main-col">  
        
            <Row className=''>
                <Col xs="12" md="12" >
                    <Row>
                        {
                            products.length > 0 ? ShowSearchResults(products) : 
                            booleanFlag ? <h2 className="text-center">No result found</h2> : DrawSkeleton()
                        }

                    </Row>
                </Col>
            </Row>
        </div>
         
        
    );
}

export default ProductsLowerSection;