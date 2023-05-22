import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Galary from '../Galary/Galary';
import { useLocation } from 'react-router-dom';
import Seller from '../Seller/Seller';
import Shop from '../Shop/Shop';
import CategoryTabs from '../CategoryTabs/CategoryTabs';

const Home = () => {
    const location = useLocation();

    // Update the document title based on the current location
    useEffect(() => {
        document.title = `BabyToy | ${location.pathname === '/' ? 'Home' : ''}`;
    }, [location]);


    return (
        <div data-aos="fade-up">
            <Banner></Banner>
            <Shop></Shop>
            <CategoryTabs></CategoryTabs>
            <Galary></Galary>
            <Seller></Seller>
        </div>
    );
};

export default Home;