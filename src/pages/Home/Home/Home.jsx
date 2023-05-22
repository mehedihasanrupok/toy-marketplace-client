import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Galary from '../Galary/Galary';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    // Update the document title based on the current location
    useEffect(() => {
        document.title = `BabyToy | ${location.pathname === '/' ? 'Home' : ''}`;
    }, [location]);

    
    return (
        <div>
            <Banner></Banner>
            <Galary></Galary>
        </div>
    );
};

export default Home;