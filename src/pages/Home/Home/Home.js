import React from 'react';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Technology from '../Technology/Technology';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Technology></Technology>
            <Review></Review>
        </div>
    );
};

export default Home;

