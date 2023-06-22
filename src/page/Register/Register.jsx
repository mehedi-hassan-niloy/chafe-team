import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLoginButton from '../SocialLoginButton/SocialLoginButton';


const Register = () => {
    const [error, setError] = useState('')
    const { createUser, upadateUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handelRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        setError('')
        if (password.length < 6) {
            setError('your password must 6 digit')
            return;

        }

        createUser(email, password, name, photo)
            .then(result => {
                const createdUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })


    }

    return (

        <div className='h-50 w-25 mx-auto mt-4'>
            <Form onSubmit={handelRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name"required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button className='bg-info mb-3 w-100' variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
            <Form.Text className="text-muted mb-3">
                Already Have an Account?<Link to='/login'>Login</Link>
            </Form.Text>
            <p className='mb-4 text-danger'>{error}</p>


            <SocialLoginButton />
        </div>
    );
};

export default Register;