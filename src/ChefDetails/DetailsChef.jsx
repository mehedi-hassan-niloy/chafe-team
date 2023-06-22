import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid'


const DetailsChef = () => {
    const data = useLoaderData()
    const { _id, picture, name, experience, likes, number, about, recipe_one, recipe_two, recipe_three, ingredients_one, reating,ingredients_two,ingredients_three, ingredients_four, ingredients_five } = data;

    const notify = (event) => {
        event.currentTarget.disabled = true;
        toast('☺️ Save Food')
    }


    return (
        <div>
            <Toaster />

            <div style={{ paddingLeft: '300px', marginTop:'30px' }} >
                <Card style={{ width: '70%', height: '30%' }}>
                    <Card.Img style={{ height: '300px' }} variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {about}
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            <Card.Title>Experience :{experience}</Card.Title>
                            <Card.Title>Recipe:{number}</Card.Title>
                            <Card.Text className='d-flex justify-content-start'>
                            <p>Like: {likes} <HeartIcon style={{ width: '25px', height: '25px' }} /></p>
                        </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </div>

                

            <div className='m-5 mt-5 p-5'>
            <h2  className='text-center text-primary mb-5'>Chef Be<span className='text-info'>st Food</span></h2>

                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={recipe_one.photo} />
                        <Card.Body>
                            <Card.Title>{recipe_one.recipe_name}</Card.Title>
                            <Card.Text>
                                <h6>Cooking Method :</h6> {recipe_one.cooking}
                            </Card.Text>
                        </Card.Body>
                        <div className='ms-2 mt-1 me-2'>
                            <div>
                                <h4>Ingredients :</h4>
                             <div className='d-flex justify-content-between'>
                             <div>
                              <li>{ingredients_one.name}</li>
                                <li>{ingredients_one.amount}</li>
                              </div>
                              <div>
                              <li>{ingredients_two.name}</li>
                                <li>{ingredients_two.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_three.name}</li>
                                <li>{ingredients_three.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_four.name}</li>
                                <li>{ingredients_four.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_five.name}</li>
                                <li>{ingredients_five.amount}</li> 
                              </div>
                             </div>
                            </div>
                        </div>
                        <hr className='text-info h-100'/>
                        <p className='ms-3 mt-1'>  Reating :
                                <span className='me-2 ms-3'> 
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                
                                </span>
                                 {reating} </p>
                       
                        <Button className='bg-info' onClick={notify} variant="primary">Food Save</Button>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={recipe_two.photo} />
                        <Card.Body>
                            <Card.Title>{recipe_two.recipe_name}</Card.Title>
                            <Card.Text>
                                <h6>Cooking Method :</h6> {recipe_two.cooking}
                            </Card.Text>
                        </Card.Body>
                        <div className='ms-2 mt-1 me-2'>
                            <div>
                                <h4>Ingredients :</h4>
                             <div className='d-flex justify-content-between'>
                             <div>
                              <li>{ingredients_one.name}</li>
                                <li>{ingredients_one.amount}</li>
                              </div>
                              <div>
                              <li>{ingredients_two.name}</li>
                                <li>{ingredients_two.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_three.name}</li>
                                <li>{ingredients_three.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_four.name}</li>
                                <li>{ingredients_four.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_five.name}</li>
                                <li>{ingredients_five.amount}</li> 
                              </div>
                             </div>
                            </div>
                        </div>
                        <hr className='text-info h-100'/>
                       <p className='ms-3 mt-1'> Reating :  
                                <span className='me-2 ms-3'> 
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                
                                </span>
                                 {reating} </p>
                        <Button className='bg-info' onClick={notify} variant="primary">Food Save</Button>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={recipe_one.photo} />
                        <Card.Body>
                            <Card.Title>{recipe_three.recipe_name}</Card.Title>
                            <Card.Text>
                                <h6>Cooking Method :</h6> {recipe_three.cooking}
                            </Card.Text>
                        </Card.Body>
                        <div className='ms-2 mt-1 me-2'>
                            <div>
                                <h4>Ingredients :</h4>
                             <div className='d-flex justify-content-between'>
                             <div>
                              <li>{ingredients_one.name}</li>
                                <li>{ingredients_one.amount}</li>
                              </div>
                              <div>
                              <li>{ingredients_two.name}</li>
                                <li>{ingredients_two.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_three.name}</li>
                                <li>{ingredients_three.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_four.name}</li>
                                <li>{ingredients_four.amount}</li> 
                              </div>
                              <div>
                              <li>{ingredients_five.name}</li>
                                <li>{ingredients_five.amount}</li> 
                              </div>
                             </div>
                            </div>
                        </div>
                        <hr className='text-info h-100'/>
                       <p className='ms-3 mt-1'> Reating : 
                                <span className='me-3 ms-2'> 
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                <StarIcon style={{height: '20px', width: '20px'}}/>
                                
                                </span>
                                 {reating} </p>
                        <Button className='bg-info' onClick={notify} variant="primary">Food Save</Button>
                    </Card>
                </CardGroup>



            </div>

        </div>
    );
};

export default DetailsChef;