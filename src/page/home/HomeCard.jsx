
import React from 'react';
import { Button, Card, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/solid'

const HomeCard = ({ data }) => {
    const { _id, picture, name, experience, likes, number } = data;
    return (
        <div>
            <Col>
                <Card className=" shadow-lg p-1 mb-5 bg-body rounded m-2">
                    <Card.Img variant="top" className='' src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className='d-flex justify-content-between'>
                            <p >Experience:{experience}</p>
                            <p> Recipe : {number}</p>
                        </Card.Text>
                        <Card.Text className='d-flex justify-content-start'>
                            <p>Like: {likes} <HeartIcon style={{ width: '25px', height: '25px' }} /></p>
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/details/${_id}`}><Button className='w-100 bg-info'>View Recipes</Button></Link>
                </Card>
            </Col>


        </div>
    );
};

export default HomeCard;