import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Navigation/NavigationBar';
import Footer from '../page/Footer/Footer';

const ChefDetails = () => {
    return (
        <div>
            <NavigationBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default ChefDetails;