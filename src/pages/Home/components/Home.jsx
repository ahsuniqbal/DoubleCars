import React from 'react';
import Cover from '../../../assets/landingPageCover.png'
import Footer from '../../../components/Footer/components/Footer'
import { NavLink } from "react-router-dom";
import PopularMake from './PopularMake';
import SearchBox from './SearchBox';
const Home = () => {
    return(
        <div>
            
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-12">
                            <div className = "row">
                                <div className = "col-md-5 pt-lg-0 order-2 order-lg-1 left-cover-section">
                                    <h1 className = "cover-left-heading">
                                        Find the most desireable car
                                    </h1>
                                    <h5 className = "my-3">
                                        Buy and sell cars with ease using our app!
                                    </h5>
                                    <div className = "mt-3">
                                    <NavLink className="nav-link download-button-cover" to="">Download App</NavLink>
                                    </div>
                                </div>

                                <div className = "col-lg-7  order-1 order-lg-2">
                                    <img src = {Cover} alt = "Cover image" className = "img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            


        <PopularMake/>
        <Footer/>

    </div>
    )
}

export default Home;