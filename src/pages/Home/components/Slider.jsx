import React, { useEffect, useState } from 'react';
import { GetBannerResults } from '../api/GetRequests';

function Slider(){
    const [ banners, setBanners ] = useState(null);

    useEffect(() => {
        GetBannerResults().then(value => {
            setBanners(value);
        })
    }, []);

    return(
        <div>
            

            
        </div>
    )
}

export { Slider };