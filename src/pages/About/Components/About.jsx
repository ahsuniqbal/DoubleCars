import React from 'react';
import '../styles/About.css'
import { Row, Col, Container, Label} from 'reactstrap';
const About = () => {
  return (
    <body className = "about-body">
      <Container>
        <Row>
            <Col className = "about-column">
              <h4 className = "about-heading">Who are we?</h4>
              <p className = "about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst. Nulla dictum metus id risus porta, sed venenatis libero egestas. Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci lorem, mattis at porta vitae, accumsan vel libero. In sit amet magna nunc. Curabitur at purus iaculis, rutrum neque sit amet, ornare lorem. 
              Donec est metus, sagittis a nunc suscipit, varius facilisis est. In hac habitasse platea dictumst. Nulla dictum metus id risus porta, sed venenatis libero egestas. Donec laoreet ac ex eget rhoncus. Proin vel diam luctus, finibus mi ac, condimentum nunc. Sed interdum lacinia turpis, et tempus neque laoreet a. Nulla nec aliquam velit. Cras sit amet leo a elit egestas congue quis sit amet lacus.</p>
              </Col>   
        </Row>
      </Container>
    </body>
  );
}

export default About;
