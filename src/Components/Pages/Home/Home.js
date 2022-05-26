import React from 'react';

import Banner from './Banner';
import BusinessStat from './BusinessStat';
import HomeSlider from './HomeSlider';
import Map from './Map';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <BusinessStat/>
            <Reviews/>
            <HomeSlider/>
            <Map/>
        </div>
    );
};

export default Home;