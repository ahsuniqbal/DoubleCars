import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'
import RecommendedCar from './RecommendedCar';
import PopularMake from './PopularMake'
import TrendingCar from './TrendingCar';
import TrendingBodyTypes from './TrendingBodyTypes/TrendingBodyTypes'
import BuyNow from './BuyNow';

const Home = () => {
    const history = useHistory();

    const Search = (e, searchInput) => {
        e.preventDefault();
        // sessionStorage.setItem('searchInput', searchInput);
        history.push({
            pathname: '/products',
            search: '?search='+searchInput,
        })
    }
    return(
        <div className = "trending-body-types">
            {/* <form onSubmit={(e) => Search(e, document.getElementById('search-input').value)}>
                <input type="text" id="search-input" />
                <button type="submit">ss</button>
            </form>     */}
        <Header/>
      
        <RecommendedCar/>
        <TrendingCar/>
        <TrendingBodyTypes/>
        <BuyNow/>
        <PopularMake/>

        </div>
    )
}

export default Home;