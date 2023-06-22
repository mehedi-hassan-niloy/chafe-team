import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

const SingelFood = ({data}) => {
    const {picture, name, price} = data;
    const notify = () =>
        toast ('☺️ Buy Food')
    return (
        <div>
            <Toaster/>
            <Col>
          <Card className='shadow-lg p-1 mb-5 bg-body rounded'>
            <Card.Img style={{height:'200px'}} variant="top" src={picture} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                Price : {price}
              </Card.Text>
            </Card.Body>
            <Button onClick={notify} className='bg-info'>Buy Now</Button>
          </Card>
        </Col>
        </div>
    );
};

export default SingelFood;