import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header'
import HomeImageSlider from './HomeImageSlider';
import PopularMake from './PopularMake'

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
        <div className = "">
            {/* <form onSubmit={(e) => Search(e, document.getElementById('search-input').value)}>
                <input type="text" id="search-input" />
                <button type="submit">ss</button>
            </form>     */}
        <Header/>
        <HomeImageSlider/>
        <PopularMake/>

       

        </div>
    )
}

export default Home;