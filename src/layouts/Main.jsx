import React from 'react';
import NavigationBar from '../Navigation/NavigationBar';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Food from '../page/Food/Food';
import Works from '../page/Work/Works';
import Footer from '../page/Footer/Footer';



const Main = () => {
    return (
        <div>
            <NavigationBar />
            <Header />
            <Outlet></Outlet>
            <Food />
            <Works />
            <Footer />

        </div>
    );
};

export default Main;