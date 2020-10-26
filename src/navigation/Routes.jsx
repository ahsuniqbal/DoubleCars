import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const Blogs = React.lazy(() => import('../pages/Blogs'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Login = React.lazy(() => import('../pages/Authentication/Login'));
const Products = React.lazy(() => import('../pages/Products'));
const productResults = React.lazy(() => import ('../pages/ProductResults'))

const routes = [
    { path: '/', exact: true, name: 'Home', public: true, restricted: false, component: Home },
    { path: '/about', name: 'About', public: true, restricted: false, component: About },
    { path: '/blogs', name: 'Blogs', public: true, restricted: false, component: Blogs },
    { path: '/profile', exact: true, name: 'Profile', public: false, restricted: false, component: Profile },
    { path: '/login', exact: true, name: 'Login', public: true, restricted: true, component: Login },
    { path: '/products', exact: true, name: 'Products', public: true, restricted: true, component: Products },
    { path: '/productresults', exact: true, name: 'ProductResults', public: true, restricted: true, component: productResults },
];

export default routes;