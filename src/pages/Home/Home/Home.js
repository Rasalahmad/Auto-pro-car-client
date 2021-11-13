import React from 'react';
import Carousel from '../Carousel/Carousel';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Technology from '../Technology/Technology';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Carousel></Carousel>
            <Services></Services>
            <Technology></Technology>
            <Review></Review>
        </div>
    );
};

export default Home;

