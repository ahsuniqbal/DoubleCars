import React from 'react';
import { Button } from 'reactstrap';
import UpperSection from './UpperSection'
import { Link } from 'react-router-dom';
import '../../styles/BlogsHome.css'

const BlogsHome = () => {
    return(
        <div className = "text-center">
        <h3>Welcome to the Blog Page </h3>
        <Link className = "" to={'/blogs/1'}>
            <Button>Tap to see the blogs</Button>
        </Link>
        <UpperSection/>
    </div>
    )
}

export default BlogsHome;