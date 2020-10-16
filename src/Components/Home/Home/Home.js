import React from 'react';
import Header from '../Header/Header';
import Navbars from '../Navbar/Navbars';
import Works from '../Works/Works';
import Services from '../Services/Services';
import Client from '../Client/Client';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';

const HeaderMain = () => {
    return (
        <>
            <Navbars />
            <Header />
            <Client />
            <Services />
            <Works />
            <Review />
            <Footer />
        </>
    );
};

export default HeaderMain;