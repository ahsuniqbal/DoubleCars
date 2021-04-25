import React from 'react';
// import '../styles/PrivacyPolicy.css'
import {Row, Col, Card, CardBody} from 'reactstrap'
const StatsTable = () => {
    return(
       
        <div>
            <Card className="mt-5">
                <CardBody>
                    <Row>
                        <Col>
                           
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


                        </Col>
                    </Row>
                    
                    
                </CardBody>
            </Card> 
        
       
    </div>
    
    )
}

export default StatsTable;