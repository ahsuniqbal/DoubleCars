import React from 'react';
import '../../styles/Blogs.css'
import SmilarCellDemoimg1 from '../../../../assets/SmilarCellDemoimg1.png'
import SmilarCellDemoimg3 from '../../../../assets/SmilarCellDemoimg3.png'
import SmilarCellDemoimg4 from '../../../../assets/SmilarCellDemoimg4.png'
import SmilarCellDemoimg2 from '../../../../assets/SmilarCellDemoimg2.png'
import { Row, Col, Card,CardTitle, CardSubtitle} from 'reactstrap';
const SimilarCarCell = () => {
    return(
        <Card className = "mb-4 similar-card-cell">
            <Row className = "">
                <Col md = "6">
                    <img className = "img-fluid similar-cell-card-image" src={SmilarCellDemoimg1} alt="Card image" />
                </Col>
                <Col md = "5" className = "mt-3">
                    <CardTitle className = "similar-car-title">2019 Mercedes Benz Hybrid</CardTitle>
                    <CardSubtitle className="mb-2 similar-card-price">$32,500</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}

const SimilarCarCell1 = () => {
    return(
        <Card className = "mb-4 similar-card-cell">
            <Row className = "">
                <Col md = "6">
                    <img className = "img-fluid similar-cell-card-image" src={SmilarCellDemoimg2} alt="Card image" />
                </Col>
                <Col md = "5" className = "mt-3">
                    <CardTitle className = "similar-car-title">2019 Mercedes Benz Hybrid</CardTitle>
                    <CardSubtitle className="mb-2 similar-card-price">$32,500</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}
const SimilarCarCell2 = () => {
    return(
        <Card className = "mb-4 similar-card-cell">
            <Row className = "">
                <Col md = "6">
                    <img className = "img-fluid similar-cell-card-image" src={SmilarCellDemoimg3} alt="Card image" />
                </Col>
                <Col md = "5" className = "mt-3">
                    <CardTitle className = "similar-car-title">2019 Mercedes Benz Hybrid</CardTitle>
                    <CardSubtitle className="mb-2 similar-card-price">$32,500</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}
const SimilarCarCell3 = () => {
    return(
        <Card className = "mb-4 similar-card-cell">
            <Row className = "">
                <Col md = "6">
                    <img className = "img-fluid similar-cell-card-image" src={SmilarCellDemoimg4} alt="Card image" />
                </Col>
                <Col md = "5" className = "mt-3">
                    <CardTitle className = "similar-car-title">2019 Mercedes Benz Hybrid</CardTitle>
                    <CardSubtitle className="mb-2 similar-card-price">$32,500</CardSubtitle>
                </Col>
            </Row>
      </Card>
        
    )
}

export default SimilarCarCell;
export {SimilarCarCell1, SimilarCarCell2, SimilarCarCell3}