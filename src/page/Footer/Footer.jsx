import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div>

<div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-xs-12">
                    <div className="first">
                        <h4>Our Chef Team</h4>
                        <p>Jhon China</p>
                        <p> Roman</p>
                        <p>Smith</p>
                        
                    </div>
                </div>

                <div className="col-md-4 col-xs-12">
                    <div className="second">
                        <h4> Navigate</h4>
                        <ul>
                           <li><Link to='/'>Home</Link></li>
                           <li><Link to='/blog'>Blog</Link></li>
                           <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-4 col-xs-12">
                    <div className="third">
                        <h4> Contact</h4>
                        <ul>
                            <li>Andreea Mihaela Bunget </li>
                            <li></li>


                          <li><i className="far fa-envelope"></i> andreea@andreeabunget.co.uk</li>
                            <li><i className="far fa-envelope"></i> email@yahoo.com</li>
                          <li><i className="fas fa-map-marker-alt"></i> London, UK </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='fs-5 text-center text-white'>
                        © 2023 Chef Recipe. All rights reserved.
                    </div>
    </div>
     

       </div>

    );
};

export default Footer;