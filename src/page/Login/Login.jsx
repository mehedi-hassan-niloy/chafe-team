import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLoginButton from '../SocialLoginButton/SocialLoginButton';



const Login = () => {
    const [error, setError] = useState('')
    const { signIn, setLoadin } = useContext(AuthContext);

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
           if (password.length < 6) {
            setError('Password must ne 6 digit')
            return;

        }
        signIn(email, password)
            .then(result => {
                const logUser = result.user;
                setError('')
                setLoadin(false)
                form.reset()
            })
            .catch(error => {
                setError(error.message)
                setLoadin(false)

            })

    }


    return (
        <div className='h-50 w-25 mx-auto mt-4'>
           
            <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button className='bg-info w-100 mb-3' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Form.Text className="text-muted mb-5">
                You Don't Have an Account?<Link to='/register'>Register</Link>
            </Form.Text>
            <p className='mb-4 text-danger'>{error}</p>
            
            <SocialLoginButton></SocialLoginButton>
        </div>
    );
};

export default Login;