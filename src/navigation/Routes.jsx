import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const BlogsHome = React.lazy(() => import('../pages/Blogs/components/BlogsHome/BlogsHome'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Login = React.lazy(() => import('../pages/Authentication/Login'));
const Signup = React.lazy(() => import('../pages/Authentication/Signup'));
const Products = React.lazy(() => import('../pages/Products'));
const ProductDetails = React.lazy(() => import ('../pages/ProductDetails/components/ProductDetails'))
const DealerProfile = React.lazy(() => import ('../pages/DealerProfile'))
const TermsAndCondition = React.lazy(() => import ('../pages/PrivacyAndTerms/components/TermsAndCondition'))
const PrivacyPolicy = React.lazy(() => import ('../pages/PrivacyAndTerms/components/PrivacyPolicy'))
const ContactUs = React.lazy(() => import ('../pages/ContactUs'))
const Blogs = React.lazy(() => import('../pages/Blogs/components/Blogs/Blogs'));
const Chat = React.lazy(() => import('../pages/ChatMessenger'));
const SavedCars = React.lazy(() => import('../pages/SavedCars/components/SavedCars'));

const Dashboard=React.lazy(()=>import('../pages/Dashboard/Components/Dashboard'))
const FullViewHeader=React.lazy(()=>import('../pages/FullViewHeader/Components/FullViewHeader'))
/////////////////////// MUST READ BEFORE CREATING A ROUTE /////////////////////

// To show the page to every visitor public keyword will be true
// To hide the page from all visitors public will be false,
// To show the page to only logged in users restricted keyword will be false
// To show the page to only logged out users restricted will be true
// The exact param comes into play when you have multiple paths that have similar names
// The exact param disables the partial matching for a route and makes sure that it only returns the route if the path is an EXACT match to the current url.

/////////////////////// MUST READ BEFORE CREATING A ROUTE /////////////////////

const routes = [
    { path: '/', exact: true, name: 'Home', public: true, restricted: false, component: Home },
    { path: '/about', exact: true, name: 'About', public: true, restricted: false, component: About },
    { path: '/blogs', exact: true, name: 'Blogs home page', public: true, restricted: false, component: BlogsHome },
    { path: '/blogs/:id', exact: true, name: 'Blogs', public: true, restricted: false, component: Blogs },
    { path: '/profile', exact: true, name: 'Profile', public: false, restricted: false, component: Profile },
    { path: '/login', exact: true, name: 'Login', public: true, restricted: true, component: Login },
    { path: '/signup', exact: true, name: 'Signup', public: true, restricted: true, component: Signup },
    { path: '/products', exact: true, name: 'Products', public: true, restricted: false, component: Products },
    { path: '/product/:id', exact: true, name: 'Product Details', public: true, restricted: false, component: ProductDetails },
    { path: '/dealer/:id', exact: true, name: 'Dealer Profile', public: true, restricted: false, component: DealerProfile },
    { path: '/termsandconditions', exact: true, name: 'Terms and Condition', public: true, restricted: false, component: TermsAndCondition },
    { path: '/privacypolicy', exact: true, name: 'Privacy and Policy', public: true, restricted: false, component: PrivacyPolicy },
    { path: '/contactus', exact: true, name: 'Contact Us', public: true, restricted: false, component: ContactUs },
    // { path: '/chat', exact: true, name: 'Chat', public: false, restricted: false, component: Chat },
    { path: '/saved-cars', exact: true, name: 'SavedCars', public: false, restricted: false, component: SavedCars},
    
    // dashboard route
    { path: '/dashboard', exact: true, name: 'Dashboard', public: true, component: Dashboard },
    { path: '/fullviewheader', exact: true, name: 'Full View Header', public: true, component: FullViewHeader },
];

export default routes;