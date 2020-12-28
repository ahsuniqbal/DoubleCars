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
const InfiniteScroll = React.lazy(() => import('../pages/InfiniteScroll'));
const Chat = React.lazy(() => import('../pages/ChatMessenger'))
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
    { path: '/about', name: 'About', public: true, restricted: true, component: About },
    { path: '/blogshome', name: 'Blogs', public: true, restricted: false, component: BlogsHome },
    { path: '/profile', exact: true, name: 'Profile', public: false, restricted: false, component: Profile },
    { path: '/login', exact: true, name: 'Login', public: true, restricted: true, component: Login },
    { path: '/signup', exact: true, name: 'Signup', public: true, restricted: true, component: Signup },
    { path: '/products', exact: true, name: 'Products', public: true, restricted: true, component: Products },
    { path: '/product/:id', exact: true, name: 'Product Details', public: true, restricted: false, component: ProductDetails },
    { path: '/dealer/:id', exact: true, name: 'Dealer Profile', public: true, restricted: false, component: DealerProfile },
    { path: '/termsandconditions', name: 'Terms and Condition', public: true, restricted: true, component: TermsAndCondition },
    { path: '/privacypolicy', name: 'Privacy and Policy', public: true, restricted: true, component: PrivacyPolicy },
    { path: '/contactus', name: 'Contact Us', public: true, restricted: true, component: ContactUs },
    { path: '/blogs', name: 'Blogs', public: true, restricted: false, component: Blogs },
    { path: '/chat', name: 'Chat', public: true, restricted: false, component: Chat },
    { path: '/blogs/1', name: 'Blogs', public: true, restricted: false, component: Blogs },
    { path: '/infinite-scroll', name: 'Infinite Scroll', public: true, restricted: false, component: InfiniteScroll },
];

export default routes;