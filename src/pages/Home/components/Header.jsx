import React from 'react';
import { Row, Col , Button} from 'reactstrap';
import { NavLink } from "react-router-dom";
import '../styles/Header.css'



const Header = () => {
    return(
        <div>
            <section className = "d-flex align-items-center">
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-12">
                            <div className = "row">
                                <div className = "col-md-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column left-cover-section xs-12 sm-12 md-12">
                                    <h1 className = "cover-left-heading ml-5">
                                        Find the most desireable car
                                    </h1>
                                    <h5 className = "my-3 header-sub-head ml-5">
                                        Buy and sell cars with ease using our app!
                                    </h5>
                                    <Row>
                                        <Col md = "12" className = "">
                                        <Button className="ml-5 download-button-cover" to="">Download App</Button>
                                        </Col>
                                    </Row>
                                    
                                    
                                </div>

                                <div className = "col-lg-7  order-1 order-lg-2 right-cover-section">
                                    {/* <img src = {Cover} alt = "Cover image" className = "img-fluid" width = "100%"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
    </div>
    )
}

export default Header;