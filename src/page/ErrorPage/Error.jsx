import React from 'react';
import { FaceSmileIcon } from '@heroicons/react/24/solid';
import { Link, useRouteError } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import errorLogo from './../../assets/img/error.png'

const Error = () => {
  const { error, status } = useRouteError()
  return (
    <div className='m-5 p-5'>
      <h1 className='d-flex justify-content-center align-items-center' >
        <span>Error</span>
      </h1>
      <h1 className='d-flex justify-content-center align-items-center'>
        {status || 404}
      </h1>
      <div className='d-flex justify-content-center align-items-center'>
        <img className='w-25 h-25' src={errorLogo} alt="" />
      </div>
      <p className='d-flex justify-content-center align-items-center'>{error?.message}</p>
      <div className='d-flex justify-content-center align-items-center m-5'>
        <Link><Button className='m-5'>Back To Home</Button></Link>
      </div>
    </div>
  );
};

export default Error;