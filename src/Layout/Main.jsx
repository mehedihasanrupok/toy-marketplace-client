import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';


// window.location.pathname !== '/login' ? 

const Main = () => {

    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>

    );
};

export default Main;