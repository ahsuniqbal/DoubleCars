import React from 'react';
import { Col, Row, Button, CustomInput } from 'reactstrap';
import '../styles/SellCar.css';
import GooglePlayImg from '../../../assets/GooglePlay.png'
import Mobile from '../../../assets/mobile Image.png'
import Upload from '../../../assets/upload.svg'
import Chat from '../../../assets/message-square.svg'
import Checkbox from '../../../assets/check-square.svg'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

const SellCar = () => {
   
      
    return(
  
                <div className='main'>
                    <div className='first'>
                        <Row>
                            <Col md='7' sm='6'>
                               <div className='blue-bg'>
                                    <h2 className='blue-head'>
                                            Sell Your Car On Our Platform <br/> With Ease
                                        </h2>
                                        <p className='blue-text'> 
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.Impedit laborum blanditiis repellat sapiente harum veniam labore,
                                            numquam illo provident distinctio voluptatem perferendis possimus est quaerat!
                                        </p>
                                        <button className='google-play'><img src={GooglePlayImg} alt='get it on google play'/></button>
                                        <Button outline className='button'>Learn More</Button>
                               </div>

                                <div className='white-bg'>
                                    <div>
                                        <img src={Upload}/>
                                        <h2 className='white-head'>Upload Car</h2>
                                    
                                    <p>Download the app and upload your car in few steps</p>
                                    </div>
                                    <div>
                                        <img src={Chat}/>
                                        <h2 className='white-head'>Get Leads</h2>
                                    
                                    <p>Get original leads and keep track on your car seat</p>
                                    </div>
                                    <div>
                                        <img src={Checkbox}/>
                                        <h2  className='white-head'>Sell Car</h2>
                                    
                                    <p>Negotiate with the seller and sell your car!</p>
                                    </div>
                                </div>

                            </Col>
                            <Col  md='5' sm='6'>
                                <div>
                                <img src={Mobile}/>
                                </div>

                                <div></div>
                            </Col>
                        </Row>
                    </div>
                    <div className='second'>

                    </div>
                </div>
   
        
    )
  
}

export default SellCar;