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
    for(let i = 0; i < 2; i++){
        table.push(
            <Row className="mx-0">
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
    for (let i = 0; i <  6; i++) {
        table.push(
                <li>
                    <img data-aos="flip-up" src={popularImages[i]} alt="popular images" className="img-fluid" />
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





