import React from 'react';
import { Button, Row, Col, Container, Label } from 'reactstrap';
import '../styles/Blogs.css'
import BlogsDemoImage1 from '../../../assets/BlogsDemoImage1.png' 
const Blogs = () => {
    return(
        <body className = "blogs-body">
            <Container>
                <Row>
                    <Col xs = "12" md = "12" sm = "12" className = "blogs-column">
                       <Label className = "blog-read-label">23 December  •  2 min read </Label> <br/>
                       <h3 className = "blogs-heading">The next generation car is here!</h3>
                        <img src = {BlogsDemoImage1} className = "img-fluid" width= "100%"/>
                    </Col>
                </Row>
            </Container>
    </body>
    )
}

export default Blogs;