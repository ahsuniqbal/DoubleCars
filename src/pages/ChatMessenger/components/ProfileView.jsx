import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import BlogPageImage4 from '../../../assets/BlogPageImage4.png';
import '../styles/ProfileView.css';

const ProfileView = () => {
    return (
        <Card className="profile-view">
            <CardBody>
                <h6>Inquiring For</h6>

                <div className="inquaring-for-card">
                    <div>
                    <CardImg src={BlogPageImage4} />
                    </div>
                    <div>
                    <CardTitle title="2019 Acura MDX Hy...">2019 Acura MDX Hy...</CardTitle>
                    <CardSubtitle>17,863 Mileage · California</CardSubtitle>
                    <CardText>$25,664</CardText>
                    </div>
                </div>
                
            </CardBody>
        </Card>
    )
}

export default ProfileView
