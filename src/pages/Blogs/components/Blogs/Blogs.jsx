import React from 'react';
import { Row, Col, Container, Label} from 'reactstrap';
import '../../styles/Blogs.css'
import BlogsDemoImage1 from '../../../../assets/BlogsDemoImage1.png' 
import RelatedStoriesCell from './RelatedStoriesCell';
import SimilarCarCell from './SimilarCarCell';
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
                <Row>
                    <Col md = "8" sm = "12" xs = "12">
                        <p className = "blog-content mt-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst. Nulla dictum metus id risus porta, sed venenatis libero egestas. Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus. </p>
                        <h4 className = "blog-sub-heading mb-4">What abour price?</h4>
                        <p className = "blog-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst. Nulla dictum metus id risus porta, sed venenatis libero egestas. Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus. </p>
                        <img src = {BlogsDemoImage1} className = "img-fluid"/>
                        <p className = "blog-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst. Nulla dictum metus id risus porta, sed venenatis libero egestas. Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus. </p>
                        
                    </Col>

                    <Col md = "4" sm = "12" xs = "12">
                        <Label className = "cell-heading">Related Stories</Label>
                        <RelatedStoriesCell/>
                        <RelatedStoriesCell/>
                        
                        <Label className = "cell-heading">Similar Cars for Sell</Label>
                        <SimilarCarCell/>
                        <SimilarCarCell/>
                    </Col>
                </Row>
            </Container>
    </body>
    )
}

export default Blogs;