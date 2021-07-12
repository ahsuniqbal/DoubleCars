import React, { useEffect, useState} from 'react';
import { Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import Skeleton from '@material-ui/lab/Skeleton';
import ProductCard from '../../../components/ProductCard/components/ProductCard';
import '../styles/TrendingBodyTypes.css';
import classnames from 'classnames';
import { GetProductsOfBodyType } from '../api/GetRequests';


const TrendingBodyTypes = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [bodyTypeProducts, setBodyTypeProducts] = useState(null);
    

    const toggleTabs = (e, tabIndex) => {
        e.preventDefault();
        if(activeTab !== tabIndex){
            setActiveTab(tabIndex);
        }
    }

    const DrawCarouselItems = (products) => {
        var table = [];
        for(let i = 0; i < products.length; i++){
            table.push(
                <Carousel.Item>
                    <Row>
                        {
                            DrawCarouselCols(products, i)
                        }
                    </Row>
                </Carousel.Item>
            );
            i+=3;
        }
        return table;
    }

    const DrawCarouselCols = (list, index) => {
        var table = [];
        console.log("Trend", list);
        for(let i = index; i < index + 4; i++){
            if(i > list.length - 1){
                return table;
            }
            table.push(
                <Col xs="12" md="3">
                    {
                        list[i].productId ? 
                        <ProductCard
                            productId = {list[i].productId}
                            productImg = {list[i].coverPic}
                            productTitle = {list[i].name}
                            productSubtitle = {list[i].mileage + " · " + list[i].zipCode}
                            productText = {"$" + list[i].price} 
                        />
                        : null
                    }
                </Col>
            );
        }
        return table;
    }
    
    const DrawSkeleton = () => {
        var table = [];
        for(let i = 0; i < 4; i++){
            table.push(
                <Carousel.Item>
                    <Row>
                        {
                            DrawSkeletonCols(i)
                        }
                    </Row>
                </Carousel.Item>
            );
            i+=3;
        }
        return table;
    }


    const DrawSkeletonCols = (index) => {
        var table = [];
        for(let i = index; i < index + 4; i++){
            table.push(
                <Col key={i} xs="12" sm="6" lg="3">
                    <Skeleton variant="rect" width={298} height={178} animation="wave" />
                    <Skeleton variant="text" animation="wave" />
                    <Skeleton variant="text" animation="wave" />
                    <Skeleton variant="text" animation="wave" />
                    <Row>
                        <Col xs="3">
                            <Skeleton variant="text" width={50} height={50} animation="wave" />
                        </Col>
                        <Col xs="9" className="mt-2">
                            <Skeleton variant="text" animation="wave" />
                        </Col>
                    </Row>
                </Col>
            );
        }
        return table;
    }
    
    const GetProduct = (e, bodyType) => {
        e.preventDefault();
        GetProductsOfBodyType(bodyType).then(doc => {
            setBodyTypeProducts(doc);
        })
        .catch(error => {
            console.log(error.message);
        });
    }

    const DrawTabNavs = (bodyTypes) => {
        var table = [];
        for(let i = 0; i < bodyTypes.length; i++){
            table.push(
                <NavItem>
                    <NavLink className={classnames({ active: activeTab === i + 1 })} onClick={(e) => { toggleTabs(e, i + 1); GetProduct(e, props.bodyTypes[i]); }}>
                        {props.bodyTypes[i]}
                    </NavLink>
                </NavItem>
            );
        }
        return table;
    }

    useEffect(() => {
        GetProductsOfBodyType(props.bodyTypes[0]).then(doc => {
            setBodyTypeProducts(doc);
        })
        .catch(error => {
            console.log(error.message);
        });
    }, []);

    
        return(
                <Row>
                    <Col xs="12" >
                        <Nav tabs className = "text-center mb-5 tab-items">
                            {/* {
                                props.bodyTypes ? DrawTabNavs(props.bodyTypes) : null
                            } */}

                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '1' })} onClick={(e) => { toggleTabs(e, '1'); GetProduct(e, props.bodyTypes[0]); }}>
                                    {props.bodyTypes? props.bodyTypes[0] : null}
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '2' })} onClick={(e) => { toggleTabs(e, '2'); GetProduct(e, props.bodyTypes[1]); }}>
                                    {props.bodyTypes? props.bodyTypes[1] : null}
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '3' })} onClick={(e) => { toggleTabs(e, '3'); GetProduct(e, props.bodyTypes[2]); }}>
                                    {props.bodyTypes? props.bodyTypes[2] : null}
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '4' })} onClick={(e) => { toggleTabs(e, '4'); GetProduct(e, props.bodyTypes[3]); }}>
                                    {props.bodyTypes? props.bodyTypes[3] : null}
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '5' })} onClick={(e) => { toggleTabs(e, '5'); GetProduct(e, props.bodyTypes[4]); }}>
                                    {props.bodyTypes? props.bodyTypes[4] : null}
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === '6' })} onClick={(e) => { toggleTabs(e, '6'); GetProduct(e, props.bodyTypes[5]); }}>
                                    {props.bodyTypes? props.bodyTypes[5] : null}
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                               <Carousel indicators={false}>
                                   {
                                       props.bodyTypes && bodyTypeProducts ? DrawCarouselItems(bodyTypeProducts) : DrawSkeleton()
                                   }
                               </Carousel>
                            </TabPane>
                            
                            <TabPane tabId="2">
                                <Carousel indicators={false}>
                                    {
                                        bodyTypeProducts ? DrawCarouselItems(bodyTypeProducts) : DrawSkeleton()
                                    }
                               </Carousel>
                            </TabPane>
                            <TabPane tabId="3">
                                <Carousel indicators={false}>
                                    {
                                        bodyTypeProducts ? DrawCarouselItems(bodyTypeProducts) : DrawSkeleton()
                                    }
                               </Carousel>
                            </TabPane>
                            <TabPane tabId="4">
                                <Carousel indicators={false}>
                                    {
                                        bodyTypeProducts ? DrawCarouselItems(bodyTypeProducts) : DrawSkeleton()
                                    }
                               </Carousel>
                            </TabPane>
                            <TabPane tabId="5">
                                <Carousel indicators={false}>
                                    {
                                        bodyTypeProducts ? DrawCarouselItems(bodyTypeProducts) : DrawSkeleton()
                                    }
                               </Carousel>
                            </TabPane>
                            <TabPane tabId="6">
                                <Carousel indicators={false}>
                                    {
                                        bodyTypeProducts ? DrawCarouselItems(bodyTypeProducts) : DrawSkeleton()
                                    }
                               </Carousel>
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
        );
    
}
export default TrendingBodyTypes;