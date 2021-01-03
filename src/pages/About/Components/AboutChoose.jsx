import React from 'react';
import { Col, Row, Label, Button } from 'reactstrap';
import AboutChooseDummy from '../../../assets/AboutChooseDummy.png'
import '../styles/AboutChoose.css'
import { Check} from 'react-feather';
const AboutChoose = () => {
      
    return(
        <Row >
           <Col xs = "12" md = "4" className = "about-choose-col">
                <img src = {AboutChooseDummy} className = "img-fluid " alt = "demo Image"/>
           </Col>
           <Col md = "1" className = "about-choose-col"></Col>
           <Col xs = "12" md = "7" className = "about-choose-col">
                <h2>Why choose us?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet.</p>
                <ul className="choose-list">
                        <li className="nav-item">
                        <p><Check className = "about-check-icon"/>  Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li className="nav-item">
                        <p><Check className = "about-check-icon"/> Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li className="nav-item">
                        <p><Check className = "about-check-icon"/> Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                        <li className="nav-item">
                            <p><Check className = "about-check-icon"/> Lorem ipsum dolor sit amet consectetur.</p>
                        </li>
                       
                        
                       
                      
                    </ul> 
           </Col>

        </Row>
        
    )
  
}

export default AboutChoose;