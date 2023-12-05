import React from 'react';
import banner from '../assets/img/chef.jpg'
import banner2 from '../assets/img/banner2.jpg'
import banner3 from '../assets/img/banner3.jpg'
import banner4 from '../assets/img/banner4.jpg'
import banner5 from '../assets/img/benner5.jpg'
import banner6 from '../assets/img/banner6.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap';




import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
    return (
        <div className='mt-4'>
       
<Carousel   showArrows={true}>
                <div>
                   
                        
                    <img  src= {banner}/>
                    <h1 className='legend  text-primary '>Our Chef <span className='text-info '>Team</span> </h1>
                    </div>
                <div>
                    <img src={banner2} />
                    <h1 className='legend  text-primary '>Our Chef <span className='text-info '>Team</span> </h1>
                </div>
                <div>
                    <img src={banner3} />
                    <h1 className='legend  text-primary '>Our Chef <span className='text-info '>Team</span> </h1>
                </div>
                <div>
                    <img src={banner4} />
                    <h1 className='legend  text-primary '>Our Chef <span className='text-info '>Team</span> </h1>
                </div>
                <div>
                    <img src={banner5} />
                    <h1 className='legend  text-primary '>Our Chef <span className='text-info '>Team</span> </h1>
                </div>
                <div>
                    <img src={banner6}/>
                    <h1 className='legend  text-primary '>Our Chef <span className='text-info '>Team</span> </h1>
                </div>
            </Carousel>


        </div>
    );
};

export default Header;