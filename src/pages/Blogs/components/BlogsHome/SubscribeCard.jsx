import React,{useState} from 'react';
import {Card, Input, CardText,CardTitle, Button, Row, Col} from 'reactstrap';
 import '../../styles/SubscribeCard.css'

const SubsribeCard = () => { 
    const [subscribeEmail,setEmail]=useState('')
    return(
           <div>
                <Card body inverse  className='subscribe-us-card'>
                    <CardTitle tag="h2" className='subscribe-us-head'>Subscribe Us</CardTitle>
                    <CardText className='subscrbe-detail'>Enter yor email and dont miss updates from us!</CardText>
                    {/* <div className = "subscribe-us-field-button"> */}
                    <Row>
                        <Col xs = "12" md = "12" sm = "12">
                        <Input type="email" value={subscribeEmail} className = "subscribe-email" id="exampleEmail" placeholder="Your email address" onChange={(e)=>setEmail(e.targe.value)}/>
                        <Button outline className='subscribe-button'>Subscribe</Button>
                    
                        </Col>
                    </Row>
                        {/* </div> */}
                    </Card>
           </div> 
    )
  
}

export default SubsribeCard;