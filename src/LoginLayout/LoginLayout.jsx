import React from 'react';
import NavigationBar from '../Navigation/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default LoginLayout;