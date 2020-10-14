import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
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
            {
                banners ? <div>{banners.bannerResult[0].bannerId} </div>: null
                
            }

            <h3>Say Hello to AB </h3>
        </div>
    )
}

export { Slider };