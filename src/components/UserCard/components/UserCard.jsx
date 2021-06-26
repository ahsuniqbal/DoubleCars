import React from 'react';
import { Card, CardBody, CardTitle, Row, Col, Button } from 'reactstrap';

import { Link } from 'react-router-dom';
import '../styles/UserCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const UserCard = (props) => {

  return (
    <Card className="user-card">
        {/* Link to the product details page */}
        <Link to={"/dealer/" + props.userId}>
            <div className="user-img">
                {/* Lazy load component used for product cover image */}
                <LazyLoadImage className="card-img mx-auto"  effect="blur" src={props.productImg} />
            </div>
        </Link>
        
        <CardBody>
            <Row>
                <Col xs={props.allowBookmark ? "9" : "12"}>
                    {/* Link to the product details page */}
                    <Link to={"/dealer/" + props.userId}>
                        {/* Name of the car */}
                        <CardTitle>{props.productTitle}</CardTitle>
                    </Link>
                    <Link className = "view-inv-link" to={"/dealer/" + props.userId}>
                        <Button color = "primary" size = "lg" block className = "view-inv-button">View Inventory</Button>
                    </Link>
                </Col>
            </Row>
        </CardBody>
       
    </Card>
  );
}

export default UserCard;
