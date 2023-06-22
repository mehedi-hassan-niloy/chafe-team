import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
            })
    }
    return (
        <div>



            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink className="nav-link text-primary fs-3 me-4" aria-current="page" to="/">Chef <span className='text-info'>Team</span></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes" >
                                {
                                    user ?
                                        <div className='d-flex'>
                                            <p className='text-white me-4 pt-2'>{user.displayName}</p>
                                             <img style={{ width: '40px', height: '40px' }} src={user.photoURL} alt="" className='rounded-circle me-4' />
                                            <Button className='bg-info' onClick={handelLogOut} variant="secondary">Logout</Button>
                                        </div>
                                        :
                                        <Link to='/login'>
                                            <Button className='bg-info' variant="secondary">Login</Button>
                                        </Link>
                                }

                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div >
    );
};

export default NavigationBar;