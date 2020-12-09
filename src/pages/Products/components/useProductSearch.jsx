import { useEffect, useState } from 'react';
// import axios from 'axios';
import { GetSearchResult } from '../api/GetRequests';

function useProductSearch(searchQuery, pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setProducts([]);
    }, [searchQuery]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        
        // let cancel;
        GetSearchResult(searchQuery, pageNumber).then(doc => {
            setProducts(prevProducts => {
                return [...new Set([...prevProducts, ...doc.map(car => car.Name)])]
            });
            setHasMore(doc.length > 0);
            setLoading(false);
        }).catch(error => {
            alert(error.message);
            setError(true);
        })
    }, [searchQuery, pageNumber])

    return { loading, error, products, hasMore }
}

export default useProductSearch;