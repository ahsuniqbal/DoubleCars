import React from 'react';
import { Row, Col, Container, Label} from 'reactstrap';
import '../../styles/Blogs.css'
import BlogsDemoImage1 from '../../../../assets/BlogsDemoImage1.png' 
import BlogsDemoImage2 from '../../../../assets/BlogsDemoImage2.png' 
import RelatedStoriesCell from './RelatedStoriesCell';
import {RelatedStoriesCell1, RelatedStoriesCell2} from './RelatedStoriesCell'
import SimilarCarCell from './SimilarCarCell';
import {SimilarCarCell1, SimilarCarCell2, SimilarCarCell3} from './SimilarCarCell'
import FBlogLogo from '../../../../assets/FBlogLogo.svg'
import TBlogLogo from '../../../../assets/TBlogLogo.svg'
import PBlogLogo from '../../../../assets/PBlogLogo.svg'


const Blogs = () => {
    return(
        <body className = "blogs-body">
            <Container>
                <Row>
                    <Col xs = "12" md = "12" sm = "12" className = "blogs-column">
                            <Label className = "blog-read-label">23 December  •  2 min read </Label> <br/>
                            <Row>
                            <Col xs = "12" md = "6">
                                <h3 className = "blogs-heading">The next generation car is here!</h3>
                            </Col>
                            <Col xs = "12" md = "6" className = "text-right">
                                <img src = {PBlogLogo} className = "img-fluid"/>
                                <img src = {FBlogLogo} className = "img-fluid"/>
                                <img src = {TBlogLogo} className = "img-fluid"/>
                            </Col>

                            {/* <Col xs = "12" md = "1" className = "text-right">
                                
                            </Col>

                            <Col xs = "12" md = "1" className = "text-right">
                                <img src = {FBlogLogo} className = "img-fluid"/>
                            </Col> */}
                            </Row>
                            
                            <img src = {BlogsDemoImage1} className = "img-fluid blog-header-image" width= "100%"/>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md = "9" sm = "12" xs = "12" style = {{marginTop: '2rem'}}>
                        <p className = "blog-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst. Nulla dictum metus id risus porta, sed venenatis libero egestas. Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus. </p>
                        <blockquote className = "blog-blockquote">“Nothing wrong in saying that this is how next generation cars would look like.”<br/>- Peter Adam</blockquote>
                        <p className = "blog-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus. </p>
                        
                        <h4 className = "blog-sub-heading">What about price?</h4>
                        <p className = "blog-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst. Nulla dictum metus id risus porta, sed venenatis libero egestas. Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus. </p>
                        <Row>
                            <Col xs = "12" md = "12" className = "text-center">
                            <img src = {BlogsDemoImage2} className = "img-fluid"/>
                            <Label className = "image-credit-label">Image by: Getty Images - John Doe Photography</Label>
                        
                            </Col>
                        </Row>
                        <p className = "blog-content" style = {{marginBottom: '10rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst. Nulla dictum metus id risus porta, sed venenatis libero egestas. Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus. </p>
                        
                    </Col>

                    <Col md = "3" sm = "12" xs = "12">
                        <Label className = "related-heading">Related Stories</Label>
                        <RelatedStoriesCell/>
                        <RelatedStoriesCell1/>
                        <RelatedStoriesCell2/>
                        
                        <Label className = "similar-car-heading">Similar Cars for Sale</Label>
                        <SimilarCarCell/>
                        <SimilarCarCell1/>
                        <SimilarCarCell2/>
                        <SimilarCarCell3/>
                    </Col>
                </Row>
            </Container>
    </body>
    )
}

export default Blogs;