import React from 'react';
import { Row, Col } from 'reactstrap';
import Skeleton from '@material-ui/lab/Skeleton';
import '../styles/Skeleton.css';

export const ProductSkeleton = () => {
    return(
        <div className="product-skeleton">
            <Skeleton variant="rect" width={298} height={178} animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Row>
                <Col xs="3">
                    <Skeleton variant="text" width={50} height={50} animation="wave" />
                </Col>
                <Col xs="9" className="mt-2">
                    <Skeleton variant="text" animation="wave" />
                </Col>
            </Row>
        </div>
    );
};

export const FiltersSkeleton = (props) => {
    // console.log('props',props)
    return(
        <div key={props.index ? props.index : 1} className="filters-skeleton">
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Row>
                <Col xs="9" className="mt-2">
                    <Skeleton variant="text" animation="wave" />
                </Col>
            </Row>
        </div>
    );
};