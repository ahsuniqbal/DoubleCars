import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/Blogs.css'
const BlogsHome = () => {
    return(
        <div className = "text-center">
        <h3>Welcome to the Blog Page </h3>
        <Link className = "" to={'/blogs/'}>
            <Button>Tap to see the blogs</Button>
        </Link>
        
    </div>
    )
}

export default BlogsHome;