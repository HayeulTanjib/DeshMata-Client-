import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessStat from './BusinessStat';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <BusinessStat/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;