import React from 'react';
import { Button, Card, CardGroup, ListGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid'


const DetailsChef = () => {
  const data = useLoaderData()
  const { _id, picture, name, experience, likes, number, about, recipe_one, recipe_two, recipe_three, ingredients_one, reating, ingredients_two, ingredients_three, ingredients_four, ingredients_five } = data;

  const notify = (event) => {
    event.currentTarget.disabled = true;
    toast('☺️ Save Food')
  }


  return (
    <div className='m-lg-5 m-md-5'>
      <Toaster />
      <div class="row">
        <div class="col-lg-8 col-md-8 col-12">
          <div className='pt-4 p-lg-4 m-md-4'>
            <div className=' mb-3 mt-5 m-5' >
              <div className=''>
                <img src={picture} className='rounded  shadow-lg p-3 mb-5 bg-body-tertiary ' style={{ width: '700px', height: '350px' }} alt="" />
              </div>
              <div className=''>
                <div className='mb-5'>
                  <h1>{name}</h1>
                </div>
                <div className=' shadow-lg p-3 mb-5 bg-body-tertiary rounded' style={{ width: '700px' }}>
                  <h2 className='text-primary mb-5'>Abo<span className='text-info'>ut</span></h2>
                  <p className='mb-5'>{about}</p>
                  <div className='d-flex justify-content-between mb-5'>
                    <p>Experience :{experience}</p>
                    <p>Recipe:{number}</p>
                    <span className='d-flex justify-content-start'>
                      <p>Like: {likes} <HeartIcon style={{ width: '25px', height: '25px' }} /></p>
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div className='pt-4 p-lg-4 m-md-4'>
            <h2 className='text-center text-primary mb-5'>Chef Be<span className='text-info'>st Food</span></h2>

            <Card className='rounded  shadow-lg p-3 mb-5 bg-body-tertiary' style={{ width: '25 rem' }}>
              <Card.Img variant="top" src={recipe_one.photo} />
              <Card.Body>
                <Card.Title>{recipe_one.recipe_name}</Card.Title>
                <Card.Text>
                  {recipe_one.cooking}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item >
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_one.name}</p>
                    <p>{ingredients_one.amount}</p>
                    <p>{ingredients_four.name}</p>
                    <p>{ingredients_four.amount}</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_two.name}</p>
                    <p>{ingredients_two.amount}</p>
                    <p>{ingredients_five.name}</p>
                    <p>{ingredients_five.amount}</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_three.name}</p>
                    <p>{ingredients_three.amount}</p>
                  </div>
                </ListGroup.Item>

              </ListGroup>

              <Button className='bg-info w-full' onClick={notify} variant="primary">Food Save</Button>

            </Card>
            <Card className='rounded  shadow-lg p-3 mb-5 bg-body-tertiary' style={{ width: '25 rem' }}>
              <Card.Img variant="top" src={recipe_two.photo} />
              <Card.Body>
                <Card.Title>{recipe_two.recipe_name}</Card.Title>
                <Card.Text>
                  {recipe_two.cooking}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item >
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_one.name}</p>
                    <p>{ingredients_one.amount}</p>
                    <p>{ingredients_four.name}</p>
                    <p>{ingredients_four.amount}</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_two.name}</p>
                    <p>{ingredients_two.amount}</p>
                    <p>{ingredients_five.name}</p>
                    <p>{ingredients_five.amount}</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_three.name}</p>
                    <p>{ingredients_three.amount}</p>
                  </div>
                </ListGroup.Item>

              </ListGroup>
              
                <Button className='bg-info w-full' onClick={notify} variant="primary">Food Save</Button>
              
            </Card>
            <Card className='rounded  shadow-lg p-3 mb-5 bg-body-tertiary' style={{ width: '25 rem' }}>
              <Card.Img variant="top" src={recipe_one.photo} />
              <Card.Body>
                <Card.Title>{recipe_three.recipe_name}</Card.Title>
                <Card.Text>
                  {recipe_three.cooking}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item >
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_one.name}</p>
                    <p>{ingredients_one.amount}</p>
                    <p>{ingredients_four.name}</p>
                    <p>{ingredients_four.amount}</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_two.name}</p>
                    <p>{ingredients_two.amount}</p>
                    <p>{ingredients_five.name}</p>
                    <p>{ingredients_five.amount}</p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className='d-flex justify-content-between'>
                    <p>{ingredients_three.name}</p>
                    <p>{ingredients_three.amount}</p>
                  </div>
                </ListGroup.Item>

              </ListGroup>

              <Button className='bg-info w-full' onClick={notify} variant="primary">Food Save</Button>

            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsChef;