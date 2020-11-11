import React from 'react';
import Audi from '../../../assets/Audi.png'
import BMW from '../../../assets/BMW.png'
import Ford from '../../../assets/Ford.png'
import Honda from '../../../assets/Honda.png'
import Lexus from '../../../assets/Lexus.png'
import Mercedes from '../../../assets/Mercedes.png'
import Mitsubishi from '../../../assets/Mitsubishi.png'
import Suzuki from '../../../assets/Suzuki.png'
import Tesla from '../../../assets/Tesla.png'
import Toyota from '../../../assets/Toyota.png'
import {Row} from 'reactstrap'
import '../styles/PopularMake.css'



const DrawRows = () => {
    var table = [];
    for(let i = 0; i < 1; i++){
        table.push(
            <Row className="">
                {
                    DrawCols()
                }
            </Row>
        )
    }
    return table;
}
const DrawCols = () => {
    var table = [];
    var popularImages = [Suzuki, Mitsubishi, Mercedes, Lexus, Honda, Ford, BMW, Audi, Tesla, Toyota];
    var popularNames = ["Suzuki", "Mitsubishi", "Mercedes", "Lexus", "Honda", "Ford", "BMW", "Audi", "Tesla", "Toyota"];
    for (let i = 0; i <  10; i++) {
        table.push(
                <li className = "popular-images col-md-2 col-md-offset-1">
                    <img data-aos="flip-up" src={popularImages[i]} alt="popular images" className="img-fluid" /> <br/>
                    
                    <label>{popularNames[i]}</label>    
                    
                    
                </li>
            // <Col md = "2" className="text-center my-2 col-md-offset-2">
            //     <img data-aos="flip-up" src={ourLeagueImages[i]} alt="Our league person" className="img-fluid" />
            // </Col>
        )
    }
    
    return table;
}



const Home = () => {
    return(
        <div className=""> 
            <h2 className = "popular-make-head">Popular Make</h2>
                <ul className = "client-list">
                {
                    DrawCols()
                }
                </ul>
        </div>
    )
}

export default Home;