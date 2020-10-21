import React,  { Component }from 'react';
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
import {Row, Col, Label} from 'reactstrap'
import { Link } from 'react-router-dom';



// function DrawRows(){
//     var table = [];
//     var ourLeagueImages = [Suzuki, Mitsubishi, Mercedes, Lexus, Honda, Ford, BMW, Audi];
//     for(let i = 0; i < ourLeagueImages.length; i++){
//         table.push(

//             <Row className="mx-0">
//                 {
//                     this.DrawCols(ourLeagueImages, i)
//                 }
//                 <Col xs="12" className="my-2">
//                     <hr />
//                 </Col>
//             </Row>
//         )
//         i += 3;
//     }
//     return table;
// }
// function DrawCols(ourLeagueImages, index){
//     var table = [];
//     for (let i = index; i < index + 4; i++) {
//         table.push(
//             <Col xs="12" md="3" className="text-center my-2">
//                 <img data-aos="flip-up" src={ourLeagueImages[i]} alt="Our league person" className="img-fluid" />
//             </Col>
//         )
//     }
//     return table;
// }


// const Home = () => {
//     return(
//         <div className="our-league-section">
//                 <Row className="mx-0">
//                     <Col xs="12">
//                         <h1 className="text-center my-4">Our League</h1>
//                     </Col>
//                 </Row>

//                 {
//                     this.DrawRows()
//                 }

//                 <Row className="mx-0">
//                     <Col xs="12" className="text-center mt-3 mb-5">
//                         <h3 className="mb-4">Quite Simply: It really works. So why wait?</h3>
//                         <Link to="/signup"><Button className="white-btn" color="light">Join Now</Button></Link>
//                     </Col>
//                 </Row>
//             </div>
//     )
// }

// export default Home;









    class PopularMake extends Component {
        DrawRows(){
            var table = [];
            var popularMakesImages = [Suzuki, Mitsubishi, Mercedes, Lexus, Honda, Ford, BMW, Audi];
            for(let i = 0; i < popularMakesImages.length; i++){
                table.push(
    
                    <Row className="mx-0">
                        {
                            this.DrawCols(popularMakesImages, i)
                        }
                        <Col xs="12" className="my-2">
                          
                        </Col>
                    </Row>
                )
                i += 3;
            }
            return table;
        }
    
        DrawCols(popularMakesImages, index){
            var table = [];
            for (let i = index; i < index + 4; i++) {
                table.push(
                    <Col xs="12" md="2" className="text-center my-2">
                        <img data-aos="flip-up" src={popularMakesImages[i]} alt="Our league person" className="img-fluid" />
                        
                    </Col>
                    
                )
            }
            return table;
        }
    
        render(){
            return(
                <div className="our-league-section">
                    <Row className="mx-0">
                        <Col xs="12">
                            <h5 className="my-4">Popular Make</h5>
                        </Col>
                    </Row>
    
                    {
                        this.DrawRows()
                        
                    }
    
                    
                </div>
            );
        }
    }
    
    export default PopularMake;