import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from './Banner';
import BusinessStat from './BusinessStat';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Tools/>
            <BusinessStat/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;