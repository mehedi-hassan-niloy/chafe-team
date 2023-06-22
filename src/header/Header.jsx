import React from 'react';
import banner from '../assets/img/chef.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='mt-4'>
            <Container>
                <Row>
                    <Col className=' ' lg={6}>
                        <div>
                        <h1 className='ms-5 me-5 mt-4 text-primary text-start'>Our Chef <span className='text-info'>Team</span> </h1>
                        <p className='ms-5 me-5 fs-5'>​Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
                        <div className=''>
                            <Button className='ms-5 mt-4 bg-info'>Read More</Button>
                        </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img className='rounded-3 w-75 h-100 ms-5' src={banner} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;