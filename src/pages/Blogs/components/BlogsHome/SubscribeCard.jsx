import React,{useState} from 'react';
import {Card, Input, CardText,CardTitle, Button} from 'reactstrap';
 import '../../styles/SubscribeCard.css'

const SubsribeCard = () => { 
    const [subscribeEmail,setEmail]=useState('')
    return(
           <div>
                <Card body inverse  className='main-card'>
                    <CardTitle tag="h2" className='head'>Subscribe Us</CardTitle>
                    <CardText>Enter yor email and dont miss updates from us!</CardText>
                    <Input type="email" value={subscribeEmail} id="exampleEmail" placeholder="Your email address" onChange={(e)=>setEmail(e.targe.value)}/>
                    <Button outline className='button'>Subscribe</Button>
                </Card>
           </div> 
    )
  
}

export default SubsribeCard;